import React from "react";
import Comics from "./components/Comics";
import Header from "./components/Header";
import styled from "styled-components";

const Home = () => {

  const Container = styled.div`
    padding: 0;
    margin: -10px;
  `;

  return (
    <Container>
      <Header/>
      <Comics/>
    </Container>
  );
};

export default Home;
