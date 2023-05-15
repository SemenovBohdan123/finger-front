import { FC, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Loader from "../common/Loader";

import UsersService from "../../services/users";

import useStyles from "./styles";

const CreateUser: FC = () => {
  const classes = useStyles();

  const { register, handleSubmit, reset } = useForm<IInputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: IInputs) => {
    setIsLoading(true);

    let user: boolean = false;
    const formImage = new FormData();
    formImage.append("image", data.img[0]);

    await UsersService.checkUser(formImage)
      .then((response) => response?.data)
      .then((data: IResult) => {
        if (data.source === 100) {
          user = true;
        }
      });

    if (user) {
      toast.error("Такий юзер вже існує");
      setIsLoading(false);
      return;
    }

    const form = new FormData();
    form.append("name", data.name);
    form.append("age", String(data.age));
    form.append("user_finger_img", data.img[0]);
    reset();

    await UsersService.createUser(form);
    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Box className={classes.root}>
      <Typography>Create User</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%">
          <Typography marginBottom="10px">Name</Typography>
          <TextField fullWidth {...register("name", { required: true })} />
        </Box>
        <Box width="100%">
          <Typography marginBottom="10px">Age</Typography>
          <TextField
            fullWidth
            type="number"
            {...register("age", { required: true })}
          />
        </Box>
        <Box>
          <Typography marginBottom="10px">Fingerprint</Typography>
          <TextField type="file" {...register("img", { required: true })} />
        </Box>
        <TextField fullWidth onLoad={() => setIsLoading(false)} type="submit" />
      </form>
    </Box>
  );
};

export default CreateUser;
