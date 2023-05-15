import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& .reload_button": {
      marginLeft: "5px",
      cursor: "pointer",
      width: "26px",
      height: "26px",
    },
  },

  dndFilesContainer: {
    cursor: "pointer",
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    width: "100%",
    height: "160px",
    background: "#9fcaf4",
    border: "1.5px dashed black",
    transition: "1s",
    fontSize: "22px",
    marginBottom: "30px",

    "&:hover": {
      background: "white",
    },
  },
});

export default useStyles;
