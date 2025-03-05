import React, { useState } from 'react';


function App() {
	//74
	function doSmth(index) {
		let copy = Object.assign([], notes);
		copy[index] = copy[index] ** 2; // что-то сделаем с элементом 
		setNotes(copy);
	}
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => doSmth(index)}>
			{note}
		</li>;
	});
	//75
	const initNotes = [
		{
			id: 'GYi9G_uC4gBF1e2SixDvu',
			prop1: 'value11',
			prop2: 'value12',
			prop3: 'value13',
		},
		{
			id: 'IWSpfBPSV3SXgRF87uO74',
			prop1: 'value21',
			prop2: 'value22',
			prop3: 'value23',
		},
		{
			id: 'JAmjRlfQT8rLTm5tG2m1L',
			prop1: 'value31',
			prop2: 'value32',
			prop3: 'value33',
		},
	];
	const [vils, setVils] = useState(initNotes);
	function addVils(){
		setVils([...vils, vils.length + 1]);
	}
	const res = vils.map(vil => {
		return <li key={vil.id}>
			<span>{vil.prop1}</span>
			<span>{vil.prop2}</span>
			<span>{vil.prop3}</span>
		</li>;
	});
	return (
	<>
		<div>
			<h1>74 Задание</h1>
			
			<ul>
				{result}
			</ul>
		</div>
		<div>
			<h1>75 Задание</h1>
			<ul>
				{res}
				<button onClick={addVils}>Добавить элемент</button>
			</ul>
		</div>
	</>
	);
}

export default App;