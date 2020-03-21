import { Pool } from 'pg';

export const pool = new Pool({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD
});

import * as DEVICE from './device.db';
import * as ACCOUNT from './account.db';
import * as SESSION from './session.db';

const DB = {
	DEVICE,
	ACCOUNT,
	SESSION
}

export default DB;