import { pool } from './index';

const ADD = (device_id: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: 'INSERT INTO device (id, created_at) VALUES ($1, $2);',
      options: [device_id, new Date().getTime() ]
    }

    pool.query(query) 
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {
        return reject();
      });
  })

}

const REMOVE = (device_id: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: 'DELETE FROM device WHERE id = $1;',
      options: [device_id]
    };

    pool.query(query)
      .then((e) => {
        if (e.rowCount === 1) return resolve(true);
        return resolve(false);
      })
      .catch((e) => {

      })
  })
}


export default {
  ADD,
  REMOVE
}x