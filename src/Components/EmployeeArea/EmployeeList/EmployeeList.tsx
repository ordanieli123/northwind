import { useEffect, useState } from "react";
import "./EmployeeList.css";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";

export function EmployeeList(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {

        employeeService.getAllEmployees()
            .then(dbEmployees => setEmployees(dbEmployees))
            .catch(err => alert(err.message));



    }, []);

    return (
        <div className="EmployeeList">
            {employees.map(e => <div key={e.id}>
                <span>name:{e.firstName},{e.lastName} <br />
                    address:{e.country}, {e.city} <br />
                    title:{e.title} <br />
                    birthday:{e.birthDate.toLocaleString()} <br />
                    <div>
                        <img src={e.imageUrl} />
                    </div>
                </span>
                <br />
            </div>
            )}
        </div>
    );
}
