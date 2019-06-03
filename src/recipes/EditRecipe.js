import React from 'react';
import { RecipeForm } from './RecipeForm';
import { useFetchRecipe } from './recipe-helper';

export function EditRecipe({ recipeId }) {

    const fetchedRecipe = useFetchRecipe(recipeId) || {};

    return (
        <RecipeForm initialValues={fetchedRecipe} />
    );
}