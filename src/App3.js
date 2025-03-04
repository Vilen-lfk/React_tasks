import React, { useState } from 'react';

function App() {
	//66
	const [value, setValue] = useState('');

	//67
	const texts = ['text1', 'text2', 'text3', 'text4'];
	const [vil, setVil] = useState('');

	const options = texts.map((text, index) => {
		return <option key={index} value={index}>{text}</option>;
	});
	return( 
	<>
		<div>
			<h1>66 Задание</h1>
				<select value={value} onChange={event => setValue(event.target.value)}>
				<option value="1">0-12</option>
				<option value="2">13-17</option>
				<option value="3">18-25</option>
				<option value="4">больше 25</option>
			</select>
		</div>
		<p>
			{value === '1' && 'от 0 до 12 лет'}
			{value === '2' && '13 до 17'}
			{value === '3' && '18 до 25'}
			{value === '4' && 'старше 25 лет'}
		</p>
		<h1>67 Задание</h1>
		<div>
			<select value={vil} onChange={event => setVil(event.target.value)}>
			{options}
			</select>
			<p>
				ваш выбор: {vil}
			</p>
		</div>

	</>);
}

export default App;