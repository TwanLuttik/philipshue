import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import ERROR from '../types/error';
import DB from 'db/index';


const CREATE = async (req: any, res: any) => {

  // Hash the password
  bcrypt.hash(req.body.password, 10, (err, hash) => {

    // Create the account into the database
    DB.ACCOUNT.CREATE(uuidv4(), req.body.username, hash)
    .then((r) => {
      return res.status(200).json({
        message: 'create',
        success: true
      });
    });
  })

};

/**
 * Login 
 * 
 * @param req 
 * @param res 
 */
const LOGIN = async (req: any, res: any) => {
  const username = req.body.username;
  const password = req.body.password;
  const session_token = uuidv4(username);

  // Get the password hash of the username 
  const hash = await DB.ACCOUNT.GET_HASH(username);

  // Username not found
  if (!hash) {
    return res.status(404).json({
      error: {
        code: ERROR.USERNAME_NOT_FOUND
      }
    })
  };

    

  // Compare hash
  bcrypt.compare(password, hash.toString(), (err, result) => {
    // If incorrect
    if (err)
      return res.status(401).json({
        error: {
          code: ERROR.PASSWORD_INVALID
        }
      })

    return res.status(200).json({
      data: {
        session_token
      }
    })
  });

};


const SET_PERMISSION = (req: any, res: any) => {
  return res.status(200).json({
    message: 'login',
    success: true
  })
}

export {
  CREATE,
  LOGIN,
  SET_PERMISSION
};