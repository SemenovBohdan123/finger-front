import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  user_info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

  img_box: {
    marginTop: "30px",
    marginBottom: "30px",
  },

  user_not_found_wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& > p": {
      marginBottom: "20px",
      fontSize: "20px",
    },
  },
});

export default useStyles;
