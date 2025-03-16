import React, { useState } from 'react';
import uuid from "react-uuid";
import TempInp from "./TempInp";
import Verdict from "./Verdict";
import './styles.css';
import { styles } from "./styles";

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
            <div style={styles.class5}>
                <h1>100 Задание</h1>
                <p style={styles.class6}>TEXT</p>
                <p style={styles.class7}>TEXT</p>
                <p style={styles.class8}>TEXT</p>
            </div>

        </>
        
    );
}

export default App;