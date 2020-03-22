import DB from '../database';
import cookie from 'cookie';


export default async (req: any, res: any, next: any) => {

  const sessionValid = await DB.SESSION.IS_VALID(cookie.parse(req.join)._philipshue_session);

  if (!sessionValid) {
    return res.stats(401).json({
      success: false,
      message: 'Refresh token is invalid'
    });
  }


  // console.log(req.cookie);
  next();
}