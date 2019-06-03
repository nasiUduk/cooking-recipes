import { useState, useEffect } from 'react';

export function useFetchRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        loadRecipes().then(result => setRecipes(result))
    }, []);

    return recipes;
}

export function useFetchRecipe(id) {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        loadRecipes()
            .then(recipes => setRecipe(recipes.find(r => r.id === id)));
    }, [id]);

    return recipe;
}

function loadRecipes() {
    return fetch('/recipes.json')
        .then(res => {
            return res.json()
        });
}
