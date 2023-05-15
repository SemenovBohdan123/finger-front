import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "80px",
    background: "#1976d2",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& > p": {
      marginLeft: "20px",
    },
  },

  select_wrapper: {
    marginRight: "20px",
    width: "300px",
    display: "flex",
    alignItems: "center",

    "& > p": {
      marginRight: "20px",
    },
  },
});

export default useStyles;
