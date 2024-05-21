import { useSelector } from "react-redux";
import { AppState, store } from "../../../Redux/store";
import "./UserMenu.css";
import { UserModel } from "../../../Models/UserModel";
import { NavLink, useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/Notify";

export function UserMenu(): JSX.Element {

    const user = useSelector<AppState, UserModel>(store => store.user);
    const navigate = useNavigate();

    function logout(){
        userService.logout();
        notify.success("bye bye");
        navigate("/home")
    }
    return (
        <div className="UserMenu">
            {
                !user &&
                <>
                    <span> Hello guest |</span>
                    <NavLink to="/register">Register</NavLink>
                    <span>|</span>
                    <NavLink to="/login">Login</NavLink>
                </>
            }
           { user &&
            <>
            <span> Hello {user.firstName} {user.lastName}|</span>
                    <NavLink to="/home" onClick={logout}>Logout</NavLink>

            </>
}
        </div>
    );
}
