import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const sheetsReducer = (sheets = [], action) => {
    switch(action.type){
        case LIKE:
        case UPDATE:
            return sheets.map((sheet) => sheet._id === action.payload.sheets._id ? action.payload.sheets : sheet);
            // Return newly updated sheet for the element, else keep the sheet as it is
        case FETCH_ALL:
            return action.payload.sheets;
        case CREATE:
            return [...sheets, action.payload];
        case DELETE:
            return sheets.filter((sheet) => sheet._id !== action.payload);
        default:
            return sheets;
    }
};

export default sheetsReducer;

/*
    Handle the type of actions and return payload from backend requests into the store
*/