import { FC, useState } from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import Dropzone from "react-dropzone";

import Loader from "../common/Loader";
import Result from "../Result/index";
import UsersService from "../../services/users";

import useStyles from "./styles";

const CheckUser: FC = () => {
  const classes = useStyles();

  const [file, setFile] = useState<File[] | null>(null);
  const [checkImage, setCheckImage] = useState<string | null>(null);
  const [result, setResult] = useState<IResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDrop = (acceptedFiles: any) => setFile(acceptedFiles);

  const getCheckIamge = async () => {
    await UsersService.getCheckImage().then((response) => {
      if (!response) {
        return;
      }

      const image = new Blob([response.data], { type: "image/BMP" });

      setCheckImage(URL.createObjectURL(image));
    });

    setIsLoading(false);
  };

  const onCkeckUser = async () => {
    if (!file) {
      return;
    }
    setIsLoading(true);

    const form = new FormData();
    form.append("image", file[0]);

    await UsersService.checkUser(form)
      .then((response) => response?.data)
      .then((data: IResult) => {
        setResult(data);
      });

    getCheckIamge();
  };

  const onReload = () => {
    if (!file || !result) {
      return;
    }

    setCheckImage(null);
    setResult(null);
    setFile(null);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Box className={classes.root}>
      {!result ? (
        <>
          <Dropzone maxFiles={1} onDrop={handleDrop} disabled={!!file}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className: classes.dndFilesContainer,
                })}
              >
                <input {...getInputProps()} />
                <p>
                  {!file ? "Drag & Drop your files or Browse" : "File uploaded"}
                </p>
              </div>
            )}
          </Dropzone>
          <Box marginBottom="50px" width="40%">
            {file && (
              <Box alignItems="center" display="flex">
                <Typography>Check image: {file[0].name}</Typography>
                <Tooltip placement="right" title="Reload image">
                  <img
                    onClick={() => setFile(null)}
                    className="reload_button"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Ic_refresh_48px.svg"
                    alt="reload"
                  />
                </Tooltip>
              </Box>
            )}
          </Box>
          <Button disabled={!file} onClick={onCkeckUser} variant="contained">
            Check user
          </Button>
        </>
      ) : (
        <Result checkImage={checkImage} result={result} onReload={onReload} />
      )}
    </Box>
  );
};

export default CheckUser;
