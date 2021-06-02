/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    // The animation will apply the values defined in the
    // first relevant keyframe as soon as it is applied to
    // the target, and retain this during the animation-delay period
    animation-fill-mode: backwards;
  }
`;

interface FadeInProps {
  duration?: number;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps & React.HTMLAttributes<HTMLDivElement>> = ({
  duration = 300,
  delay = 0,
  children,
  ...delegated
}) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default FadeIn;
