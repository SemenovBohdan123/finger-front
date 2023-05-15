import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    flexDirection: "column",
  },

  form: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
});

export default useStyles;
