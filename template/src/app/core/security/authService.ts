import { loginUser } from "./loginUser";
import httpService from "../http/axios";

const authService = {
  storageKey: process.env["REACT_APP_TOKEN_STORAGE_KEY"] || "",

  getToken(): string | null {
    return sessionStorage.getItem(this.storageKey);
  },
  setToken(token: string): void {
    sessionStorage.setItem(this.storageKey, token);
  },

  logout(): void {
    sessionStorage.clear();
  },

  login(user: loginUser): Promise<void> {
    // return httpService.post("/login", user).then(res => {
    //   const token = res.data;
    //   this.setToken(token);
    // });
    return Promise.resolve();
  }
};

export default authService;
