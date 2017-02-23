import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'username must be at least 5 characters']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'password must be at least 8 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);
export default User;