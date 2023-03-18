import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #111111;
  justify-content: center;
  box-shadow: 0px 5px 20px #111111;
  padding-bottom: 15px;
`;

export const HeaderImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'Marvel',
}))`
  width: 200px;
  height: 80px;
`