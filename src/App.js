import React from 'react';

function App() {
	const arr = [1, 2, 3, 4, 5];
	const obj = {name: 'john', surname: 'smit'};
	const name = 'Dasha';
	const age = '18';
	const attr = 'block';
	return ( 
	<>
		<div>
		Vilen
			<h1>
				Язык JSX
			</h1>
			<p calss = 'eee'>
				Язык JSX - это обычный JavaScript, но с некоторыми дополнениями, позволяющими писать теги прямо в коде, без кавычек.
			</p>
			<ul>
				<li>Vilen</li>
				<li>Dasha</li>
				<li>Melisa</li>
				<li>Elnur</li>
				<li>Achmet</li>
				<li>Edem</li>
				<li>Aider</li>
				<li>Ervin</li>
			</ul>
		</div>
		<input />
		<input /><input /><input />
		<div id = {attr}>
			<p>name: {name}</p>
			<p>age: {age}</p>
		</div>
		<ul>
			<li>{arr[0]}</li>
			<li>{arr[1]}</li>
			<li>{arr[2]}</li>
			<li>{arr[3]}</li>	
			<li>{arr[4]}</li>
		</ul>	
		<p>
		name:    <span>{obj.name}</span>, 
		surname: <span>{obj.surname}</span>,
		</p>
	</>
);
}


export default App;