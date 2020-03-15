// import bcrypt from 'bcrypt';
import UUID from 'uuid'
import ACCOUNT_DB from  '../database/account.database';


const CREATE = (req: any, res: any) => {
  const uuid = UUID.v4();

  ACCOUNT_DB.CREATE(uuid, req.body.username, req.body.password);

  return res.status(200).json({
    message: 'create',
    success: true
  })
};

const LOGIN = (req: any, res: any) => {
  return res.status(200).json({
    message: 'login',
    success: true
  })
};

export const ACCOUNT_CONTROLLER = {
  CREATE,
  LOGIN
}




// docker run --name philipshue-api -e POSTGRES_PASSWORD=notifyiscool -p 5432:5432 -d postgres