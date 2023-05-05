import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import UsersService from "../../services/users";

import useStyles from "./styles";

const CreateUser: FC = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();

  const onSubmit = async (data: IInputs) => {
    const form = new FormData();
    form.append("name", data.name);
    form.append("age", String(data.age));
    form.append("user_finger_img", data.img[0]);

    UsersService.createUser(form);
  };

  return (
    <Box className={classes.root}>
      <Typography>Create User</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <TextField
          placeholder="Age"
          type="number"
          {...register("age", { required: true })}
        />
        <TextField
          placeholder="Age"
          type="file"
          {...register("img", { required: true })}
        />
        <TextField type="submit" />
      </form>
    </Box>
  );
};

export default CreateUser;
