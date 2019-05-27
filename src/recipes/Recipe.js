import React from 'react';

export function Recipe(props) {

    return (
        <div className="recipe-row">
            <div className="col-200">
                {props.recipe.name}
            </div>
            <div className="col-400">
                {props.recipe.desc}
            </div>
            <div>
                <button onClick={() => props.onClick(props.recipe.id)}>
                    Cook Now
                </button>
            </div>
        </div>
    );
}