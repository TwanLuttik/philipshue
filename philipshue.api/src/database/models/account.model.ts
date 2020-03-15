import { pool } from '../index';

export = () => {
  const query = {
    text: `create table "accounts"
    (
        uuid       varchar(255),
        username   varchar(255),
        password   varchar(255),
        permission varchar(255)
    );
    alter table "user" owner to postgres;`
  };
  pool.query(query);
};