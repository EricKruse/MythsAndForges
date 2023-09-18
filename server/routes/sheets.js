import express from 'express';

import { getSheets, createSheet, updateSheet, deleteSheet, likeSheet } from '../controllers/sheets.js';

const sheetsRouter = express.Router();

sheetsRouter.get('/', getSheets);
sheetsRouter.post('/', createSheet);
sheetsRouter.patch('/:id', updateSheet);
sheetsRouter.delete('/:id', deleteSheet);
sheetsRouter.patch('/:id/likeSheet', likeSheet); // Placeholder for future -> User should like, add sheet into following then like counter in sheet should be upped

export default sheetsRouter;