import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "30%",
    display: "flex",
    flexDirection: "column",

    "& .result_container": {
      maxHeight: "100vh",
      overflowY: "auto",
      width: "75%",
    },
  },

  result_item: {
    margin: "20px",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    width: "80%",

    "& .error": {
      color: "#FF0049",
    },

    "& .sucses": {
      color: "#07CD00",
    },
  },
});

export default useStyles;
