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

    </>
    );
}

export default App1;