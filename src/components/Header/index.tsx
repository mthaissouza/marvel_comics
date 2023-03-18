import React, { useEffect, useState } from "react";
import { HeaderImage, Container } from "./styles";
import Marvel_Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <Container>
      <HeaderImage src={Marvel_Logo}></HeaderImage>
    </Container>
  )
};

export default Header;
