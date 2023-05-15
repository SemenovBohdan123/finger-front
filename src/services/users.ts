import API from "./api";
import toast from "react-hot-toast";

const UsersService = {
  async getCheckImage() {
    try {
      const response = await API.get(`/user-check-img/`, {
        responseType: "blob",
      });
      return response;
    } catch (error) {
      toast.error(`Something went wrong with image! ${error}`);
      console.log(error);
    }
  },

  async checkUser(data: FormData) {
    try {
      const response = await API.post("/user-check/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      toast.error(`Something went wrong! ${error}`);
      console.log(error);
    }
  },

  async createUser(data: FormData) {
    try {
      const response = await API.post("/user-create/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Successfully create user!");

      return response;
    } catch (error) {
      toast.error(`Something went wrong! ${error}`);
      console.log(error);
    }
  },
};

export default UsersService;
