import { chatGptService } from "../../../Services/ChatGptService";
import "./Gpt.css";

export function Gpt(): JSX.Element {

    async function askGpt() {
        console.log(await chatGptService.chat("tell me about winter"))

    }
    return (
        <button onClick={askGpt} >
            ask GPT 
      </button>
    );
}
