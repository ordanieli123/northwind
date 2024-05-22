import { RandomBackground } from "../../SharedArea/RandomBackground/RandomBackground";
import "./Facebook.css";

export function Facebook(): JSX.Element {
    return (
        <div className="Facebook">
			<span>
                Our Facebook Page:
                <a href=" https://www.facebook.com/northwind" target="_blank">
                https://www.facebook.com/northwind
                </a>


            </span>
        </div>
    );
}

export default RandomBackground(Facebook)
