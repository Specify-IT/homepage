import styled, { css } from "styled-components";
import { AlignItemsType, BaseContainer, BaseContainerProps, JustifyContentType } from "../base-styled-components/BaseContainer";
import media from "../layout/media";

type ContainerProps = {
  fullWidth: boolean;
} & BaseContainerProps;

const Container = styled(BaseContainer)<ContainerProps>`
  font-size: 2rem;;

  ${media.md`
    font-size: 1.5rem;
  `};

  ${(props) => {
    if (props.fullWidth) {
      return css`
        grid-column: 1 / 1;
      `;
    }
  }};
`;

type TextProps = {
  children: JSX.Element;
  horizontal?: JustifyContentType;
  vertical?: AlignItemsType;
  fullwidth?: boolean;
};

const GridText = ({children, horizontal = "center", vertical = "center", fullwidth = false}: TextProps) => {
  return (
    <Container feather={false} horizontal={horizontal} vertical={vertical} fullWidth={fullwidth}>
      {children}
    </Container>
  );
};

export default GridText;