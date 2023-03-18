import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const BoxComics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 20px;
  background-color: #111111;
  padding: 20px;
`
