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
  
  ${media.md`
    grid-column: 1 / 1;
    height: 150px;
  `};

  ${media.xxl`
    
  `};

  ${media.xl`
    height: 200px
  `};

  ${media.lg`
    
  `};

  ${media.sm`

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