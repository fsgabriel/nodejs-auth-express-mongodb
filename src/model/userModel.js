import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory'],
    min: [5, 'Name must have at least 10 characters'],
    max: [50, 'Name can have max 50 characters'],
  },
  login: {
    type: String,
    required: [true, 'Login is mandatory'],
    min: [5, 'Login must have at least 10 characters'],
    max: [50, 'Login can have max 50 characters'],
    unique: [true, 'We already have a account using this login'],
  },
  email: {
    type: String,
    required: [true, 'Email is mandatory'],
    min: [5, 'Email must have at least 10 characters'],
    max: [50, 'Email can have max 50 characters'],
    unique: [true, 'We already have a account using this email'],
  },
  password: {
    type: String,
    required: [true, 'Password is mandatory'],
    min: [8, 'Password must have at least 8 characters'],
    max: [30, 'Password can have max 30 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (passwordConfirm) {
        return passwordConfirm === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre('save', function (next) {
  this.passwordConfirm = undefined;
  next();
});

const UsersModel = mongoose.model('Users', userSchema);

export default UsersModel;
