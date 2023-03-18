import styled from "styled-components";
import Typography from "@mui/material/Typography";

import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #f5f5f5;
    --bg-card-color: #f5f5f5;
    --primary-color: #f50000;
    --secundary-color: #af0b0b;

    --btn-text-color: #FFFFFF;
    --text-color: #000000;
  }
`;

export const BoxStyle = styled.div`
  max-width: 250px;
  background-color: var(--bg-card-color);
  padding: 32px 24px 24px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow .3s;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.1);
  }
  &:hover img{
    transform: scale(1.1);
  }
  &:hover button{
    background-color: var(--secundary-color);
  }
`

export const TitleComics = styled(Typography)`
  &.MuiTypography-root{
    width: 250px;
    font-size: 16px;
    margin-bottom: 8px;
    color: #333333;
    font-weight: 600;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const PriceComics = styled(Typography)`
  &.MuiTypography-root{
    font-size: 32px;
    color: #ff0000;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    margin-bottom: 24px;
  }
`

export const BodyCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  background-color: var(--bg-color);
  color: var(--text-color);
`

export const ButtonSale = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--btn-text-color);
  font-size: 14px;
  font-weight: bold;
  transition: background-color .3s;
  cursor: pointer;
`

export const HeaderCard = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  width: 250px;
  height: 300px;
  margin-bottom: 16px;
  transition: transform .3s;
`
