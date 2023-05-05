import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "57%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    flexDirection: "column",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
});

export default useStyles;
