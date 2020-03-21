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
  return new Promise(async (resolve, reject) => {
    const query = 'INSERT INTO "account" (uuid, username, password) VALUES ($1, $2, $3)';
    const options = [uuid, username, password];
  
    pool.query(query, options)
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {
        return reject(e);
      });

  }) 
};


/**
 * 
 * 
 * @param username 
 */
const GET_HASH = (username: string) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT password, username FROM account WHERE username = $1';
    const options = [username]

    pool.query(query, options)
      .then((e) => {
        if (e.rowCount > 0) return resolve(e.rows[0].password);
        return resolve(false);
      })
      .catch((e) => {
        return reject(e);
      });

  });
};


export {
  CREATE,
  GET_HASH
}
