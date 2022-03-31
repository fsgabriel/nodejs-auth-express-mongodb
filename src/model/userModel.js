import mongoose from 'mongoose';

const { Schema } = mongoose;

const authSchema = new Schema({
  name: String,
  login: String,
  email: String,
  password: String,
});

export default authSchema;
