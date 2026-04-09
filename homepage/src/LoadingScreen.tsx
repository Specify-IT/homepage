import type { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(0.6); opacity: 0.4; }
  50%       { transform: scale(1);   opacity: 1;   }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  gap: 0.5rem;
`;

const Dot = styled.span<{ delay: number }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-brand);
  animation: ${pulse} 1.2s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const LoadingScreen: FC = () => {
  return (
    <Wrapper>
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </Wrapper>
  );
};

export default LoadingScreen;