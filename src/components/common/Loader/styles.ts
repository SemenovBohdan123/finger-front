import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "calc(100vh - 100px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  rotate: {
    animation: "$rotate 2s linear infinite",
  },
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

export default useStyles;
