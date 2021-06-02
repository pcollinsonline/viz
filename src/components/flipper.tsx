import React from 'react';
import styled from 'styled-components';
import { LayoutProps, layout } from 'styled-system';

const StyledFlipBox = styled('div').attrs({
  className: 'relative',
})`
  perspective: 150rem;
  ${layout}
`;

const StyledSide = styled.div.attrs({
  className: 'w-100 h-100 absolute bg-moon-gray',
})`
  transition: all 0.8s ease;
  backface-visibility: hidden;
  top: 0;
  left: 0;
`;

const StyledFrontSide = styled(StyledSide)<{ isVisible: boolean }>`
  transform: ${props => (props.isVisible ? null : 'rotateY(180deg)')};
  overflow: hidden;
`;

const StyledBackSide = styled(StyledSide)<{ isVisible: boolean }>`
  transform: ${props =>
    props.isVisible ? 'rotateY(0deg)' : 'rotateY(180deg)'};
`;

interface FlipperProps extends LayoutProps {
  renderFront: ({ isVisible }: { isVisible: boolean }) => JSX.Element;
  renderBack: ({ isVisible }: { isVisible: boolean }) => JSX.Element;
  currentView?: 'front' | 'back';
}

const Flipper = ({
  renderFront,
  renderBack,
  currentView = 'front',
  ...rest
}: FlipperProps): JSX.Element => {
  const showFront = currentView === 'front';
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledFlipBox {...rest}>
      <div className="h-100 w-100 relative">
        <StyledFrontSide isVisible={showFront}>
          {renderFront({ isVisible: showFront })}
        </StyledFrontSide>
        <StyledBackSide isVisible={!showFront}>
          {renderBack({ isVisible: !showFront })}
        </StyledBackSide>
      </div>
    </StyledFlipBox>
  );
};

export default Flipper;
