import { useForm } from "react-hook-form";
import "./AddEmployee.css";
import { ProductModel } from "../../../Models/ProductModel";
import { useNavigate } from "react-router-dom";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";

export function AddEmployee(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<EmployeeModel>();
    const navigate = useNavigate();
    async function sendToDb(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            await employeeService.addEmployee(employee)
            notify.success("employee has been added")
              navigate('/employees');
        } catch (err: any) {
            notify.error(err);

        }
    }
    return (
        <div className="AddEmployee">
		   <form onSubmit={handleSubmit(sendToDb)}>
                <label>FirstName:</label>
                <input type="text" {...register("firstName")} />
                <span className="error"> {formState.errors?.firstName?.message}</span>
                <label>LastName:</label>
                <input type="text" {...register("lastName")} />
                <span className="error"> {formState.errors?.lastName?.message}</span>
                <label>Title:</label>
                <input type="text" {...register("title")} />
                <span className="error"> {formState.errors?.title?.message}</span>
                <label>Country:</label>
                <input type="text" {...register("country")} />
                <span className="error"> {formState.errors?.country?.message}</span>
                <label>City:</label>
                <input type="text" {...register("city")} />
                <span className="error"> {formState.errors?.city?.message}</span>
                <label>BirthDate:</label>
                <input type="Date" {...register("birthDate")} />
                <span className="error"> {formState.errors?.birthDate?.message}</span>
                <label>image:</label>
                <input type="file"{...register("image")} />
                <span className="error"> {formState.errors?.image?.message}</span>

                <button>Add</button>

            </form>
        </div>
    );
}
