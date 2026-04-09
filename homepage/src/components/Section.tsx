import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import media from '../layout/media';

const SectionWrapper = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  min-height: 420px;

  > * {
    flex: 1;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  ${media.xl`
    min-height: 340px;
  `};

  ${media.md`
    grid-column: 1 / 1;
    flex-direction: column;
    min-height: unset;

    > * {
      flex: none;
      width: 100%;
    }
  `};
`;

type SectionProps = {
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;
