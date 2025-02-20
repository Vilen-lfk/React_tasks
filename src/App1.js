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
    //39 => 40
    const mrr = ['a','b','c','d','e']
    const res = mrr.map(function(item, index) {
        return <li key={index}>{item}</li>
    })
    //41
    const users = [
        {name: 'Vlad ', surn: 'Antonento ', age: 30},
        {name: 'Elnur ', surn: 'Abiltarov ', age: 31},
        {name: 'Vilen ', surn: 'Karamurzayev ', age: 32},
    ];
    const prods = users.map(function(use, index){
        return <li key = {index}>
            <span>{use.name}</span>
            <span>{use.surn}</span>
            <span>{use.age}</span>
        </li>
    });
    // 42
    const lol = [
        {id: 1, name: 'product1: ', cost: 100},
	    {id: 2, name: 'product2: ', cost: 200},
	    {id: 3, name: 'product3: ', cost: 300},
    ]
    const vlad = lol.map(function(item){
        return <p key = {item.id}>
            <span>{item.name}</span>
            <span>{item.cost}</span>
        </p>
    })
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
    <p>39 - 40</p>
    <ul>{res}</ul>
    <p>41</p>
    <ul>{prods}</ul>
    <p>42</p>
    <p>{vlad}</p>
    </>
    );
}

export default App1;