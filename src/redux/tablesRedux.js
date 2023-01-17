//selectors
export const getAllTables = ({tables}) => tables;
export const getTableByID = ({tables}, tableID) => tables.find(table => table.id === tableID);

// actions
// to uncomment when use -> const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const tablesRedux = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default tablesRedux;

//branch name developing-store-and-redux