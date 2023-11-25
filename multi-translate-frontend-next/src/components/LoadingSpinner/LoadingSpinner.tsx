import React from 'react';
import styled from 'styled-components';
import { Loader } from 'react-feather';

function LoadingSpinner({
  color = 'black',
  size = 24,
  opacity = 0.5,
  speed = 1200,
}) {
  return (
    <Spinner
      style={{
        opacity,
        '--speed': `${speed}ms`,
        width: size,
        height: size,
      } as React.CSSProperties}
    >
      <Loader color={color} size={size} />
    </Spinner>
  );
}

const Spinner = styled.span`
  @keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

  display: block;
  animation: spin var(--speed) linear infinite;

 & svg {
  /*
    Ensure that the child is block so
    that it spins symmetrically
  */
  display: block;
}

`;

export default LoadingSpinner;
