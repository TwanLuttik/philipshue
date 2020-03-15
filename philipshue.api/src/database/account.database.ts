import { pool } from './index';


/**
 * Create an new account
 * 
 * @param uuid 
 * @param username 
 * @param password 
 * @param permissions 
 */
const CREATE = async (uuid: string, username: string, password: string) => {
  const query = {
    text: 'INSERT INTO "account" (uuid, username, password) VALUES ($1, $2, $3)',
    values: [uuid, username, password]
  };

  await pool.query(query)
  .then((e) => {
    if (e.rowCount === 1) return true;
		return false;
  })
  .catch((e) => {
    if (e) throw e;
  })
};



const LOGIN = (username: string, password: string) => {
  const query = {
    text: ''
  }
};


export default {
  CREATE,
  LOGIN
}
