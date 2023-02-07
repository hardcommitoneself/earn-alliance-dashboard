import styled from "styled-components";

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const GamesMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;

export const GamesPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GamesEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
