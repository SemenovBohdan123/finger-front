import { FC, useState } from "react";
import { Box } from "@mui/material";

import CheckUser from "../CheckUser";
import CreateUser from "../CreateUser";
import LastResults from "../LastResults";

import useStyles from "./styles";

const MainPage: FC<MainPageProps> = ({ selectedAction }) => {
  const classes = useStyles();

  const [results, setResults] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return isLoading ? (
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
  ) : (
    <Box className={classes.root}>
      <LastResults data={results} />
      <Box width="45%">
        {selectedAction === 1 ? (
          <CheckUser
            setIsLoading={setIsLoading}
            setResults={setResults}
            results={results}
          />
        ) : (
          <CreateUser />
        )}
      </Box>
    </Box>
  );
};

export default MainPage;
