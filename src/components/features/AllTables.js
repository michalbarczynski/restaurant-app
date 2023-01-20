import { ListGroup, Button } from 'react-bootstrap'; 
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';

//add margins and paddings to h1 and ListGroup item if required
const AllTables = () => {
    const tables = useSelector(getAllTables);
    console.log(tables);
    
    return (
    <div>
        <h1>All Tables</h1>
        <ListGroup variant='flush'>
            {tables.map(table => 
                <ListGroup.Item className='d-flex justify-content-between align-items-start' key={table.id} status={table.status}>
                    <div>
                        <h3>Table: {table.id}</h3>
                        <span><b>Status: </b>{table.status}</span>
                    </div>
                    <Button as={Link} to={'/table/' + table.id}>Show more</Button>
                </ListGroup.Item>)}
        </ListGroup>
    </div>
    );
};

export default AllTables;