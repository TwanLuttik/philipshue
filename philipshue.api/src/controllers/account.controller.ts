import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'cookie';
import ERROR from '../types/error';
import DB from '../database';

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
  const session_token: string = uuidv4(username);

  // Get the password hash of the username 
  const user: any = await DB.ACCOUNT.GET_BY_USERNAME(username);
  const hash = user.password;

  // Username not found
  if (!hash) {
    return res.status(404).json({
      error: {
        code: ERROR.USERNAME_NOT_FOUND
      }
    })
  };

    

  // Compare hash
  bcrypt.compare(password, hash.toString(), async (err, result) => {
    delete user.password;

    // If incorrect
    if (err) {
      return res.status(401).json({
        error: {
          code: ERROR.PASSWORD_INVALID
        }
      })
    };

    await DB.SESSION.ADD(session_token, user.id)

    // Set the session token in the cookie
    const c = cookie.serialize('_philipshue_session', session_token);
    res.cookie(c);

    return res.status(200).json({
      data: {
        session_token,
        user
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

export default {
  CREATE,
  LOGIN,
  SET_PERMISSION
};