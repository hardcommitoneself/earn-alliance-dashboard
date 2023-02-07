import React from "react";
import * as EA from "./styles";

const pages = [
  {
    name: "Games",
    url: "/games",
  },
  {
    name: "News",
    url: "/news",
  },
  {
    name: "Allies",
    url: "/allies",
  },
  {
    name: "Badges",
    url: "/badges",
  },
  {
    name: "Whitepaper",
    url: "/whitepaper",
  },
];

const socials = [
  {
    url: "https://twitter.com/xxx",
    icon: "images/twitter.svg",
  },
  {
    url: "https://facebook.com/yyy",
    icon: "images/facebook.svg",
  },
  {
    url: "https://discord.com/zzz",
    icon: "images/discord.svg",
  },
];

const user = {
  name: "Jhon Doe",
  avatar: "jhon.png",
  level: 3,
  power: 3412,
};

const Header = () => {
  return (
    <EA.Header>
      <EA.HeaderInner>
        {/* logo */}
        <EA.Logo href="http://localhost:3000">
          <EA.LogoImage src="images/logo.svg" alt="logo" />
        </EA.Logo>

        {/* nav menu */}
        <EA.NavMenuContainer>
          <EA.NavAppMenuContainer>
            {pages.map((page, index) => (
              <EA.NavAppMenuItem key={index} href={page.url}>
                {page.name}
              </EA.NavAppMenuItem>
            ))}
          </EA.NavAppMenuContainer>

          <EA.NavSocialMenuContainer>
            {socials.map((social, index) => (
              <EA.NavSocialMenuItem key={index}>
                <EA.NavSocialImage src={social.icon} alt="social" />
              </EA.NavSocialMenuItem>
            ))}
          </EA.NavSocialMenuContainer>
        </EA.NavMenuContainer>

        {/* profile */}
        <EA.ProfileContainer>
          <EA.ProfileDetailContainer>
            <EA.ProfileAvatarContainer>
              <EA.ProfileAvatar src={`/avatars/${user.avatar}`} />
            </EA.ProfileAvatarContainer>

            <EA.ProfileNamePowerContainer>
              <EA.ProfileName>{user.name}</EA.ProfileName>
              <EA.ProfilePower>Power: {user.power}</EA.ProfilePower>
            </EA.ProfileNamePowerContainer>
          </EA.ProfileDetailContainer>

          <EA.Dropdown src="/images/arrow-down.png" alt="arrow-down" />
        </EA.ProfileContainer>
      </EA.HeaderInner>

      {/* border */}
      <EA.Border>
        <EA.BorderLeftOverlay />
        <EA.BorderRightOverlay />
      </EA.Border>
    </EA.Header>
  );
};

export default Header;
