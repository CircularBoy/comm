import express from 'express';
import mongoose from 'mongoose';
import router from './config/router';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

// console.log({ router });
app.use('/api', router);
// console.log(router);

// app.get('/api/houses', (req, res) => {
//   res.status(200).json('hello world');
// });
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
