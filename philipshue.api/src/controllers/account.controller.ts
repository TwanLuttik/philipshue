import bcrypt from 'bcrypt';
import { v4 as UUID } from 'uuid';
import ACCOUNT_DB from '../database/account.database';


const CREATE = async (req: any, res: any) => {

  // Hash the password
  bcrypt.hash(req.body.password, 10, async (err, hash) => {

    // Create the account into the database
    await ACCOUNT_DB.CREATE(UUID(), req.body.username, hash)
    .then((r) => {
      return res.status(200).json({
        message: 'create',
        success: true
      })
    });
  })

};

const LOGIN = (req: any, res: any) => {
  return res.status(200).json({
    message: 'login',
    success: true
  })
};

const SET_PERMISSION = (req: any, res: any) => {
  return res.status(200).json({
    message: 'login',
    success: true
  })
}

export default {
  CREATE,
  LOGIN,
  SET_PERMISSION
}




// docker run --name philipshue-api -e POSTGRES_PASSWORD=notifyiscool -p 5432:5432 -d postgres