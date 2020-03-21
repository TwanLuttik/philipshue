import { pool } from '../index';

export default async () => {
  return new Promise(async (resolve, reject) => {
    const query = {
      text: `create unlogged table if not exists "accounts"
      (
          uuid       varchar(255),
          username   varchar(255),
          password   varchar(255),
          permission varchar(255)
      );`
    };

    await pool.query(query)
    .then((e) => {
      if (e.rowCount === 1) {
        console.log(`Table 'accounts' is created.`);
        return resolve();
      }
    })
    .catch((e) => {
      return reject();
    });

  });
  
};
