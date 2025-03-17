import React, { useState } from 'react';
import uuid from "react-uuid";
import TempInp from "./TempInp";
import Verdict from "./Verdict";
import './styles.css';
import { styles } from "./styles";
import Block from "./Block";
import styled from 'styled-components';

function App() {
    //----------------------------------------95-98
    const [temperature, setTemperature] = useState("");

    //--------------------------------------102
    //для div:
	const wd1 = '200px';
	const br1 = '2px solid brown';
	const pd1 = '10px';
	const ta1 = 'center';

	//для первого p:
	const co1 = 'orangered';
	const fw1 = 'bold';

	//для второго p:
	const fs1 = 'italic';
	const co2 = 'brown';
	
	//для третьего p:
	const bco1 = 'orange';
	const co3 = 'white';

    //-----------------------------------------103
    const Container = styled.div`
	width: 300px;
	border: 2px solid brown;
	padding: 10px;
	text-align: center;
`;

const Text1 = styled.p`
	color: orangered;
	font-weight: bold;
`;

const Text2 = styled.p`
	font-style: italic;
	color: brown;
`;

const Text3 = styled.p`
	background-color: orange;
	font-weight: bold;
	color: white;
`;
    //105-------------------------------------------
    
    const Input = styled.input`
    background: ${(props) => (props.first ? "yellow" : "green")};
    margin: 5px;
    font-size: 18px;
`;

    const Button = styled.button`
    background: ${(props) => (props.warn ? "yellow" : "green")};
    color: ${(props) => (props.warn ? "red" : "white")};
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    border: none;
    cursor: pointer;
`;
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
            <div>
                <h1>101 Задание</h1>
                <div style = {{
                    width: '200px',
                    border: '2px solid brown',
                    padding: '10px',
                    textAlign: 'center' }}>
                    <p style={{
                        color: 'green',
                        fontWeight: 'bold' }}>
                        text
                    </p>
                    <p style = {{
                        fontStyle: 'red',
                        color: 'brown' }}>
                        text
                    </p>
                    <p style = {{
                        backgroundColor: 'green',
                        fontWeight: 'bold',
                        color: 'white' }}>
                        text
                    </p>
		        </div>
            </div>
            <div>
                <h1>102 задача</h1>
                <div style = {{
                    width: wd1,
                    border: br1,
                    padding: pd1,
                    textAlign: ta1 }}>
                    <p style = {{ color: co1, fontWeight: fw1 }}>
                        text
                    </p>
                    <p style = {{ fontStyle: fs1, color: co2 }}>
                        text
                    </p>
                    <p style = {{ 
                        backgroundColor: bco1,
                        fontWeight: fw1,
                        color: co3 }}>
                        text
                    </p>
                </div>
            </div>
            <div>
                <h1>103 Задание</h1>
                <Container>
			        <Text1>text</Text1>
			        <Text2>text</Text2>
			        <Text3>text</Text3>
		        </Container>
            </div>
            <div>
                <h1>104 Задача</h1>
                <Block />
            </div>
            <div>
                <h1>105 Задача</h1>
                <Container>
                    <Input first />
                    <Input placeholder="name" type="text" />
                    <Input type="password" />
                    <Button>Submit</Button>
                    <Button warn>Warning</Button>
                </Container>
            </div>
            
        </>
        
    );
}

export default App;