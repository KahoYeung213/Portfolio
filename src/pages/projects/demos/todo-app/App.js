import ToDoList from "./components/ToDoList";
import {Container, Col, Row} from 'react-bootstrap';

function App() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <ToDoList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
