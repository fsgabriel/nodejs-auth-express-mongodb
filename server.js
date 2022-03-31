import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app.js';

dotenv.config();

const DB = process.env.MONGO_IP.replace(
  '<password>',
  process.env.MONGO_PASSWORD
);

mongoose.connect(DB).then((connection) => {
  console.log('Connected with Mongo');
});

app.listen(3000, () => {
  console.log('Server Running');
});
