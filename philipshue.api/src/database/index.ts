import { Pool } from 'pg';

export const pool = new Pool({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD
});

import DEVICE from './device.db';
import ACCOUNT from './account.db';
import SESSION from './session.db';

export default {
	DEVICE,
	ACCOUNT,
	SESSION
}
