import styled, { css } from "styled-components";
import { AlignItemsType, BaseContainer, BaseContainerProps, JustifyContentType } from "../../base-styled-components/BaseContainer";
import media from "../../layout/media";

type ContainerProps = {
  fullWidth: boolean;
} & BaseContainerProps;

const Container = styled(BaseContainer)<ContainerProps>`
  font-size: 1.125rem;
  line-height: 1.75;
  flex-direction: column;
  padding: 2rem 2.25rem;
  background-color: var(--color-bg);
  box-shadow: var(--shadow-sm);
  align-items: flex-start;

  ${(props) => {
    if (props.fullWidth) {
      return css`
        grid-column: 1 / 3;
      `;
    }
  }};

  ${media.md`
    font-size: 1rem;
    padding: 1.2rem;
    grid-column: 1 / 1; // we don't care of fullwidth in mobiles
  `};
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