import { FC } from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";

import useStyles from "./styles";

const Headre: FC<HeadreProps> = ({ setSelectedAction, selectedAction }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Finger App</Typography>
      <Box className={classes.select_wrapper}>
        <Typography width="100%" marginRight="10px">
          Сhoose what to do
        </Typography>
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
    </div>
  );
};

export default Headre;
