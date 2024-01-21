import styled, { css } from "styled-components";

export type JustifyContentType = "left" | "center" | "right";
export type AlignItemsType = "start" | "center" | "end";

export type BaseContainerProps = {
  feather: boolean;
  horizontal: JustifyContentType;
  vertical: AlignItemsType;
};

export const BaseContainer = styled.div<BaseContainerProps>`
  position: relative;
  margin: 0.3rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: ${props => props.horizontal};
  align-items: ${props => props.vertical};

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
`;