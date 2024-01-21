import styled, { css } from "styled-components";
import media from "../layout/media";
import Background from "../assets/images/background.png";

type ContainerProps = {
  feather: boolean;
};

const Container = styled.div<ContainerProps>`
  margin: 0.3rem;
  border-radius: 0.5rem;
  background-color: azure;
  min-height: 15rem;
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

  ${media.md`
    grid-column: 1 / 1;
  `};

  ${media.xxl`
    height: 400px;
  `};

  ${media.xl`
    height: 200px;
  `};

  ${media.lg`
    height: 400px;
  `};

  ${media.sm`
    height: 200px;
  `};

  ${media.xs`
    
  `};
`;

type HeroProps = {
  image: unknown;
  feather?: boolean;
};

const Hero = ({image, feather = false}: HeroProps) => {
  return (
    <Container feather={feather}>
      {/* <Butterfly fill="red" height="10rem" width="100%" /> */}
      <img src={Background} alt="hero" width="100%" height="100%" />
    </Container>
  );
};

export default Hero;