import { pool } from '../index';

export = async () => {
  return new Promise(async (resolve, reject) => {
    const query = {
      text: `reate unlogged table if not exists device
      (
          id         varchar(255),
          created_at varchar(255)
      );
      alter table device owner to postgres;`
    };

    await pool.query(query)
    .then((e) => {
      if (e.rowCount === 1) {
        console.log(`Table 'device' is created.`);
        return resolve();
      }
    })
    .catch((e) => {
      return reject();
    });

  });
  
};
