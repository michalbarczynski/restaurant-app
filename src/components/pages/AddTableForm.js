import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getAllTableIDs, getAllTables, addNewTable } from "../../redux/tablesRedux";

const AddTableForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const tableIDs = useSelector(getAllTableIDs);

    const [tableID, setTableID] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewTable(tableID));
        navigate("/");
    }

    const errorMessage = !tableID 
    ? 'Table number is required' : tableIDs.includes(tableID) 
    ? 'Table number is already exist' : null;

    return (
        <div>
            <h1 className="my-4">Add new Table</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="my-3">
                    <Form.Label column sm={2}><strong>Table number:</strong></Form.Label>
                    <Col sm={2} lg={1}>
                        <Form.Control type="text" value={tableID} onChange={e => setTableID(e.target.value)}/>
                    </Col>
                </Form.Group>
                {errorMessage && <p>{errorMessage}</p>}
                <Button variant="primary" type="submit" disabled={errorMessage}>Add table</Button>
            </Form>
        </div>
    );
};

export default AddTableForm;