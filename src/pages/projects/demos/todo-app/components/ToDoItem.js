import { ListGroup, Badge } from 'react-bootstrap';

const ToDoItem = (props) => {
    const { text, id, done, markAsDone, deleteToDo } = props;

    // const text = props.text;
    // const done = props.done;
    return (
        <ListGroup.Item>
            {
                done ? (
                    <>
                        <span style={{ textDecoration: 'line-through' }}>{text}</span>
                        <span className='float-end'>✅</span>
                    </>
                ) :
                    (
                        <>
                            {text}
                            <Badge onClick={() => markAsDone(id)} pill bg='success' className='float-end'>✅</Badge>
                        </>
                    )

            }

            <Badge onClick={() => deleteToDo(id)} pill bg='danger' className='float-end'>❌</Badge>

        </ListGroup.Item>
    )
}

export default ToDoItem;