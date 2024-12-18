import { Button, Card, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const initialValue = [
        {
            id: 1,
            text: 'consume cheese',
            done: false
        },
        {
            id: 2,
            text: 'sleep',
            done: false
        }
    ];


//We provide usestate with an initial value in the form of a function
//This function will be called only once when the component is mounted
//The function will return the initial value of the state
//This is useful when we want to get the initial value from local storage
    const [list, setList] = useState(() => {
        const localList = localStorage.getItem('list');

        if(localList){
            return JSON.parse(localList);
        }
        else{
            return initialValue;
        }
    });


// stores the list in local storage whenever the list changes
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

//We provide usestate with an initial value in the form of a function
    const [inputValue, setInputValue] = useState('');
    
    const addTodo = () => {
        const newTodo = {
            id: list.length + 1,
            text: inputValue,
            done: false
        };
        setList([...list, newTodo]);
        setInputValue('');
    };

    const markAsDone = (id) => {
        const updatedList = list.map(item =>
            item.id === id ? { ...item, done: true } : item
        );
        setList(updatedList);
    };

    const deleteToDo = (id) => {
        const updatedList = list.filter(item => item.id !== id);
        setList(updatedList);
    };

    const ToDoItems = list.map((item, index) => {
        return (
            <ToDoItem
                key={index}
                id={item.id}
                text={item.text}
                done={item.done}
                markAsDone={markAsDone}
                deleteToDo={deleteToDo}
            />
        );
    });

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }

    };

    return (
        <Card>
            <Card.Header>To Do List</Card.Header>
            <Card.Body>
                <ListGroup variant='flush'>
                    {ToDoItems}
                </ListGroup>

            </Card.Body>
            <Card.Footer>
                <input
                    value={inputValue}
                    onKeyUp={handleKeyUp}
                    onChange={(e) => setInputValue(e.target.value)} />
                <Button
                    onCLick={addTodo}
                    variant='primary'
                    className='float-end'>
                    Add Task
                </Button>

            </Card.Footer>
        </Card>
    )
};

export default ToDoList;