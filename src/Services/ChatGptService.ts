import axios, { Axios } from "axios";
import { appConfig } from "../Utils/AppConfig";

class ChatGptService {
  public async chat(prompt: string) {
    const body = {
      model: "gpt-3.5-turbo",
      max_tokens: 3000,
      messages: [
        { role: "system", content: "you are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    };

    const options = {
      headers: {
        "Authorization": "Bearer " + appConfig.chatGptKey
      }
    };
    const response = await axios.post(appConfig.chatGptUrl, body, options);
    const completion = response.data.choices[0].message.content;
    return completion;
  }
}

export const chatGptService = new ChatGptService();
