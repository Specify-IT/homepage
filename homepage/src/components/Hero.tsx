import styled, { css } from "styled-components";
import media from "../layout/media";

type ContainerProps = {
  feather: boolean;
};

const Container = styled.div<ContainerProps>`
  margin: 0.3rem;
  border-radius: 0.5rem;
  grid-column: 1 / 3;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.feather) {
      return css`
        position: relative;
        display: inline-block;
        color: white;
        &:after {
          content: "";
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-collapse: separate;
          box-shadow: inset 0 0 10px 10px;
        };
      `;
    }
  }};

  height: 300px;

  ${media.xxl`
    
  `};

  ${media.xl`
    height: 200px
  `};

  ${media.lg`
    
  `};

  ${media.md`
    grid-column: 1 / 1;
    height: 150px;
  `};

  ${media.sm`

  `};

  ${media.xs`
    
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
  feather?: boolean;
  text?: string;
};

const Hero = ({image, feather = false, text}: HeroProps) => {
  return (
    <Container feather={feather}>
      <HeroText>{text}</HeroText>
      {image && <img src={image} alt="hero" width="100%" height="100%" />}
    </Container>
  );
};

export default Hero;