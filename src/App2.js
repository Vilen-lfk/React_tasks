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
    //60
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    function handleNum1(event){
        setNum1(event.target.value);
    }
    function handleNum2(event){
        setNum2(event.target.value);
    }
    function handlePlus(){
        setRes(Number(num1) + Number(num2));
    }
    function handleUmno(){
        setRes(Number(num1) * Number(num2));
    }
    //61
    const[vil, setVil] = useState('')
    const[vil1, setVil1] = useState('')
    const[r, setR] = useState('')
        function handleVil(event){
            setVil(event.target.value);
        }
        function handleVil1(event){
            setVil1(event.target.value);
        }
        function handleR(){
            setR(Number(vil) + Number(vil1));
        }
    //62
    const [checked, setChecked] = useState(true);
    function handleChange() {
		setChecked(!checked); // инвертируем стейт
	}
    //--------
    const [hello, setHello] = useState(true)
    function hadleHello(){
        setHello(!hello);
    }
    //--------
    const [js, setJs] = useState(true)
    function handleJs(){
        setJs(!js);
    }
    const [css, setCss] = useState(true)
    function handleCss(){
        setCss(!css);
    }
    const [html, setHtml] = useState(true)
    function handleHtml(){
        setHtml(!html);
    }
    //63
    let message;
	if (checked) {
		message = <p>Здесь расположен контент только для взрослых</p>;
	} else {
		message = <p>Еще молоко на губах не отсохло</p>;
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
        <div>
            <h1>60 Задание</h1>
            <input num={num1} onChange={handleNum1} />
            <input num={num2} onChange={handleNum2} />
            
            <button onClick={handlePlus}>+</button>
            <button onClick={handleUmno}>*</button>
            <p>result: {res}</p>
	    </div>
        <div>
            <h1>61 Задание</h1>
            <textarea value={vil} onChange={handleVil}/>
            <textarea value={vil1} onChange={handleVil1}/>
            <button onClick={handleR}>+</button>
            <p>{r}</p>
	    </div>
        <div>
            <h1>62 Пример</h1>
    		<input type="checkbox" checked={true}  /> отмечен
	    	<input type="checkbox" checked={false} /> не отмечен
            <p>-----</p>
            <p><input type="checkbox" checked={checked} onChange={handleChange}/></p>
            <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
            <h1>62 Задание</h1>
            <p><input type="checkbox" checked={hello} onChange={hadleHello}/></p>
            <p>{hello ? 'Привет' : 'Пока'}</p>
            <h1>---------------</h1>
            <p><input type="checkbox" checked={js} onChange={handleJs}/> js</p>
            <p><input type="checkbox" checked={css} onChange={handleCss}/> css</p>
            <p><input type="checkbox" checked={html} onChange={handleHtml}/> html</p>
            <p>{js ? 'js' : ''} {css ? 'css' : ''} {html ? 'html' : ''} </p>
	    </div>
        <div>
            <h1>63 Задание</h1>
            <div>Вам есть 18?</div>
		    <input type="checkbox" checked={checked} 
			onChange={() => setChecked(!checked)} /> 
		    <div>{message}</div>
    	</div>
        </>
    );

}
export default App2;