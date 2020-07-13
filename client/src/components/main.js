import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Main() {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        function getTodoList() {
            axios.get("http://localhost:5000/api/get-todo-list").then((res) => {
                setTodoList(res.data);
            })
        }

        getTodoList();
    });

    const handleCompleted = (evt) => {
    }

    return (
        <Container >
            <Row>
                <Col sm={8}>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Buy Milk" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Mark Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoList.map((t) => (
                                    <tr key={t.todo_id}>
                                        <td>{t.todo_id}</td>
                                        <td>{t.todo_title}</td>
                                        <td>
                                            <Button variant="info" type="button">
                                                Update
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" type="button">
                                                Delete
                                            </Button>
                                        </td>
                                        <td>

                                            <input type="checkbox" id="chkComplete" name="chkComplete" checked={t.todo_completed === 'Y' ? true : false} onChange={handleCompleted} />
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}

export default Main;