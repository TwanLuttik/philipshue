import express from 'express';
import DEVICE from '../controllers/device.controller'

// Router
const router = express.Router();


// Register a device
router.post('/register', DEVICE.ADD);

// remove a device
router.delete('/:id', DEVICE.REMOVE);

// Set a device name
router.patch('/:id/name/:name', DEVICE.SET_NAME)

// Get all thr devices
router.get('/', DEVICE.GET_ALL)


export default router;