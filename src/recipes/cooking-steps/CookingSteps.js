import React from 'react';
import { useFetchRecipe } from '../recipe-helper';

export function CookingSteps(props) {

    const recipe = useFetchRecipe(+props.recipeId);

    return (
        <div>
            <h3>
                {recipe.name}
            </h3>
            <div>
                <p>
                    {recipe.desc}
                </p>
            </div>
            <div>
                <p>Steps :</p>
                <ul>
                </ul>
            </div>
        </div>
    );
}