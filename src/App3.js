import React, { useState } from 'react';

function getSum(arr) {
	let sum = 0;
	
	for (const elem of arr) {
		sum += (+elem)/10;
	}
	
	return sum;
}
//71
const initDate = {
	year:  2025,
	month: 12,
	day:   31,
}

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
	//70
	const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), 
			event.target.value, ...notes.slice(index + 1)]); 
		// общая функция-обработчик
	}
	const result = notes.map((note, index) => {
		return <input
			key={index}
			value={note}
			onChange={event => changeHandler(index, event)}
		/>;
	});
	//71
	const [obj, setObj] = useState(initDate);
	function handle(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}
	function getWeekday(year, month, day) {
		const dateObj = new Date(year, month - 1, day); // JS использует 0-индексированные месяцы
		return dateObj.toLocaleDateString("ru-RU", { weekday: "long" }); // Возвращает день недели на русском
	  }
	//73
	const [note, setNote] = useState([1,2,3,4,5]);

	const res = note.map((notes, index) => {
		return <li key={index} > {notes}</li>
	})
	function addNote(){
		const newNote = note.length + 1; //Новый элемент = следующий номер
		setNote([...note, newNote]);
	}
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
			<h1>70 Задание</h1>
			<p>{result}</p>
			{getSum(notes)}
		</div>
		<div>
			<h1>71 Задание</h1>
			📅 Дата:
			<br />
			<input value={obj.year} onChange={event => handle('year', event)} /> 
			<input value={obj.month} onChange={event => handle('month', event)} /> 
			<input value={obj.day} onChange={event => handle('day', event)} /> 
			<br />
			{obj.year}-{obj.month}-{obj.day}
			<p>🗓 День недели: {getWeekday(obj.year, obj.month, obj.day)}</p>
		</div>
		<div>
			<h1>73 Задание</h1>
			<ul>
				{note.map((note, index) => (
				<li key={index}>{note}</li>
				))}
			</ul>
			<button onClick={addNote}>Добавить элемент</button>
    	</div>

	</>);
}

export default App;