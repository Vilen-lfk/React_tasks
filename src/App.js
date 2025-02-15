import React from 'react';

function App() {
	const arr = [1, 2, 3, 4, 5];
	const obj = {name: 'john', surname: 'smit'};
	const name = 'Dasha';
	const age = '18';
	const attr = 'block';
	const str = <h1>TEXT</h1>
	const str1 = (<div>
		<ul>
			<li>text1</li>
			<li>text2</li>
			<li>text3</li>
		</ul>
	</div>);
	return /*str1;*/( 
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
		<div>
			{str}
			{str1}
		</div>
		<table border="1">
			<tr>
				<td>1</td>
				<td>2</td>
				<td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>5</td>
				<td>6</td>
			</tr>
			<tr>
				<td>7</td>
				<td>8</td>
				<td>9</td>
			</tr>
      </table>

		
	</>
);
}


export default App;