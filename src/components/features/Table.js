import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { getTableByID, updateTables } from "../../redux/tablesRedux";


const Table = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const update = () => {
        dispatch(updateTables());
    }

    
    const parsedID = parseInt(id);
    const tableData = useSelector(state => getTableByID(state, parsedID));
    console.log(tableData);

    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(tableData.bill);

    //need update dispatch from redux after store develope

    useEffect(() => {
        if(status === 'Busy') {
            setBill(0);
        } else if (status === 'Cleaning' || status === 'Free'){
            setPeopleAmount(0);
        } //add reservation options
    }, [status]);

    useEffect(() => {
        console.log(peopleAmount, maxPeopleAmount);
        const peopleAmountValue = parseInt(peopleAmount);
        const maxPeopleAmountValue = parseInt(maxPeopleAmount);

        if (peopleAmountValue < 0) {
            setPeopleAmount(0);
        }
        else if (maxPeopleAmountValue < 0) {
            setMaxPeopleAmount(0);
        }
        else if (peopleAmountValue > maxPeopleAmountValue) {
            setPeopleAmount(maxPeopleAmountValue);
        }
        else if (peopleAmountValue > 10) {
            setPeopleAmount(10);
        }
        else if (maxPeopleAmountValue > 10) {
            setMaxPeopleAmount(10);
        }
    }, [peopleAmount, maxPeopleAmount]);

    if(!tableData) { 
        console.log(tableData);
        return <Navigate to='/'/>
    } else {
        return (
            <div>
                <Container className="p-0">
                    <Col sm={3}>
                        <h1 Table {...tableData.id}></h1>
                        <Form>
                            <Form.Group className="d-inline-flex my-2 align-items-center">
                                <Form.Label className="fw-bold pe-4">Status:</Form.Label>
                                <Form.Select onChange={event => setStatus(event.target.value)}>
                                    <option>{tableData.status}</option>
                                    <option value="1">Free</option>
                                    <option value="2">Reserved</option>
                                    <option value="3">Busy</option>
                                    <option value="4">Cleaning</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="d-inline-flex my-2 align-items-center">
                                <Form.Label className="fw-bold pe-4">People:</Form.Label>
                                <Form.Control type="number" value={peopleAmount} onChange={event => setPeopleAmount(event.target.value)}/>
                                <span className="px-2"></span>
                                <Form.Control type="number" value={maxPeopleAmount} onChange={event => setMaxPeopleAmount(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="d-inline-flex my-2 align-items-center">
                                <Form.Label className="fw-bold d-inline-flex">Bill:<span className="fw-normal ps-4 pe-1"></span></Form.Label>
                                <Form.Control type="number" value={bill} onChange={event => setBill(event.target.value)}/>
                            </Form.Group>
                        </Form>
                        <Button onClick={update} className="mt-2">Update</Button>
                    </Col>
                </Container>
            </div>
        );
    }
};
//secure or ensure that number values are return as number and are not negative
//protect the page from invalid data or error
//dispatch update method if redux store finished implemented in button

export default Table;
