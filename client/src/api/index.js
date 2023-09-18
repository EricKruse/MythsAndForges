import axios from 'axios';

const sheetsURL = 'http://localhost:20093/sheets';
const userURL = 'http://localhost:20093/user';
const followingURL = 'http://localhost:20093/following';

export const fetchSheets = () => axios.get(sheetsURL);
export const createSheet = (newSheet) => axios.post(sheetsURL, newSheet);
export const updateSheet = (id, updatedSheet) => axios.patch(`${sheetsURL}/${id}`, updatedSheet);
export const deleteSheet = (id) => axios.delete(`${sheetsURL}/${id}`);
export const likeSheet = (id) => axios.patch(`${sheetsURL}/${id}/likeSheet`); // Change me into a followingURL call later