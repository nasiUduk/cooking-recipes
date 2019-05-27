import React from 'react';
import {Router} from '@reach/router'
import './App.css';
import { Recipes } from './recipes/Recipes';
import {CookingSteps} from './recipes/cooking-steps/CookingSteps';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          My Recipes
        </p>
      </header>
      <div>
        <Router>
          <Recipes path="/" />
          <CookingSteps path="cookingsteps/:recipeId" />
        </Router>
      </div>
    </div>
  );
}

export default App;
