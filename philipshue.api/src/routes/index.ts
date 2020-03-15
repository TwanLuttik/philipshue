// Global imports
import express from 'express';

// Routes imports
import user from './account.route';



const router = express.Router();


router.use('/user', user);


export default router;