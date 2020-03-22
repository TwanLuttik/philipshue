import { pool } from './index';


/**
 * Create an new account
 * 
 * @param id 
 * @param username 
 * @param password 
 * @param permissions 
 */
const CREATE = (id: string, username: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    const query = {
      text: 'INSERT INTO "account" (id, username, password) VALUES ($1, $2, $3)',
      values: [id, username, password]
    };
  
    pool.query(query)
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
const GET_BY_USERNAME = (username: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text:'SELECT * FROM account WHERE username = $1',
      values: [username]
    };

    pool.query(query)
      .then((e) => {
        if (e.rowCount > 0) return resolve(e.rows[0]);
        return resolve(false);
      })
      .catch((e) => {
        return reject(e);
      });

  });
};


export default {
  CREATE,
  GET_BY_USERNAME
}
