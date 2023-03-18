import React, { useState } from "react";
import {
  TitleComics,
  BoxStyle,
  HeaderCard,
  BodyCard,
  GlobalStyle,
  PriceComics,
  ButtonSale,
} from "./styles";
import Modal from "../Modal";
import { Tooltip } from "@mui/material";

type IComicThumbnail = {
  id: number;
  description: string;
  dates: Date;
  title: string;
  price: number;
  thumbnail: string;
};

const ComicThumbnail: React.FC<IComicThumbnail> = ({
  id,
  description,
  dates,
  title,
  price,
  thumbnail,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BoxStyle onClick={() => setOpenModal(true)}>
        <HeaderCard src={thumbnail} alt={thumbnail} />
        <BodyCard>
          <Tooltip title={title}>
            <TitleComics>{title}</TitleComics>
          </Tooltip>
          <PriceComics>{price === 0 ? `$ 9.99` : `$ ${price}`}</PriceComics>
          <ButtonSale onClick={() => setOpenModal(true)}>Comprar</ButtonSale>
        </BodyCard>
      </BoxStyle>
      <Modal
        id={id}
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        title={title}
        description={description}
        dates={dates}
      ></Modal>
    </>
  );
};

export default ComicThumbnail;
