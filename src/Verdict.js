import React, { useState } from 'react';
import uuid from "react-uuid";

function Verdict({ temperature }) {
    return (
        <div>
            {temperature >= 100 ? "Вода кипит!" : "Вода не кипит"}
        </div>
    );
}
export default Verdict;