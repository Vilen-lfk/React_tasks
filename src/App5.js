import uuid from "react-uuid";
import React, { useState } from 'react';
import Product from './Product';
import Employee from "./Employee";

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
	//82
	const name = 'Elnur';
	const surname = 'Abiltarov';
	const  patronymic = 'Serverovich';
	const salary = '85000';
	//84
	const re = users.map(vils => {
		return <Employee 
		key = {vils.id} 
		name = {vils.name} 
		surname ={vils.surname} 
		patronymic = {vils.patronymic}
		salary = {vils.salary}/>
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
			<h1>78-80 Задание</h1>
			<Product />
			<Product />
		</div>
		<div>
			<h1>81 Задание</h1>
			<Employee name = 'Vilen' surname = 'Karamurzayev'  patronymic = 'Rustemovich' salary = '80000'/>
			<Employee name = 'Dasha' surname = 'Karamurzayeva'  patronymic = 'Ianovna' salary = '90000'/>
		</div>
		<div>
			<h1>82 Задание</h1>
			<Employee name ={name} surname = {surname} patronymic ={patronymic} salary = {salary}/>
		</div>
		<div>
			<h1>84 Задача</h1>
			{re}
		</div>
	
		</>
	); 
	
}


export default App;
