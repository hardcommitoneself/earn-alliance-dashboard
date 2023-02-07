import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  background-color: ${(props) => props.theme.colors.primary};
  padding-left: 56px;
  padding-right: 56px;
  opacity: 0.8;
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
  background-image: linear-gradient(to right, #333333, transparent);
`;

export const BorderRightOverlay = styled.div`
  position: absolute;
  width: 33.3333%;
  height: 100%;
  background-image: linear-gradient(to left, #333333, transparent);
  right: 0;
`;

export const Logo = styled.a`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const LogoImage = styled.img``;

export const NavMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavAppMenuContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: -5px;
`;

export const NavSocialMenuContainer = styled.div`
  display: flex;
  gap: 24px;
  cursor: pointer;
`;

export const NavAppMenuItem = styled.a`
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

export const NavSocialMenuItem = styled.a`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const NavSocialImage = styled.img``;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const ProfileDetailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ProfileAvatarContainer = styled.div`
  position: relative;
  transform: rotate(-45deg);
  width: 62px;
  height: 62px;
`;

export const ProfileLevel = styled.div`
  position: absolute;
  right: 30%;
  bottom: -5%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
`;

export const ProfileAvatar = styled.img`
  transform: rotate(45deg);
  width: 62px;
  height: 62px;
`;

export const ProfileNamePowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProfileName = styled.span`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
`;

export const ProfilePower = styled.span`
  font-size: 18px;
  line-height: 20px;
`;

export const Dropdown = styled.img``;
