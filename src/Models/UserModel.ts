import { RegisterOptions } from "react-hook-form";

export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public role: string;

  public static firsNameValidation: RegisterOptions = {
    required: { value: true, message: "Missing first name." },
    minLength: { value: 2, message: "First name too short" },
    maxLength: { value: 20, message: "First name too long" },
    pattern: { value: /^[A-Za-z]+$/, message: "First name must be letters only." },
};
  public static lastNameValidation: RegisterOptions = {
    required: { value: true, message: "Missing last name." },
    minLength: { value: 2, message: "Last name too short" },
    maxLength: { value: 20, message: "Last name too long" },
    pattern: { value: /^[A-Za-z]+$/, message: "First name must be letters only." },
  };

  public static passwordValidation: RegisterOptions = {
    required: { value: true, message: "Missing password." },
    minLength: { value: 4, message: "Password too short" },
    maxLength: { value: 100, message: "Password too long" },
  };
  public static emailValidation: RegisterOptions = {
    required: { value: true, message: "Missing email." },
    minLength: { value: 4, message: "Email too short" },
    maxLength: { value: 20, message: "Email too long" },
    pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address." },
  };
}
