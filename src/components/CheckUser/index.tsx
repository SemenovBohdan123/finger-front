import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import Dropzone from "react-dropzone";

import useStyles from "./styles";
import UsersService from "../../services/users";

const CheckUser: FC = () => {
  const classes = useStyles();

  const [file, setFile] = useState<any>();

  const handleDrop = (acceptedFiles: any) => setFile(acceptedFiles);

  const onCkeckUser = () => {
    const form = new FormData();
    form.append("image", file[0]);
    UsersService.checkUser(form);
  };

  return (
    <Box className={classes.root}>
      <Dropzone onDrop={handleDrop} minSize={1024} maxSize={3072000}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: classes.dndFilesContainer })}>
            <input {...getInputProps()} />
            <p>Drag & Drop your files or Browse</p>
          </div>
        )}
      </Dropzone>
      <Button onClick={onCkeckUser} variant="contained">
        Check user
      </Button>
    </Box>
  );
};

export default CheckUser;
