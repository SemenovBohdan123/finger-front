import { FC } from "react";
import { Box, Typography } from "@mui/material";

import useStyles from "./styles";

const LastResults: FC<LastResultsProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} width="30%">
      <Typography marginBottom="10px" variant="h6">
        Last results:
      </Typography>
      <Box className="result_container">
        {data?.map((item: IResult, index) => (
          <Box key={index} className={classes.result_item}>
            <Typography>{item.user_finger_img}</Typography>
            <Box display="flex">
              Status:
              <Typography
                className={item.message === "error" ? "error" : "sucses"}
              >
                {item.message}
              </Typography>
            </Box>
            {item.user && (
              <>
                <Typography>User:</Typography>
                <Box marginLeft="10px">
                  <Typography>Name: {item.user.name}</Typography>
                  <Typography>Age: {item.user.age}</Typography>
                </Box>
              </>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LastResults;
