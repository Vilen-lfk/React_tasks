import React from 'react';

function State(props) {
    return (
        <>
            <p>
                id: <span>{props.id}</span> <br />
                name: <span>{props.name}</span> <br />
                surname: <span>{props.surname}</span> <br />
                age: <span>{props.age}</span> <br />
            </p>
        </>
    );
}

export default State;