import morgan from 'morgan';
import express from 'express';
import bp from 'body-parser'
import cookieParser from 'cookie-parser';
import models from './database/models/index';
import routes from './routes';

const app = express();

models();

// Logger
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());


app.use(cookieParser(process.env.COOKIE_SECRET))

// Routes
app.use('/', routes);


export default app;



// app.use((req: any, res: any, next: any) => {
//     const error: any = new Error('Not found');
//     error.status = 404;
//     next(error);
// });

// app.use((error: any, req: any, res: any, next: any) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

// app.use((req: any, res: any, next: any) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-Witch, Content-Type, Accept, Authorization'
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

// let whitelist = ['http://localhost:3000'];
// app.use(cors({
//     orign: (origin: any, callback: any) => {
//         console.log(process.env.NODE_ENV);
//         // if (process.env.NODE_ENV === 'production') {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allow by CORS'));
//         }
//         // } else {
//         // 	callback(null, true)
//         // }
//     }
// }));



// const limiter = rateLimit({
//     windowMs: 1000, // 15 minutes
//     max: 10// limit each IP to 100 requests per windowMs
// });

//  apply to all requests
// app.use(limiter);