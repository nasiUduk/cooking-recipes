import React from 'react';
import { navigate } from '@reach/router'
import { Recipe } from './Recipe';
import { useFetchRecipes } from './recipe-helper';

export function Recipes() {
    const recipes = useFetchRecipes();

    function handleClick(id) {
        navigate(`cookingsteps/${id}`);
    }

    return (
        <ul>
            {
                recipes.map((recipe) => {
                return (
                    <li key={recipe.id}>
                        <Recipe recipe={recipe} onClick={handleClick} />
                    </li>
                );
            })
            }
        </ul>
    );
}