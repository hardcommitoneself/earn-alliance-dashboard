import styled from "styled-components";

export const Dropdown = styled.select`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  background-color: transparent;
  height: 54px;
  color: rgb(255 255 255 / 0.5);
  border: 1px solid rgb(87 87 100 / 1);

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 0.9;
`;
