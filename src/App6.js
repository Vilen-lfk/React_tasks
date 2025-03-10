import React, { useState } from 'react';
import uuid from "react-uuid";
import State from "./State";

function App() {
    //85
	const initUsers = [
        {id: uuid(1), name: 'Aider', surname: 'surn1', age: 30, inCart: false},
        {id: uuid(2), name: 'Edem', surname: 'surn2', age: 31, inCart: false},
        {id: uuid(3), name: 'Alim', surname: 'surn3', age: 32, inCart: false},
    ];
    const [users, setUsers] = useState(initUsers)
    
	const renderUsers = users.map(user => (
        <State key={user.id} э
        name={user.name} 
        surname={user.surname} 
        age={user.age} 
        inCart={user.inCart}
        addToCart={addToCart}/>
    ));
    //86-87-88-89
    
    function addToCart(id) {
        setUsers(users.map(user => {
            if (user.id === id) {
                return { ...user, inCart: true };  // Создаем новый объект с обновленным значением inCart
            }
            return user;
        }));
    }
    function toggleMode(id) {
        setUsers(users.map(use => {
            if (use.id === id) {
                use.isEdit = !use.isEdit;
            }
            
            return use;
        }));
    }
    function editProd(id, field, event) {
        setUsers(users.map(use => {
            if (use.id === id) {
                use[field] = event.target.value;
            }
            
            return use;
        }));
    }
    const items = users.map(use =>{
        return <State
        key = {use.id}
        id =  {use.id}
        name ={use.name}
        surname = {use.surname}
        age = {use.age}
        isEdit={use.isEdit}
		toggleMode={toggleMode}
		editProd={editProd}
        />
    })
    
    return (
        <>
           <div>
            <h1>85 Задача</h1>
            {/*{renderUsers}*/}
		</div>
        <div>
            <h1>86-87 Задача</h1>
            {items}    
        </div> 
        </>
    );
}

export default App;