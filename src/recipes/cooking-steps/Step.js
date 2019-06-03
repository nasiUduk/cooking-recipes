import React from 'react';
import { Timer } from './Timer';

export function Step(props) {
    const { step, isActive } = props;

    return (
        <div className="recipe-row">
            <div className="col-400">
                {step.name}
            </div>
            <div>
                {
                    step.durationInSec > 0
                        ? <Timer onClick={props.onToggle} 
                            isActive={isActive}
                            sequence={step.sequence} 
                            duration={step.durationInSec}/>
                        : <button onClick={() => props.onToggle({ sequence: step.sequence, active: false })}
                            disabled={!isActive}>
                            Done
                           </button>
                }
            </div>
        </div>
    );
}