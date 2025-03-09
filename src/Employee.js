import React from 'react';

function Employee(vil) {
    
    return (<>
        <p>
            name: <span>{vil.name}</span> <br></br>
            surname: <span>{vil.surname}</span> <br></br>
            patronymic: <span>{vil.patronymic}</span> <br></br>
            salary: <span>{vil.salary}</span> 
        </p>
    
    </>);
}

export default Employee;