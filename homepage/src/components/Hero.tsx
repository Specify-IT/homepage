import styled from "styled-components";
import media from "../layout/media";
import { AlignItemsType, BaseContainer, JustifyContentType } from "../base-styled-components/BaseContainer";

const HeroContainer = styled(BaseContainer)`
  grid-column: 1 / 3;
  height: 300px;

  ${media.xl`
    height: 200px
  `};

  ${media.md`
    grid-column: 1 / 1;
    height: 150px;
  `};
`;

const HeroText = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: inline-table;
  color: #333;
  font-weight: 600;
  font-size: 6rem;

  ${media.md`
    font-size: 4rem;
  `};
`;

type HeroProps = {
  image?: string;
  text?: string;
  feather?: boolean;
  horizontal?: JustifyContentType;
  vertical?: AlignItemsType;
};

const Hero = ({image, text, feather = false, horizontal = "center", vertical = "center"}: HeroProps) => {
  return (
    <HeroContainer feather={feather} horizontal={horizontal} vertical={vertical}>
      <HeroText>{text}</HeroText>
      {image && <img src={image} alt="hero" width="100%" height="100%" />}
    </HeroContainer>
  );
};

export default Hero;