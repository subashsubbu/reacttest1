import React from 'react'
import { ExperimentWindow } from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';


export function Experiment() {
    const callback = (targetID) => console.log(targetID);
    const timeline = timelineFactory(callback);
    return (
        <div>
            <ExperimentWindow
                settings={{ timeline }}
                plugins={{ callbackImageKeyboardResponsePlugin }}
            />

        </div>
    )
}


