import toast from "react-hot-toast";
import API from "./api";

const UsersService = {
  async getUsers() {
    try {
      const response = await API.get("/user-list/");

      return response;
    } catch (error) {
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
      toast.error("Something went wrong!");
      console.log(error);
    }
  },
};

export default UsersService;
