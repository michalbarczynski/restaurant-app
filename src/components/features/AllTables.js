import { ListGroup, Button, Stack } from 'react-bootstrap'; 
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
                <ListGroup.Item className='px-0' key={table.id}>
                    <Stack direction='horizontal' gap={4}>
                        <h3 className='my-2'>Table: {table.id}</h3>
                        <span className='mb-0'><b>Status: </b>{table.status}</span>
                        <Link className='ms-auto' to={'/table/' + table.id}>
                            <Button variant='primary'>Show more</Button>
                        </Link>
                        <Button onClick={(e) => handleClick(e, table.id)}>Remove table</Button>
                    </Stack>
                </ListGroup.Item>
            )}
        </ListGroup>
    </div>
    );
};

export default AllTables;