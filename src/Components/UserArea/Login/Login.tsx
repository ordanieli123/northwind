import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../../../Models/UserModel";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/Notify";
import { CredentialModel } from "../../../Models/CredentialModel";
import { store } from "../../../Redux/store";

export function Login(): JSX.Element {
    const { register, handleSubmit } = useForm<CredentialModel>();
    const navigate = useNavigate();

    async function send(credentialModel: CredentialModel) {
        try {
            await userService.login(credentialModel);
            notify.success("welcome back " + store.getState().user.firstName)
            navigate("/home");

        } catch (err: any) {
            notify.error(err)
        }

    }
    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>
                <label>Email</label>
                <input type="text" {...register("email")} />
                <label>Password</label>
                <input type="password" {...register("password")} />
                <button>Login</button>
            </form>
        </div>
    );
}
