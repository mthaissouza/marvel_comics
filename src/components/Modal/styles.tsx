import { DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const TitleDescription = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 600;
    color: #0c0b0b;
    padding: 10px;
  }
`;

export const TextDescription = styled.ul`
  width: 90%;
  padding-bottom: 10px;
`;

export const ItemDescription = styled(Typography)`
  &.MuiTypography-root {
    padding-right: 5px;
    width: 25%;
  }
`;

export const DialogBox = styled(Dialog)`
  &.MuiPaper-root-MuiDialog-paper {
    height: 500px;
    width: 700px;
  }
`

export const TitleModal = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 600;
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const BoxLocation = styled.div`
  display: flex;
  margin-top: 30px;
`

export const TextLi = styled.li`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 14px;
`