import styled from "styled-components";

export const GameCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(46 72 87 / 1);
  stroke: #eed5a5;
  stroke-width: 2;
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 1px rgba(238, 213, 165, 1);
  }
`;

export const GameImageContainer = styled.div`
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const GameImage = styled.img`
  width: 100%;
  min-height: 180px;
  height: 180px;
`;

export const GameDetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
`;

export const GameStatus = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${(props) => (props.isLive ? "#55D73D" : "#f97316")};
  opacity: ${(props) => (props.isHover ? 0 : 1)};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`;

export const GameName = styled.span`
  font-size: 20px;
  line-height: 120%;
  font-weight: 700;
  color: white;
  transform: ${(props) =>
    props.isHover ? "translateY(-32px)" : "translateY(0)"};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`;

export const GameGenreTypes = styled.span`
  font-size: 16px;
  line-height: 120%;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};
  opacity: ${(props) => (props.isHover ? 0 : 1)};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`;

export const GameDescription = styled.p`
  position: absolute;
  left: 0;
  top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  font-size: 14px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.secondary};
  opacity: ${(props) => (props.isHover ? 1 : 0)};
`;
