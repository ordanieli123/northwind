import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import "./ContactUs.css";

export function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs">
			<form>

                <Typography variant="h4">Contact Us</Typography>
                <TextField type="text" label="Full Name"/>
                <TextField type="email" label="email"/>
                <TextField type="tel" label="Phone"/>
                <TextField type="text" label="Message" multiline rows={5}/>

                <FormControlLabel label="send me promotional emails" control={<Checkbox/>}/>
                <ButtonGroup fullWidth variant="contained">
                <Button type="button" color="primary">Send</Button>
                <Button type="reset" color="secondary">clear</Button>
                </ButtonGroup>
            </form>
        </div>
    );
}
