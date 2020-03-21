import DB from '../database';

export default async (req: any, res: any, next: any) => {

  await DB.SESSION.IS_VALID(req.cookie)

  console.log(req.cookie);
  next();
}