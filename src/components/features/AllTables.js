import { ListGroup, Button } from 'react-bootstrap'; 
import { useSelector, useDispatch } from 'react-redux';
import { getAllTables, removeTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';

const AllTables = () => {
    const dispatch = useDispatch();
    const tables = useSelector(getAllTables);

    const handleClick = (e, id) => {
        e.preventDefault();
        dispatch(removeTables(id));
    };

    if(!tables) {
        return (
            <div class="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
    return (
    <div>
        <h1>All Tables</h1>
        <ListGroup variant='flush'>
            {tables.map(table => 
                <ListGroup.Item className='d-flex justify-content-between align-items-start' key={table.id}>
                    <div>
                        <h3>Table: {table.id}</h3>
                        <span><b>Status: </b>{table.status}</span>
                    </div>
                    <Button onClick={(e) => handleClick(e, table.id)}>Remove table</Button>
                    <Button as={Link} to={'/table/' + table.id}>Show more</Button>

                </ListGroup.Item>
            )}
        </ListGroup>
    </div>
    );
};

export default AllTables;