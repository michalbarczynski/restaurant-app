import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Stack} from "react-bootstrap";
import { getTableByID, updateTables } from "../../redux/tablesRedux";

const Table = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tableData = useSelector(state => getTableByID(state, parseInt(id)));

    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(parseInt(tableData.bill));

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
      if (status === "Cleaning" || status === "Free") {
        setPeopleAmount("0");
      }
      if (status !== "Busy") {
        setBill("0");
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

    if (!tableData) return <Navigate to="/" />;
  return (
    <div>
      <h1 className="my-4">Table {tableData.id}</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="my-3">
          <Form.Label column sm={1}>
            <strong>Status:</strong>
          </Form.Label>
          <Col sm={3}>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Busy</option>
              <option>Reserved</option>
              <option>Free</option>
              <option>Cleaning</option>
            </Form.Select>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="my-3">
          <Form.Label column sm={1}>
            <strong>People:</strong>
          </Form.Label>
          <Col sm={1}>
            <Form.Control type="number" min="0" max={maxPeopleAmount} value={peopleAmount || ""} onChange={(e) => setPeopleAmount(parseInt(e.target.value))}/>
          </Col>/
          <Col sm={1}>
            <Form.Control type="number" min="0" max="10" value={maxPeopleAmount || ""} onChange={(e) => setMaxPeopleAmount(parseInt(e.target.value))}/>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className={status !== "Busy" ? "d-none" : "my-3"}>
          <Stack direction="horizontal">
            <Form.Label column sm={1}>
              <strong>Bill:</strong>
            </Form.Label>
            <Form.Text>
              <p className="m-1">$ </p>
            </Form.Text>
            <Col sm={1}>
              <Form.Control type="number" value={bill} onChange={(e) => setBill(e.target.value)} />
            </Col>
          </Stack>
        </Form.Group>

        <Button variant="primary" type="submit"> Update </Button>
      </Form>
    </div>
  );
};

export default Table;