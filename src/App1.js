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
    
    //53
    const [ame, setAme] = useState('prod');
  
    //54
    const [inCart, setInCart] = useState(false);  
    const [users, setUsers] = useState(false); 
    //55
    const [count, setCount] = useState(0);

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
        <div>
	        <span>{ame}</span>
        	<button onClick={() => setAme('xxxx')}>btn</button>
        </div>
        <p>52-53</p>
        <div>
            <p>
                <span>{name}</span>
        	    <button onClick={() => setName('Даша')}>изменить</button>
            </p>
            <p>
                <span>{surname}</span>
                <button onClick={() => setSurname('Лысенко')}>изменить</button>
            </p>
            <p>
                <span>{age}</span>
                <button onClick={() => setAge('18')}>изменить</button>
            </p>
        </div>
        <p>54 Пример</p>
        <div>
            <span>{inCart ? 'в корзине' : 'не в корзине'}</span>
            <button onClick={() => setInCart(!inCart)}>btn</button>
        <p>54 Задание</p>
            <span>{users ? "забанен" : "не забанен"}</span>
            <button onClick={() => setUsers(true)}>забанить</button>
            <button onClick={() => setUsers(false)}>убрать бан</button>
        </div>
        <div>
            <p>55</p>
            <button onClick={() => setCount(count - 1)}>-</button>   
            <span>{count}</span>
		    <button onClick={() => setCount(count + 1)}>+</button>
        </div>

    </>
    );

}
export default App1;