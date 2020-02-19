import Axios from "axios";
import authService from "../security/authService";

const { REACT_APP_TOKEN_HEADER, REACT_APP_BASE_URL } = process.env;

const httpService = Axios.create({
  baseURL: REACT_APP_BASE_URL
});

httpService.interceptors.request.use(req => {
  if (authService.getToken()) {
    req.headers[REACT_APP_TOKEN_HEADER || ""] = authService.getToken();
  }
  req.headers["Content-Type"] = "application/json";
  return req;
});

export default httpService;
