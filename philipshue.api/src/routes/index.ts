// Global imports
import express from 'express';

// Routes imports
import account from './account.route';
import device from './device.route'


const router = express.Router();


router.use('/account', account);
router.use('/device', device);


export default router;