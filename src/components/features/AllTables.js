import { ListGroup, Button } from 'react-bootstrap'; 
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux'

//add margin to h1
const AllTables = () => {
    const tables = useSelector(getAllTables);
    console.log(tables);
    
    return (
    <div>
        <h1>All Tables</h1>
        <ListGroup variant='flush'>

        </ListGroup>
    </div>
    );
};

export default AllTables;