import axios, { AxiosRequestConfig } from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";

class EmployeeService {
    public async getAllEmployees() {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const employees = response.data;
        return employees; // Returns Promise<ProductModel[]>
    }
    public async addEmployee(employee: EmployeeModel) {
        const options: AxiosRequestConfig = {
          headers: { "Content-Type": "multipart/form-data" },
        };
        await axios.post<EmployeeModel>(
          appConfig.employeesUrl,
          employee,
          options
        );
      }
}

export const employeeService = new EmployeeService();
