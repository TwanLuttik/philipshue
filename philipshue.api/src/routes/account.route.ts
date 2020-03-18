import express from 'express';
import ACCOUNT_CONTROLLER from '../controllers/account.controller';

const router = express.Router();

// Create an account
router.post('/create', ACCOUNT_CONTROLLER.CREATE);

// Login with an account
router.post('/login', ACCOUNT_CONTROLLER.LOGIN);


export default router;
