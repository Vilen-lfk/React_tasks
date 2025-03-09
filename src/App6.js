import React, { useState } from 'react';
import uuid from "react-uuid";
import State from "./State";

function App(props) {
    //85
	const initUsers = [
        {id: uuid(1), name: 'Aider', surname: 'surn1', age: 30},
        {id: uuid(2), name: 'Edem', surname: 'surn2', age: 31},
        {id: uuid(3), name: 'Alim', surname: 'surn3', age: 32},
    ];
    const [users, setUsers] = useState(initUsers)
	const renderUsers = users.map(user => (
        <State key={user.id} name={user.name} surname={user.surname} age={user.age} />
    ));
    //86
    const items = users.map(use =>{
        return <State
        key = {use.id}
        id =  {use.id}
        name ={use.name}
        surname = {use.surname}
        age = {use.age}
        />
    })
    return (
        <>
           <div>
            <h1>85 Задача</h1>
           {renderUsers}
		</div>
        <div>
            <h1>86 Задача</h1>
            {items}    
        </div> 
        </>
    );
}

export default App;