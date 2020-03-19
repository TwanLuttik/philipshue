import { pool } from './index';


const ADD = (session_token: string, account_id: string) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO session_tokens (id, created_at, token) VALUES ($1, $2, $3);';
    const options = [account_id, new Date().getTime(), session_token];

    pool.query(query, options)
    .then((e) => {
      if (e.rowCount === 1) return resolve(true)
      return resolve(false);
    })
    .catch((e) => {
      return reject(e)
    })
  })
}


const REMOVE = (session_token: string,) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM session_tokens WHERE token = $1;';
    const options = [session_token];

    pool.query(query, options)
    .then((e) => {
      if (e.rowCount === 1) return resolve(true)
      return resolve(false);
    })
    .catch((e) => {
      return reject(e);
    })
  })
}


const IS_VALID = (session_token: string) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM session_tokens WHERE session_token = $1;';
    const options = [session_token];

    pool.query(query, options)
    .then((e) => {
      if (e.rowCount === 0) return resolve(false);
      return resolve(true);
    })
    .catch((e) => {
      return reject(e);
    })
  })
}


export default {
  IS_VALID,
  ADD,
  REMOVE
}