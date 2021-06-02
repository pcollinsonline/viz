import React from 'react';
import { GrRotateLeft } from 'react-icons/all';
import styled from 'styled-components';
import Flipper from './flipper';
import { BestSeller } from '../interfaces';

const BookImage = styled.img`
  object-fit: fill;
  width: 180px;
  height: 260px;
  display: block;
`;

interface BookDisplayProps {
  book: BestSeller;
}

const toggleView = (previousView: 'front' | 'back') => {
  if (previousView === 'front') {
    return 'back';
  }
  return 'front';
};

const BookDisplay = ({ book }: BookDisplayProps): JSX.Element => {
  const [view, setView] = React.useState<'front' | 'back'>('front');
  const { title, coverUri, weeksOnList, isbn13 } = book;
  return (
    <div data-testid={isbn13} className="pa3 br2 ba b--moon-gray relative">
      <Flipper
        height="260px"
        width="180px"
        currentView={view}
        renderFront={() => <BookImage alt={title} src={coverUri} />}
        renderBack={() => (
          <div className="flex items-center justify-center flex-column h-100 w-100 bg-white">
            <dl className="f6 lh-title mv2">
              <dt className="dib b mr1">Weeks on List:</dt>
              <dd className="dib ml0 gray">{weeksOnList}</dd>
            </dl>
          </div>
        )}
      />
      <button
        type="button"
        onClick={() => setView(toggleView)}
        className="hover-green flex items-center justify-center ba b--moon-gray pa1 br-100 z-999 absolute bg-white"
        style={{
          top: '50%',
          right: '-0.75rem',
          transform: 'translateY(-50%)',
        }}
      >
        <GrRotateLeft size={12} />
      </button>
    </div>
  );
};

export default BookDisplay;
