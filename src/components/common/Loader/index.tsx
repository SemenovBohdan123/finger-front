import { FC } from "react";
import { Box } from "@mui/material";

import useStyles from "./styles";

const Loader: FC = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      width="100%"
      height="calc(100vh - 100px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        className={classes.rotate}
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Feather-core-loader.svg"
        alt="Loaded"
      />
    </Box>
  );
};

export default Loader;
