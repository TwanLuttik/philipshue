import { Pool } from 'pg';

// const client = new Client({
// 	user: process.env.PG_USER,
// 	host: process.env.PG_HOST,
// 	database: process.env.PG_DATABASE,
// 	password: process.env.PG_PASSWORD
// })

// client.connect().then((e) => {
// 	console.log(e)
// })


export const pool = new Pool({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD
});


