import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PaginationArrowButtonImage = styled.img``;

export const PaginationArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const PaginationNumberButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? "rgba(238, 213, 165, 0.2)" : "transparent"};
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) =>
    props.active ? props.theme.colors.secondary : "rgb(87 87 100 / 1)"};
  width: 54px;
  height: 54px;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    background-color: ${(props) =>
      props.active ? "" : "rgba(238, 213, 165, 0.2)"};
    border-color: ${(props) =>
      props.active ? "" : props.theme.colors.secondary};
  }
`;
