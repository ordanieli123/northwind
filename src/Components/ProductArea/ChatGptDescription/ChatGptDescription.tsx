import { ProductModel } from "../../../Models/ProductModel";
import { chatGptService } from "../../../Services/ChatGptService";
import "./ChatGptDescription.css";

interface ChatGptDescriptionProps {
    product: ProductModel;
}

export function ChatGptDescription(props:ChatGptDescriptionProps): JSX.Element {

    async function askGpt() {
        console.log(await chatGptService.chat("tell me about" + props.product.name + "witch used by northwind company"))

    }
    return (
        <button onClick={askGpt} >
        ask GPT 
  </button>
    );
}
