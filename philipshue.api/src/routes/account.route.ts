import express from 'express';
import { ACCOUNT_CONTROLLER} from '../controllers/account.controller';

const router = express.Router();

// Routes
router.post('/create', ACCOUNT_CONTROLLER.CREATE)
router.post('/login', ACCOUNT_CONTROLLER.LOGIN)


export default router;
