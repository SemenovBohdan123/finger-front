import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";

import LinearProgressWithLabel from "../common/LinearProgress";

import useStyles from "./styles";

const Result: FC<ResultProps> = ({ result, checkImage, onReload }) => {
  const classes = useStyles();

  return result.user && result.source ? (
    <Box className={classes.root}>
      <Box className={classes.user_info}>
        <Typography>ID: {result.user.id}</Typography>
        <Typography>Name: {result.user.name}</Typography>
        <Typography>Age: {result.user.age}</Typography>
        <Box textAlign="center" width="100%">
          <Typography>Процент співпадання:</Typography>
          <LinearProgressWithLabel value={result.source} />
        </Box>
      </Box>
      <Box className={classes.img_box}>
        <img width="480px" height="258px" src={checkImage} alt="blob" />
      </Box>
      <Box display="flex" justifyContent="center" width="100%">
        <Button variant="contained" onClick={onReload}>
          Спробувати ще раз
        </Button>
      </Box>
    </Box>
  ) : (
    <Box className={classes.user_not_found_wrapper}>
      <Typography>This user could not be found</Typography>
      <Button variant="contained" onClick={onReload}>
        Спробувати ще раз
      </Button>
    </Box>
  );
};

export default Result;
