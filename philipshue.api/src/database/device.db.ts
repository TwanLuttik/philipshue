import { pool } from './index';

const ADD = (device_id: string) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO device (id, created_at) VALUES ($1, $2);';
    const options = [device_id, new Date().getTime()]

    pool.query(query, options) 
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {
        return reject(e);
      });
  })

}

const REMOVE = (device_id: string) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM device WHERE id = $1;';
    const options = [device_id];

    pool.query(query, options)
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {
        return reject(e);
      })
  })
}

const SET_NAME = (device_id: string, name: string) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE device SET name = $1 WHERE id = $2';
    const options = [name, device_id];

    pool.query(query, options)
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {
        return reject(e);
      });
  });
}

const GET_ALL = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM device;'

    pool.query(query)
    .then((e) => {
      return resolve(e.rows);
    })
    .catch((e) => {
      return reject(e);
    })
  })
}


export default {
  ADD,
  REMOVE,
  SET_NAME,
  GET_ALL
};