import React, { useState } from 'react';
import uuid from "react-uuid";
import TempInp from "./TempInp";
import Verdict from "./Verdict";
import './styles.css';

function App() {
    //95-98
    const [temperature, setTemperature] = useState("");

    return (
        <>
            <div>
                <h1>95 задание</h1>
                <TempInp temperature={temperature} setTemperature={setTemperature} />
                <Verdict temperature={parseFloat(temperature)} />
            </div>
            <div class='class1'>
                <h1>96 Задание</h1>
                <button class="class2">text</button><br />
                <button class="class3">text</button>
                <p class="class4">text</p>
		    </div>

        </>
        
    );
}

export default App;