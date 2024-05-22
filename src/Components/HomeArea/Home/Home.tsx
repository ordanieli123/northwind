import { useTitle } from "../../../Utils/UseTitle";
import { Vat } from "../../UserArea/Vat/Vat";
import { TestAuth } from "../TestAuth/TestAuth";
import "./Home.css";

export function Home(): JSX.Element {
useTitle("Home")
    return (
        <div className="Home">
			😊
            <TestAuth/>
            <Vat/>
        </div>
    );
}
