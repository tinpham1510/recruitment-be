import { User } from "./user.model";

const checkUser = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (user) return user;
    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Can't not checked");
  }
};
const createUser = async (user) => {
  console.log("create user");
  try {
    const newUser = await User.create({ ...user });
    return newUser;
  } catch (err) {
    throw new Error("Not create User");
  }
};
const login = async (user) => {
  try {
    console.log("login with google");
    console.log(user);
    const userLogin = await checkUser(user.email);
    if (userLogin) return userLogin;
    return createUser(user);
  } catch (err) {
    throw new Error("Can't login");
  }
};

const signin = async (user) => {
  const userSignin = await checkUser(user.email);
  if (userSignin) throw new Error("Email is exists");
  return createUser(user);
};

const loginWithPassword = async (user) => {
  const userLogin = await checkUser(user.email);
  if (!userLogin) throw new Error("Email is not exists");
  const match = await userLogin.checkPassword(user.password);
  if (!match) {
    throw new Error("Password incorrect");
  }
  return userLogin;
};

export const Service = {
  login: login,
  signin: signin,
  loginWithPassword: loginWithPassword,
};
