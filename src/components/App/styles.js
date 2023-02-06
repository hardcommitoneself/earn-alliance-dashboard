import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(12, 30, 40, 0) 0%,
      #0c1e28 100%
    ),
    url("images/bg.png"), url("images/bg.png");
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  color: white;
  background-color: ${(props) => props.theme.colors.primary90};
`;
