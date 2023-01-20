//selectors
export const getAllTables = ({tables}) => tables;
export const getTableByID = ({tables}, tableID) => tables.find(table => table.id === tableID);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const SHOW_TABLES = createActionName('SHOW_TABLES');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators

export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const showTables = payload => ({type: SHOW_TABLES, payload});

export const fetchTables = () => {
  return(dispatch) => {
    fetch('http://localhost:3131/api/tables')
    .then(res => res.json)
    .then(tables => dispatch(updateTables(tables)));
  }
}
//analize carefully function below
const tablesRedux = (statePart = [], action) => {
  switch (action.type) {
    case SHOW_TABLES:
      console.log([...action.payload]);
      return [...action.payload];
    case UPDATE_TABLES:
      return statePart.map(table => table.id === action.payload.id ? {...table, ...action.payload} : table);
    default:
      return statePart;
  };
};
export default tablesRedux;
