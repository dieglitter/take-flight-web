import React from "react";
import { FooterWrapper } from "./style";
import isotipo from '../../images/isotipo.svg'

export const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a href="">YOUTUBE</a>
        </li>
        <li>
          <a href="">INSTAGRAM</a>
        </li>
        <li>
          <a href="mailto:hello@takeflight.world">CONTACT</a>
        </li>
        <li>
          <img src={isotipo} alt="Isotipo" />
        </li>
      </ul>
    </FooterWrapper>
  );
};
