import { pool } from './index';


/**
 * Create an new account
 * 
 * @param uuid 
 * @param username 
 * @param password 
 * @param permissions 
 */
const CREATE = (uuid: string, username: string, password: string) => {
  return new Promise(async (resolve, rejects) => {
    const query = 'INSERT INTO "account" (uuid, username, password) VALUES ($1, $2, $3)';
    const options = [uuid, username, password];
  
    await pool.query(query, options)
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {
        return rejects(e);
      });

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
