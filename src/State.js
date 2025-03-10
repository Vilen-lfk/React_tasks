import React from 'react';

function State({ id, name, surname, age,inCart ,addToCart,isEdit, toggleMode, editProd }) {
    function ProductField({ id, text, 
        type, isEdit, editProd }) { 
        return isEdit
            ? <input value={text} onChange={event => editProd(id, type, event)} /> 
            : <span>{text}</span>
        ;
    }
    return <div>
       
        name: <ProductField
			id={id}
			text={name}
			type="name"
			isEdit={isEdit}
			editProd={editProd}
		/>,
        surname: <ProductField
			id={id}
			text={surname}
			type="surname"
			isEdit={isEdit}
			editProd={editProd}
		/>,
        age: <ProductField
			id={id}
			text={age}
			type="age"
			isEdit={isEdit}
			editProd={editProd}
		/>,
        
        <button onClick={() => toggleMode(id)}>
			{isEdit ? 'save': 'edit'}
		</button>
    </div>;
}

export default State;