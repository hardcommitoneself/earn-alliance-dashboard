import styled from "styled-components";

export const Content = styled.div`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  flex-grow: 1;
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  width: 1100px;
`;
