import { FC } from "react";
import { Typography } from "@mui/material";

import useStyles from "./styles";

const Headre: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Finger App</Typography>
    </div>
  );
};

export default Headre;
