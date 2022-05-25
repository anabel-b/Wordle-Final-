import React, { useState } from "react";
import {defaultGrid} from '../Words';
import Letters from "./Letters";

function Grid() {
    const[grid, setGrid] = useState(defaultGrid);
    return (
        <div className= "grid">

            <div className="row0">
                <Letters letterPosition={0} attemptNum={0}/>
                <Letters letterPosition={1} attemptNum={0}/>
                <Letters letterPosition={2} attemptNum={0}/>
                <Letters letterPosition={3} attemptNum={0}/>
                <Letters letterPosition={4} attemptNum={0}/>    
            </div>

            <div className="row1">
                <Letters letterPosition={0} attemptNum={1}/>
                <Letters letterPosition={1} attemptNum={1}/>
                <Letters letterPosition={2} attemptNum={1}/>
                <Letters letterPosition={3} attemptNum={1}/>
                <Letters letterPosition={4} attemptNum={1}/>    
            </div>
                
            <div className="row2">
                <Letters letterPosition={0} attemptNum={2}/>
                <Letters letterPosition={1} attemptNum={2}/>
                <Letters letterPosition={2} attemptNum={2}/>
                <Letters letterPosition={3} attemptNum={2}/>
                <Letters letterPosition={4} attemptNum={2}/>    
            </div>
                
            <div className="row3">
                <Letters letterPosition={0} attemptNum={0}/>
                <Letters letterPosition={1} attemptNum={0}/>
                <Letters letterPosition={2} attemptNum={0}/>
                <Letters letterPosition={3} attemptNum={0}/>
                <Letters letterPosition={4} attemptNum={0}/>    
            </div>
                
            <div className="row4">
                <Letters letterPosition={0} attemptNum={3}/>
                <Letters letterPosition={1} attemptNum={3}/>
                <Letters letterPosition={2} attemptNum={3}/>
                <Letters letterPosition={3} attemptNum={3}/>
                <Letters letterPosition={4} attemptNum={3}/>    
            </div>

            <div className="row5">
                <Letters letterPosition={0} attemptNum={4}/>
                <Letters letterPosition={1} attemptNum={4}/>
                <Letters letterPosition={2} attemptNum={4}/>
                <Letters letterPosition={3} attemptNum={4}/>
                <Letters letterPosition={4} attemptNum={4}/>    
                </div>
                
            </div>
    );
}

export default Grid;