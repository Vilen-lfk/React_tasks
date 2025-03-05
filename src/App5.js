import React, { useState } from 'react';

function App() {
    const initNotes = [
        {
            id: 'GYi9G_uC4gBF1e2SixDvu',
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13',
        },
        {
            id: 'IWSpfBPSV3SXgRF87uO74',
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23',
        },
        {
            id: 'JAmjRlfQT8rLTm5tG2m1L',
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33',
        },
    ];
    const [notes, setNotes] = useState(initNotes);
	
    function doSmth(id) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				note.prop1 += '!';
				note.prop2 += '!';
				note.prop3 += '!';
			}
			
			return note;
		}));
	}
	const result = notes.map(note => {
		return <li key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
			
			<button onClick={() => doSmth(note.id)}>
				*
			</button>
		</li>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}

export default App;