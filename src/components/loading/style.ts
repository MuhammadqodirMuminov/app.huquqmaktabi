import styled, { keyframes } from 'styled-components';

const chase = keyframes`
  100% { transform: rotate(360deg); }
`;

const chaseDot = keyframes`
  80%, 100% { transform: rotate(360deg); }
`;

const chaseBeforeDot = keyframes`
  50% { transform: scale(0.4); }
  100%, 0% { transform: scale(1.0); }
`;

export const SkChase = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${chase} 2.5s infinite linear both;
`;

export const SkChaseDot = styled.div<{ $isWhite: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${chaseDot} 2s infinite ease-in-out both;

  &:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background: ${({ $isWhite }) =>
      $isWhite ? 'var(--white)' : 'var(--primary)'};
    border-radius: 100%;
    animation: ${chaseBeforeDot} 2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }

  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;
