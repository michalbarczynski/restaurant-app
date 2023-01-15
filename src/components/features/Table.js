import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router";
import { Button, Form, Col, Row} from "react-bootstrap";
import { getTableByID } from "../../redux/tablesRedux";

const Table = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const tableData = useSelector(state => getTableByID(state, parseInt(id)));
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
        return <Navigate to='/'/>
    } else {
        return (
            <div>
                
            </div>
        );
    }
};


//secure or ensure that number values are return as number and are not negative
//protect the page from invalid data or error

export default Table;
