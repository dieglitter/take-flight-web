import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const MarqueeHeaderWrapper = styled.div`
  font-size: 64px;
  font-family: "baikal", sans-serif;
  font-weight: bold;
  color: #f2e7d7;
  margin: 0 10px;

  @media (max-width: ${LG}) {
    font-size: 54px;
  }
  @media (max-width: ${MD}) {
    font-size: 40px;
  }
  @media (max-width: ${SM}) {
    font-size: 32px;
  }

  .marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 100px;
    overflow-x: hidden;
    @media (max-width: 640px) {
      height: 50px;
    }
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 32s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .content {
    span {
      padding-right: 40px;
    }
  }
`;