// Global imports
import express from 'express';
import auth from '../helpers/authCheck'

// Routes imports
import account from './account.route';
import device from './device.route'


const router = express.Router();


router.use('/account', auth, account);
router.use('/device', auth, device);


export default router;