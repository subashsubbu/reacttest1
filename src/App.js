import React from 'react'
import { LoginForm } from './LoginForm'
import { Experiment } from './Experiment'

export function App() {
    return (
        <div>
            <h1> SubaSH</h1>
            {/* <Experiemnt/> */}
        </div>
    )
}



// import React from 'react'
// import { ExperimentWindow } from 'jspsych-react';
// import { timelineFactory } from './timeline';
// import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';



//  export function App() {
//     const callback = (targetID) => console.log(targetID);
//     const timeline = timelineFactory(callback);
//     return (
//         <div>
//             <ExperimentWindow
//                 path='/experiment'
//                 settings={{ timeline }}
//                 plugins={{ callbackImageKeyboardResponsePlugin }}
//             />

//         </div>
//     )
// }

