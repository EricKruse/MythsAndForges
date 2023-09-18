import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const getSheets = () => async(dispatch) => {
    try {
        const { data } = await api.fetchSheets();
        dispatch({ type: FETCH_ALL, payload: data })
    }
    catch ( error ) {
        console.log(error);
    }
}

export const createSheet = (sheet) => async (dispatch) => {
    try {
        const { data } = await api.createSheet(sheet);
        dispatch({ type: CREATE, payload: data});
    } catch (error){
        console.log(error);
    }
}

export const updateSheet = (id, _sheet) => async (dispatch) => {
    try {
        const {data} = await api.updateSheet(id, _sheet);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteSheet = (id) => async(dispatch) => {
    try {
        console.log(id);
        await api.deleteSheet(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likeSheet = (id) => async (dispatch) => {
    console.log("likeSheet:")
    try {
        console.log("Expecting data");
        const {data} = await api.likeSheet(id);
        console.log(data);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}