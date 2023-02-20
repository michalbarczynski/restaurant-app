import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { getTableByID, updateTables } from "../../redux/tablesRedux";
import { getAllStatuses } from "../../redux/statusRedux";

const Table = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tableData = useSelector(state => getTableByID(state, parseInt(id)));
    const statusData = useSelector(getAllStatuses);

    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(tableData.bill);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateTables({
            id, 
            status, 
            peopleAmount: parseInt(peopleAmount), 
            maxPeopleAmount: parseInt(maxPeopleAmount), 
            bill: parseInt(bill)
        }));
        navigate('/');
    }

    useEffect(() => {
        if(status === 'Busy') {
            setBill(0);
        } else if (status === 'Cleaning' || status === 'Free'){
            setPeopleAmount(0);
        } else if (status === 'Reserved') {
            setPeopleAmount(0);
        }
    }, [status]);

    useEffect(() => {
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="d-inline-flex my-2 align-items-center">
                                <Form.Label className="fw-bold pe-4">Status:</Form.Label>
                                <Form.Select value={status} onChange={event => setStatus(event.target.value)}>
                                    <option>{status}</option>
                                    {statusData.map((statusOption) => (
                                        <option key={statusOption}>{statusOption}</option>
                                    ))}
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
                            <Button variant="primary" className="mt-2" type="submit">Update</Button>
                        </Form>
                    </Col>
                </Container>
            </div>
        );
    }
};

export default Table;
