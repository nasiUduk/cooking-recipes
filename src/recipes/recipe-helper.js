import { useState, useEffect } from 'react';

export function useFetchRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (recipes.length > 0) return;
        
        loadRecipes().then(recipes => setRecipes(recipes))
    });

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
    return fetch('http://localhost:3000/recipes.json')
        .then(res => {
            return res.json()
        });

}
