import { pool } from '../index';


const account = `create unlogged table if not exists "account"
(
  id         uuid,
  username   varchar(255),
  password   varchar(255),
  permission varchar(255)
);`;

const device = `create unlogged table if not exists device
(
    id         varchar(255),
    created_at varchar(255)
);
alter table device owner to postgres;`;



export default async () => {

  await pool.query(account);
  await pool.query(device);

  // await account();
  // await device();

  console.log('Creating models done...')
}