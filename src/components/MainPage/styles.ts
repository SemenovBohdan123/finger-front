import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "calc(100% - 20px)",
    height: "calc(100vh - 100px)",
    background: "#fafafa",
    padding: "10px",
    display: "flex",
  },

  select_wrapper: {
    width: "300px",
    margin: {
      top: "10px",
      bottom: "30px",
      right: "100px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default useStyles;
