import React, { useState, useEffect } from 'react';
import { useFetchRecipe } from '../recipe-helper';
import { Step } from './Step';

export function CookingSteps(props) {

    let { recipeId } = props;
    let recipe = useFetchRecipe(+recipeId);
    const [steps, setSteps] = useState([]);
    const [currentSeq, setCurrentSeq] = useState(0);

    useEffect(() => {
        fetch('/cooking-steps.json')
            .then((res) => res.json())
            .then((result) => {
                const recipeWithSteps = result.find(r=> r.recipeId === +recipeId);
                const currentSteps = recipeWithSteps ? recipeWithSteps.steps  : [];
                setSteps(currentSteps);
                setCurrentSeq(currentSteps.length > 0 ? currentSteps[0].sequence : 0);
            });
    }, [recipeId]);

    function isActive(seq) {
        return currentSeq === seq;
    }

    function handleToggle({ sequence }) {
        setCurrentSeq(sequence + 1);
    }

    return (
        <div>
            <h3>
                {recipe.name}
            </h3>
            <div>
                {recipe.desc}
            </div>
            <div>
                <p>Steps :</p>
                <ul>
                    {
                        steps.map((step) => {
                            return (
                                <li key={step.sequence}>
                                    <Step onToggle={handleToggle}
                                        step={step}
                                        isActive={isActive(step.sequence)} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}