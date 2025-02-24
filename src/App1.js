import React, { useState } from 'react';
import uuid from 'react-uuid';

function App1() {
    //48
    const user = [
        {id: uuid(), name: 'use1', surn: 'sur1'},
        {id: uuid(), name: 'use2', surn: 'sur2'},
    ]
    //52
    const [name, setName] = useState('Вилен');
    const [surname, setSurname] = useState('Карамурзаев');
    const [age, setAge] = useState('19');
    

	return( 
    <>
        <ul>
            {user.map(user => (
                <li key={user.id}>
                    {user.name} {user.surn}
                </li>
            ))}
        </ul> 
        <div>
            <h2>Ваш профиль:</h2>
            <p>Имя: {name}</p>
            <p>Фамилия:{surname}</p>
            <p>Возраст:{age}</p>
        </div>
    </>
    );
}

export default App1;