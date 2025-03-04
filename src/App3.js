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
	//68
	const [radio, setRadio] = useState(1)

	function chage(event){
		setRadio(event.target.value);
	}
	//69
	const [mass, setMass] = useState('text')
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
		<div>
			<h1>68 Задание</h1>
			<p>Ваш возраст:</p>
			<input
				type="radio"
				name="radio"
				value="17"
				checked={radio === '17' ? true : false}
				onChange={chage}
			/> 17 лет
			<input
				type="radio"
				name="radio"
				value="18"
				checked={radio === '18' ? true : false}
				onChange={chage}
			/> 18 лет
			<input
				type="radio"
				name="radio"
				value="19"
				checked={radio === '19' ? true : false}
				onChange={chage}
			/> 19 лет
			<p>
				мне {radio}
			</p>
		</div>
		<div>
			<input type="checkbox" defaultChecked={mass} />
		</div>

	</>);
}

export default App;