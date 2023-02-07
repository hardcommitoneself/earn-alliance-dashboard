import styled from "styled-components";

export const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 55px;
  height: 32px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
  cursor: pointer;
`;

export const Toggle = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.theme.colors.primary};
  left: 2px;
  transform: ${(props) => (props.checked ? "translateX(1.5rem)" : "")};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`;

export const SwitchLabel = styled.label`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
`;
