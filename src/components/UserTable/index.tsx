import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Modal,
  Typography,
  Button,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

import Loader from "../common/Loader";

import UsersService from "../../services/users";

import useStyles from "./styles";

const UserTable: FC = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenConfirmingModal, setIsOpenConfirmingModal] = useState<boolean>(
    false
  );
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await UsersService.getUsersList();

    setUsers(response?.data);

    setIsLoading(false);
  };

  const deleteUser = async (id: number) => {
    await UsersService.deleteUserById(id);

    getUsers();
    setIsOpenConfirmingModal(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    justifuContent: "center",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return !isLoading ? (
    <Box className={classes.root}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => setIsOpenConfirmingModal(true)}>
                  <img
                    className={classes.deleteImg}
                    src="https://icons.veryicon.com/png/o/miscellaneous/regular-icon-2/delete-666.png"
                    alt="delete"
                  />
                </IconButton>
              </TableCell>
              <Modal
                sx={{ opacity: 0.5 }}
                onClose={() => setIsOpenConfirmingModal(false)}
                open={isOpenConfirmingModal}
              >
                <Box sx={style}>
                  <Typography>
                    Are you sure you want to delete this user?
                  </Typography>
                  <Box>
                    <Button
                      sx={{ marginRight: "40px" }}
                      onClick={() => setIsOpenConfirmingModal(false)}
                    >
                      No
                    </Button>
                    <Button onClick={() => deleteUser(user.id as number)}>
                      Yes
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  ) : (
    <Loader />
  );
};

export default UserTable;
