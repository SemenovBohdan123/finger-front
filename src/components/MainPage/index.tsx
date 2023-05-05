import { FC, useEffect, useState } from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";

import CheckUser from "../CheckUser";
import CreateUser from "../CreateUser";

import UsersService from "../../services/users";

import useStyles from "./styles";
import LastResults from "../LastResults";

const MainPage: FC = () => {
  const classes = useStyles();

  const [selectedAction, setSelectedAction] = useState<number>(1);
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const response = await UsersService.getUsers();

      if (response) {
        Promise.resolve(response).then((values) => {
          setUsers(values.data);
          setIsLoading(false);
        });
      }
    })();
  }, []);

  console.log(users);

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.select_wrapper}>
          <Typography marginBottom="10px">Сhoose what to do</Typography>
          <Select
            onChange={(event) => setSelectedAction(Number(event.target.value))}
            value={selectedAction}
            fullWidth
            displayEmpty
          >
            <MenuItem value={1}>Check user</MenuItem>
            <MenuItem value={2}>Create user</MenuItem>
          </Select>
        </Box>
        <LastResults data={users} />
      </Box>
      {selectedAction === 1 ? <CheckUser /> : <CreateUser />}
    </Box>
  );
};

export default MainPage;
