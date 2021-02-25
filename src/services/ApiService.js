import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
});

class ApiService {
  async get(url) {
    return axiosInstance.get(url);
  }
}

export default new ApiService();