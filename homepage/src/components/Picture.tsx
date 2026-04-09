import styled from "styled-components";
import { BaseContainer } from "../base-styled-components/BaseContainer";
import media from "../layout/media";

const Container = styled(BaseContainer)`
  overflow: hidden;
  background-color: var(--color-border);
  box-shadow: var(--shadow-md);

  height: 520px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${media.xl`
    height: 420px;
  `};

  ${media.md`
    height: 280px;
  `};
`;

type PictureProps = {
  picture?: string;
  feather?: boolean;
};

const Picture = ({picture, feather = false}: PictureProps) => {
  return (
    <Container feather={feather} horizontal="center" vertical="center">
      {picture && <img src={picture} alt="hero" />}
    </Container>
  );
};

export default Picture;