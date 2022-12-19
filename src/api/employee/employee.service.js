import { Employee } from "./employee.model";

const signin = async (data) => {
  try {
    const emailCompany = data.emailCompany;
    console.log(emailCompany);
    const employee = await Employee.findOne({ emailCompany });
    if (employee) throw new Error("Email is exists");
    else return createEmploy(data);
  } catch (e) {
    throw new Error("Email is exits");
  }
};

const createEmploy = async (data) => {
  try {
    const newEmployee = await Employee.create({ ...data });
    return newEmployee;
  } catch (err) {
    console.log(err);
    throw new Error("Can't create new Employee");
  }
};

const login = async (account) => {
  const emailCompany = account.email;
  const employee = await Employee.findOne({ emailCompany });
  if (!employee) throw new Error("Email is not exists");
  const match = await employee.checkPassword(account.password);
  if (!match) {
    throw new Error("Password incorrect");
  }
  return employee;
};

export const EmployeeService = {
  signin: signin,
  login: login,
};
