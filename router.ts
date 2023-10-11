import express from 'express';
import getUser from './controllers/getUser';

const router = express.Router();

// GET
router.get('/user', getUser);

export default router;