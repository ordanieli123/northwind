import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">products</NavLink>
            <NavLink to="/products/new">AddProduct</NavLink>
            <NavLink to="/employees">employees</NavLink>
            <NavLink to="/about">about</NavLink>
        </div>
    );
}
