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

const terms = ["Privacy Policy", "Terms of Use", "Cookies Policy"];

const Footer = () => {
  return (
    <EA.Footer>
      {/* border */}
      <EA.Border>
        <EA.BorderLeftOverlay />
        <EA.BorderRightOverlay />
      </EA.Border>

      <EA.FooterInner>
        <EA.FooterTopContainer>
          <EA.FooterLogo src="images/logo.svg" alt="logo" />

          <EA.FooterMenuContainer>
            <EA.FooterAppMenuContainer>
              {pages.map((page, index) => (
                <EA.FooterAppMenuItem key={index} href={page.url}>
                  {page.name}
                </EA.FooterAppMenuItem>
              ))}
            </EA.FooterAppMenuContainer>

            <EA.FooterSocialMenuContainer>
              {socials.map((social, index) => (
                <EA.FooterSocialMenuItem key={index}>
                  <EA.FooterSocialImage src={social.icon} alt="social" />
                </EA.FooterSocialMenuItem>
              ))}
            </EA.FooterSocialMenuContainer>
          </EA.FooterMenuContainer>
        </EA.FooterTopContainer>

        <EA.FooterBottomContainer>
          <EA.CopyRight>All Rights Reserved 2022 Earn Alliance</EA.CopyRight>

          <EA.FooterTermsContainer>
            {terms.map((term, index) => (
              <EA.FooterTermsItem key={index}>{term}</EA.FooterTermsItem>
            ))}
          </EA.FooterTermsContainer>
        </EA.FooterBottomContainer>
      </EA.FooterInner>
    </EA.Footer>
  );
};

export default Footer;
