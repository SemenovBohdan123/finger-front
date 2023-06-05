import API from "./api";
import toast from "react-hot-toast";

const UsersService = {
  async getUsersList() {
    try {
      const response = await API.get(`/user-list/`);
      return response;
    } catch (error) {
      toast.error(`Something went wrong ${error}`);
      console.log(error);
    }
  },

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

  async deleteUserById(id: number) {
    try {
      const response = await API.delete(`/user-delete/${id}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(`Something went wrong with delete! ${error}`);
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
