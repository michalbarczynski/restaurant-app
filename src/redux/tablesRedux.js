import { API_URL } from "../config";
import { STATUSES } from "./statusRedux";

// selectors
export const getAllTableIDs = (state) => state.tables.map((table) => table.id);
export const getAllTables = (state) => state.tables;
export const getTableByID = ({ tables }, tableId) => tables.find((table) => table.id === tableId);

// actions name
const createActionName = (actionName) => `app/tables/${actionName}`;
export const SHOW_TABLES = createActionName("SHOW_TABLES");
export const UPDATE_TABLE = createActionName("UPDATE_TABLE");
export const ADD_TABLE = createActionName("ADD_TABLE");
export const REMOVE_TABLE = createActionName("REMOVE_TABLE");

// action creators
export const showTables = (payload) => ({ type: SHOW_TABLES, payload });
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload })

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(showTables(tables)))
      .catch((error) => { console.log(error) })
  };
};

export const addNewTable = (id) => {
  return (dispatch) => {
    const newTable = {
      id,
      peopleAmount: 0,
      maxPeople: 0,
      bill: 0,
      status: STATUSES.free
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTable),
    };

    const request = fetch(`${API_URL}/tables`, options)
    .then(res => res.json())
    .then((data => dispatch(addTable(data))))
    .catch((error) => { console.log(error) });

    console.log(request);
  }
}

export const updateTables = (data) => {
  return (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${API_URL}/tables/${data.id}`, options)
    .then((res) => res.json())
    .then((data) => dispatch(updateTable(data)))
    .catch((error) => { console.log(error) });
  };
};


export const removeTables = id => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/${id}`, { method: "DELETE"})
    .then((res) => res.json())
    .then((data) => console.log(data + 'removed'))
    .catch((error) => { console.log(error) })
  }
};


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case SHOW_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case ADD_TABLE:
      console.log(action.payload, statePart);
      return [...statePart, {...action.payload}];
    case REMOVE_TABLE: 
      return statePart.filter((table) => table.id !== action.payload);
    default:
      return statePart;
  }
};

export default tablesReducer;