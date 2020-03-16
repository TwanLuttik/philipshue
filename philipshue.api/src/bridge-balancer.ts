import DEVICE from './database/device.database';


/**
 * Register a divce
 * 
 * @param device_id 
 */
const REGISTER_DEVICE = (device_id: string) => {
  // Check if the device is already in the databse
  

  // add to the database
  DEVICE.ADD(device_id);
}

export default {
  REGISTER_DEVICE
}