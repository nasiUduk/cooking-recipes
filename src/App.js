import React from 'react';
import {Router} from '@reach/router'
import './App.css';
import { Recipes } from './recipes/Recipes';
import {CookingSteps} from './recipes/cooking-steps/CookingSteps';
import { EditRecipe } from './recipes/EditRecipe';

function App() {
  return (
    <div className="App">
      <h1>
        <p>
          My Recipes
        </p>
      </h1>
      <div>
        <Router>
          <Recipes path="/" />
          <EditRecipe path="/recipe/add" />
          <EditRecipe path="/recipe/:recipeId" />
          <CookingSteps path="cookingsteps/:recipeId" />
        </Router>
      </div>
    </div>
  );
}

export default App;
