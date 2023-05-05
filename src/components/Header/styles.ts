import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "80px",
    background: "#1976d2",
    color: "white",
    display: "flex",
    alignItems: "center",

    "& > p": {
      marginLeft: "20px",
    },
  },
});

export default useStyles;
