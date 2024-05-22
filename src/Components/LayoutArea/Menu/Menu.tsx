import { NavLink } from "react-router-dom";
import "./Menu.css";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">AddProduct</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/employees/new">AddEmployee</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about/contact-us">Contact us</NavLink>
            <TotalProducts></TotalProducts>
        </div>
    );
}
