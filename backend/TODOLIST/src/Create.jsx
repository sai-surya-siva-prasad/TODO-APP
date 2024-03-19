import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        axios.post("http://localhost:3001/add", { task: task })
            .then(result => console.log(result))
            .catch(err => console.error(err)); // Changed then to catch for error handling
    }

    return (
        <div>
            <input type="text" placeholder="enter Task" onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add Task</button> {/* Corrected button click event */}
        </div>
    )
}

export default Create;
