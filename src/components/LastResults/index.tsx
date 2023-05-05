import { FC } from "react";
import { Box, Typography } from "@mui/material";

import useStyles from "./styles";

interface LastResultsProps {
  data: IUser[] | null;
}

const LastResults: FC<LastResultsProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h6">Last results</Typography>
      {data?.map((item) => (
        <Box key={item.id} className={classes.result_item}>
          <Typography>result</Typography>
          <Typography>{item.name}</Typography>
          <Typography>{item.age}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LastResults;
