import React, { useState, useEffect } from 'react';

export function Timer(props) {
    const { duration, isActive, sequence, onClick } = props;
    const [preparingDuration, setPreparingDuration] = useState(+duration || 0);
    const [timeLeft, setTimeLeft] = useState(formatToMinuteString(preparingDuration));
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) return;

        const durationInterval = setInterval(() => {
            setTimeLeft(formatToMinuteString(preparingDuration));
            if (preparingDuration > 0) {
                setPreparingDuration(preparingDuration - 1);
            }
            else {
                setStarted(false);

                onClick({
                    sequence: sequence
                });
            }
        }, 1000);

        return () => {
            clearInterval(durationInterval);
        }
    }, [preparingDuration, started, sequence, onClick]);

    function formatToMinuteString(seconds = 0) {
        return `${Math.floor(seconds / 60)}:${seconds % 60}`;
    }

    return (
        <div>
            {started
                ? timeLeft
                : <button onClick={() => setStarted(true)} disabled={!isActive}>Start</button>
            }
        </div>
    );
}