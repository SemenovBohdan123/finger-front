import { FC } from "react";
import { Box } from "@mui/material";

const Loader: FC = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Feather-core-loader.svg"
        alt="Loaded"
      />
    </Box>
  );
};

export default Loader;
