import { ReactNode } from "react";
import { AlignItemsType, BaseContainer, JustifyContentType } from "../base-styled-components/BaseContainer";

type StandardProps = {
  children?: ReactNode;
  horizontal?: JustifyContentType;
  vertical?: AlignItemsType;
  feather?: boolean;
};

const Standard = ({children, horizontal = "center", vertical = "center", feather = false}: StandardProps) => {
  return <BaseContainer horizontal={horizontal} vertical={vertical} feather={feather}>{children}</BaseContainer>
};

export default Standard;