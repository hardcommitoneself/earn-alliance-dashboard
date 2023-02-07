import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  height: 52px;
  border: 1px solid rgb(87 87 100 / 1);
`;

export const Input = styled.input`
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  height: 100%;
  padding-right: 16px;
  padding-left: ${(props) => (props.isIconExist ? "52px" : "16px")};
  background-color: transparent;
  color: rgb(255 255 255 / 0.5);
  border: none;
  font-size: 18px;

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 52px;
`;

export const InputIconImage = styled.img`
  width: 20px;
  height: 20px;
`;
