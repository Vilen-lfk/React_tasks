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
	return (
	<>
		<div>
			<h1>74 Задание</h1>
			
			<ul>
				{result}
			</ul>
		</div>
	</>
	);
}

export default App;