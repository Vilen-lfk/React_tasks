import React, { useState } from 'react';
import uuid from 'react-uuid';

//58
function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}
//---
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function App2(){
    const user = [
        {id: uuid(), name: 'use1', surn: 'sur1'},
        {id: uuid(), name: 'use2', surn: 'sur2'},
    ]
    
	//58
    const [age, setAge] = useState('');
    function handleChange(event) {
        setAge(Number(event.target.value)); // Преобразуем строку в число
    }
    //---------
    const [fahrenheit, setFahrenheit] = useState('');

    function handleChan(event) {
        setFahrenheit(event.target.value);
    }
    //59
    const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);

    function handleChange1(event) {
		setValue1(+event.target.value);
	}
	function handleChange2(event) {
		setValue2(+event.target.value);
	}
    function handleChange3(event){
        setValue3(+event.target.value);
    }
    function handleChange4(event){
        setValue4(+event.target.value);
    }
    return(
        <>
        <ul>
            {user.map(user => (
                <li key={user.id}>
                    {user.name} {user.surn}
                </li>
            ))}
        </ul> 
        <div>
            <h1>58 Задание</h1>
            <input type="number" value={age} onChange={handleChange} placeholder="Введите возраст"/>
            <p>Ваш год рождения: {getBirthYear (Number(age))}</p>
	    </div>
        <div>
            <h1>58-2 Задание</h1>
            <input
                type="number"
                value={fahrenheit}
                onChange={handleChan}
                placeholder="Введите градусы °F"
            />
            <p>Температура в °C: {fahrenheitToCelsius(Number(fahrenheit)).toFixed(1)}</p>
        </div>
        <div>
            <h1>59 Задание</h1>
            <input value={value1} onChange={handleChange1} />
            <input value={value2} onChange={handleChange2} />
            <input value={value3} onChange={handleChange3} />
            <input value={value4} onChange={handleChange4} />
            <p>result: {(value1 + value2 + value3 + value4) / 4}</p>
	    </div>
        </>
    );

}
export default App2;