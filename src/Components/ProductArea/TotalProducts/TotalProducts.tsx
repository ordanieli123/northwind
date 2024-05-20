import { useEffect, useState } from "react";
import "./TotalProducts.css";
import { AppState, store } from "../../../Redux/store";
import { useSelector } from "react-redux";

export function TotalProducts(): JSX.Element {

    const count = useSelector<AppState,number>(store=>store.products.length)
    return (
        <div className="TotalProducts">
			<span>Total products:{count}</span>
        </div>
    );
}
