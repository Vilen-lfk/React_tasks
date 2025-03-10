import React, { useState } from 'react';
import uuid from "react-uuid";

function TempInp({ temperature, setTemperature }) {
    return (
        <div>
            <label>Введите температуру (°C): </label>
            <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
            />
        </div>
    );
}
export default TempInp;