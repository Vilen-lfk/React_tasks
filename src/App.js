import React from 'react';

function App() {
	const arr = [1, 2, 3, 4, 5];
	const obj = {name: 'john', surname: 'smit'};
	const name = 'Dasha';
	const age = '18';
	const attr = 'block';
	const str = <h1>TEXT</h1>;
	const num1 = 4;
	const num2 = 2;
	//26-27
	let text;
	const isAbult = false;

	if (isAbult) {
		text = <p>Пользователю уже есть 18 лет.</p>;
	} else {
		text = <p>"Пользователю ещё нет 18 лет.</p>;
	}
	//28
	const age1 = 19;
	//29
	const isAuth = true
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
	  Можно сюда под Фигурными скобками 
	  записывать js-код 
		<div>
			result: {num1 ** num2}
			<div>result корень num1: {Math.sqrt(num1)}</div>
		</div>
		{text}
		{age1 > 18 ? <p>Вы совершеннолетний</p> : <p>Вы несовершеннолетний</p>}
		{isAuth && <p> вы авторизированы</p>}
	</>
);
}


export default App;



