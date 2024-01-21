import styled from "styled-components";
import { BaseContainer } from "../base-styled-components/BaseContainer";
import media from "../layout/media";

const Container = styled(BaseContainer)`
  overflow: hidden;
  background-color: #bbb;


  height: 600px;

  ${media.xl`
    height: 500px
  `};

  ${media.md`
    height: 320px;
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