import React from 'react';

function App1() {
    //33
    function show1() {
        alert(1);
    }
    function show2() {
        alert(2);
    }
    //34
    function showMess(text) {
		alert(text);
	}
    //35
    function func(event){
        console.log(event);
    }
    function handleClick(event) {
        console.log(event.target); // Выводит элемент, на который кликнули
    }
    
    //36
    function func(arg, event) {
		console.log(arg, event);
	}

    function f(arg, event, avg) {
		console.log(arg, event, avg);
	}
    //37
    const arr = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
	];
    //38
    const arr1 = [];
    for(let i = 0; i <= 5; i++){
        arr.push(<li>{i}</li>)
    }
	return( 
    <>
    <div> 
        <button onClick={show1}>act1</button>
        <button onClick={show2}>act2</button>
    </div>
    <p>-------------</p>
    <div>
		<button onClick={() => showMess('1')}>act1</button>
		<button onClick={() => showMess('2')}>act2</button>
		<button onClick={() => showMess('3')}>act3</button>
	</div>
    <button onClick={func}>cnopka</button>
    <button onClick={handleClick}>Кликни меня</button>
    <p>36</p>
    <button onClick={event => func('eee', event)}>ACT</button> 
    <button onClick={event => func(event ,'eee')}>ACT1</button> 
    <p>
    <button onClick={event => f('eee', event, 'vilen')}>ACT</button> 
    </p>
    <p>37</p>
    <p>{arr}</p>
    <p>38</p>
    <ul>{arr1}</ul>
    </>
    );
}

export default App1;