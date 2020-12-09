const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: String,
  ticketIds: {
    strings: [String],
  },
  businessUnit: {
    type: String,
    lowercase: true,
    required: true
  },
  profileImage: {
    type: String
    // base64: String,
    // imageFormat: String
  },
  authLevel: {
    type: String,
    default: 'customer',
    enum: ['customer', 'engineer', 'manager', 'admin']
  }

}, 
{
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

const SALT_ROUNDS = 6;

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function(error, hash) {
    if (error) return next(err);
    user.password = hash;
    next();
  })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);