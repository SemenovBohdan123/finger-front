import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";

import Headre from "./components/Header";
import MainPage from "./components/MainPage";

import "./App.css";

function App() {
  return (
    <Box className="App">
      <Toaster position="top-right" />
      <Headre />
      <MainPage />
    </Box>
  );
}

export default App;
