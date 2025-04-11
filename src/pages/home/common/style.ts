import styled from 'styled-components';

export const GradientOverlay = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  left: 0;
  height: var(--full);
  position: absolute;
  top: 0;
  width: var(--full);
`;
