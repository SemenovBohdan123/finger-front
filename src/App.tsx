import { FC, useState } from "react";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";

import Headre from "./components/Header";
import MainPage from "./components/MainPage";

import "./App.css";

const App: FC = () => {
  const [selectedAction, setSelectedAction] = useState<number>(1);

  return (
    <Box className="App">
      <Toaster position="top-center" />
      <Headre
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <MainPage selectedAction={selectedAction} />
    </Box>
  );
};

export default App;
