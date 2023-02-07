import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Border = styled.div`
  position: relative;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    #eed5a5,
    transparent
  );
`;

export const BorderLeftOverlay = styled.div`
  position: absolute;
  width: 33.3333%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent);
`;

export const BorderRightOverlay = styled.div`
  position: absolute;
  width: 33.3333%;
  height: 100%;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent);
  right: 0;
`;

export const FooterInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 58px;
  padding-bottom: 58px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const FooterTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLogo = styled.img`
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 54px;
`;

export const FooterAppMenuContainer = styled.div`
  display: flex;
  gap: 48px;
  margin-top: -5px;
`;

export const FooterSocialMenuContainer = styled.div`
  display: flex;
  gap: 24px;
  cursor: pointer;
`;

export const FooterAppMenuItem = styled.a`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: white;
  text-decoration: none;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const FooterSocialMenuItem = styled.a`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const FooterSocialImage = styled.img``;

export const CopyRight = styled.span`
  font-size: 18px;
  line-height: 120%;
  color: white;
  opacity: 0.3;
  font-weight: 400;
`;

export const FooterTermsContainer = styled.div`
  display: flex;
  gap: 54px;
`;

export const FooterTermsItem = styled.span`
  font-size: 18px;
  line-height: 120%;
  font-weight: 400;
  color: white;
`;
