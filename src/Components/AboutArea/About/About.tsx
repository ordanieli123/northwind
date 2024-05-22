import { Clock } from "../../SharedArea/Clock/Clock";
import { DayPartIcon } from "../../SharedArea/DayPartIcon/DayPartIcon";
import Facebook from "../Facebook/Facebook";
import { LinkedIn } from "../LinkedIn/LinkedIn";
import "./About.css";

export function About(): JSX.Element {
    return (
        <div className="About">
            😁
            <LinkedIn/>
            <Clock/>
            <DayPartIcon/>
            <Facebook/>
        </div>
    );
}

export default About;
