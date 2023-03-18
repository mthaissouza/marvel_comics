import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import api from "../../services/api";
import Input from "../Input";
import {
  BoxLocation,
  DialogBox,
  TextDescription,
  TextLi,
  TitleDescription,
  TitleModal,
} from "./styles";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { Alert, Paper} from "@mui/material";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <Tooltip title={children}>
      <TitleModal sx={{ m: 0, p: 2 }} style={{ fontWeight: 600 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[600],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </TitleModal>
    </Tooltip>
  );
}

type IModal = {
  id: number;
  isOpen: boolean;
  setModalOpen: any;
  title: string;
  description: string;
  dates: Date;
};

interface ICharacters {
  name: string;
}

interface IStories {
  title: string;
}

const Modal: React.FC<IModal> = ({
  id,
  isOpen,
  setModalOpen,
  title,
  description,
  dates,
}) => {

  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [stories, setStories] = useState<IStories[]>([]);

  useEffect(() => {
    api
      .get(`/comics/${id}/characters`)
      .then((res) => {
        let auxArr = new Array();
        res.data.data.results.map((item: any) => {
          auxArr.push(item);
        });
        if (auxArr.length) {
          setCharacters(auxArr);
        }
      })
      .catch((err) => {
        return (
          <Alert variant="filled" severity="error">
            Erro {err}
          </Alert>
        );
      });
  }, [isOpen]);

  useEffect(() => {
    api
      .get(`/comics/${id}/stories`)
      .then((res) => {
        let auxArr = new Array();
        res.data.data.results.map((item: any) => {
          auxArr.push(item);
        });
        if (auxArr.length) {
          setStories(auxArr);
        }
      })
      .catch((err) => {
        return (
          <Alert variant="filled" severity="error">
            Erro {err}
          </Alert>
        );
      });
  }, [isOpen]);

  return (
    <div>
      <DialogBox onClose={setModalOpen} open={isOpen}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={setModalOpen}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {characters.length ? (
            <Paper elevation={10}>
              <TitleDescription>Characters:</TitleDescription>
              <TextDescription>
                {characters.map((character, index) => (
                  <TextLi
                    key={index}
                  >{`${character.name}.`}</TextLi>
                ))}
              </TextDescription>
            </Paper>
          ) : undefined}

          {stories.length ? (
            <Paper elevation={10}>
              <TitleDescription>Stories:</TitleDescription>
              <TextDescription>
                {stories.map((stories, index) => (
                  <TextLi
                    key={index}
                  >{`${stories.title}.`}</TextLi>
                ))}
              </TextDescription>
            </Paper>
          ) : undefined}

          {description ? (
            <Paper elevation={10}>
              <TitleDescription>Description:</TitleDescription>
              <Typography>{description}</Typography>
            </Paper>
          ) : undefined}

          <BoxLocation>
            <Input></Input>
          </BoxLocation>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="error" autoFocus onClick={setModalOpen}>
            Enviar
          </Button>
        </DialogActions>
      </DialogBox>
    </div>
  );
};

export default Modal;
