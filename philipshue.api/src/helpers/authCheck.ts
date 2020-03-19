import SESSION_DB from '@/db/session.db';

export default async (req: any, res: any, next: any) => {

  await SESSION_DB.IS_VALID(req.cookie)

  console.log(req.cookie);
  next();
}