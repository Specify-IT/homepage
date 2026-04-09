import styled from "styled-components";
import { BaseContainer } from "../base-styled-components/BaseContainer";
import media from "../layout/media";
import type { ReactNode } from "react";

const Container = styled(BaseContainer)`
  overflow: hidden;
  background-color: var(--color-border);

  min-height: 420px;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${media.xl`
    min-height: 340px;
  `};

  ${media.md`
    min-height: 260px;
  `};
`;

type PictureProps = {
  picture?: string;
  feather?: boolean;
  children?: ReactNode;
};

const Picture = ({picture, feather = false, children}: PictureProps) => {
  return (
    <Container feather={feather} horizontal="center" vertical="center">
      {picture && <img src={picture} alt="hero" />}
      {children}
    </Container>
  );
};

export default Picture;