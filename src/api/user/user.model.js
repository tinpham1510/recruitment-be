import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;
const userSchema = new Schema({
  userId: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    minlength: 10,
    maxlength: 50,
    unique: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: "USER",
  },
  photoURL: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  if (this.password !== null) {
    if (!this.isModified("password")) {
      return next();
    }
    bcrypt.hash(this.password, 5, (err, hash) => {
      if (err) {
        return next(err);
      }

      this.password = hash;
      next();
    });
  }
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(same);
    });
  });
};

export const User = mongoose.model("User", userSchema);
