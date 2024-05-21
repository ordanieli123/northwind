import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { store, userActions } from "../Redux/store";
import { CredentialModel } from "../Models/CredentialModel";

class UserService {
  public async register(user: UserModel) {
    const response = await axios.post<string>(appConfig.registerUrl, user);
    const token = response.data; //JWT
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    const action = userActions.registerUser(dbUser);
    store.dispatch(action);
  }
  public async login(credentials:CredentialModel) {
    const response = await axios.post<string>(appConfig.loginUrl, credentials);
    const token = response.data; //JWT
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    const action = userActions.loginUser(dbUser);
    store.dispatch(action);
  
}
public logout(){
    const action = userActions.logoutUser();
    store.dispatch(action);
}
}

export const userService = new UserService();
