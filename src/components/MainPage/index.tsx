import { FC } from "react";
import { Box } from "@mui/material";

import CheckUser from "../CheckUser";
import CreateUser from "../CreateUser";
import UserTable from "../UserTable";

import useStyles from "./styles";

const MainPage: FC<MainPageProps> = ({ selectedAction }) => {
  const classes = useStyles();

  const selectedComponent = () => {
    switch (selectedAction) {
      case 2:
        return <CreateUser />;

      case 3:
        return <UserTable />;

      default:
        return <CheckUser />;
    }
  };

  return (
    <Box className={classes.root}>
      <Box width="100%">{selectedComponent()}</Box>
    </Box>
  );
};

export default MainPage;
