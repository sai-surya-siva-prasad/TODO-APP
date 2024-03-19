import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Create from './Create'; // Import the Create component

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(response => {
                console.log('testing');
                setTodos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []); 
    return (
        <div>
            <div>
                <h2>Todo List</h2>
                <Create/>
                {todos.length === 0 ? ( // Corrected the conditional rendering syntax
                    <div><h2>No Record</h2></div>
                ) : (
                    todos.map((todo, index) => ( // Added unique key for each todo
                        <div key={index} style={styles.todoItem}>{todo.task}</div>
                    ))
                )}
            </div>
        </div>
    );
}
const styles = {
    todoItem: {
        padding: '8px',
        marginBottom: '4px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    }
};

export default Home;
