import uuid from "react-uuid";
import React, { useState } from 'react';
import Product from './Product';


function App() {
	
	//76
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
	
    const [notes, setNotes] = useState(initNotes);
	
    function doSmth(id) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				note.prop1 += '!';
				note.prop2 += '!';
				note.prop3 += '!';
			}
			
			return note;
		}));
	}
	const result = notes.map(note => {
		return <li key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
			
			<button onClick={() => doSmth(note.id)}>
				*
			</button>
		</li>;
	});
	
	//77
	const use = [
		{
			id: uuid(),
			name: 'name1',
			desc: 'long description 1',
			show: false,
		},
		{
			id: uuid(),
			name: 'name2',
			desc: 'long description 2',
			show: false,
		},
		{
			id: uuid(),
			name: 'name3',
			desc: 'long description 3',
			show: false,
		},
	];
	function toggleDescription(id){
		setUsers(
			users.map((user)=>
				user.id === id ? {...user, show: !user.show } : user
			)
		);
	}
	const [users, setUsers] = useState(use);
	const res = users.map(user =>{
		return <p key={user.id}>
			{user.name},
			{user.show && <i> {user.desc}</i>}
			<button onClick = {() => toggleDescription(user.id)}>
				{user.show ? 'Скрыть' : 'Показать'}
			</button>
		</p>
	})
	return(
		<>
		<div>
			<h1>76 Задание</h1>
			<ul>
				{result}
			</ul>
		</div>
		<div>
			<h1>77 Задание</h1>
			{res}
		</div>
		<div>
			<h1>78-79 Задание</h1>
			<Product />
			<Product />
		</div>
		</>
	); 
	
}


export default App;
