class AppConfig {
  public readonly productsUrl = "http://localhost:3030/api/products/";
  public readonly employeesUrl = "http://localhost:3030/api/employees/";
  public readonly registerUrl = "http://localhost:3030/api/register/";
  public readonly loginUrl = "http://localhost:3030/api/login/";
  public readonly chatGptKey = "123";
  public readonly chatGptUrl = "https://api.openai.com/v1/chat/completions";
}
export const appConfig = new AppConfig();
