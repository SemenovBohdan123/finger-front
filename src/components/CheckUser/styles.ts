import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "57%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  dndFilesContainer: {
    cursor: "pointer",
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    width: "50%",
    height: "110px",
    background: "#9fcaf4",
    border: "1.5px dashed black",
    transition: "1s",
    marginBottom: "30px",

    "&:hover": {
      fontSize: "22px",
      background: "white",
    },
  },
});

export default useStyles;
