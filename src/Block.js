import React, { useState } from 'react';
import uuid from "react-uuid";
import styled from 'styled-components';

function Block () {
    const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
`;

const Input = styled.input`
	margin: 5px;
	font-size: 18px;
`;
const Click = styled.button`
    bacgrouncolor: green;
    font-size: 18px;
    width: 150px;
    margin: 20px;
`;
    return (
        <Container>
            <p>АВТОРИЗАЦИЯ</p>
			<Input placeholder="name" type="text" />
			<Input placeholder="password" type="password" />
            <Click>Войти</Click>
		</Container>
    );
}
export default Block;