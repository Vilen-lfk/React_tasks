import React from 'react';

function App() {
	const name = 'Dasha';
	const age = '18';
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
		<div>
			<p>name: {name}</p>
			<p>age: {age}</p>
		</div>

	</>
);
}


export default App;