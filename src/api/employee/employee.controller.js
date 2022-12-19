import { EmployeeService } from "./employee.service";

const signin = async (req, res, next) => {
  try {
    const employee = await EmployeeService.signin(req.body.user);
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const login = async (req, res, next) => {
  try {
    const account = req.body;
    console.log(account);
    const employee = await EmployeeService.login(account);
    console.log(req.body);
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

export const EmployeeController = {
  signin: signin,
  login: login,
};
