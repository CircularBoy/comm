import express from 'express';
import mongoose from 'mongoose';
import router from './config/router';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import errorMiddleware from './helpers/middleware/error-middleware';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);

async function startApp() {
  try {
    // mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.DB_URL);

    app.listen(process.env.DEV_PORT, () => {
      console.log(`app listening on port ${process.env.DEV_PORT}`);
    });
  } catch (e) {
    console.log('on port: ' + process.env.DEV_PORT);
    console.log('error on start app ' + e);
  }
}

export default startApp();
