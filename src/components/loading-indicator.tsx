import React from 'react';
import styled, { keyframes } from 'styled-components';

const bouncing = keyframes`
     0% { transform: translateY(0); }
     50% { transform: translateY(-2rem); }
     100% { transform: translateY(0); }
`;

const List = styled.ul`
  height: 1rem;
  width: 10rem;

  li {
    list-style: none;
    width: 16px;
    height: 16px;
    margin: 0 0.5rem;
    border-radius: 50%;
    animation: ${bouncing} 0.7s linear infinite;
  }

  li:nth-child(1) {
    animation-delay: 0.45s;
  }

  li:nth-child(2) {
    animation-delay: 0.6s;
  }

  li:nth-child(3) {
    animation-delay: 0.3s;
  }

  li:nth-child(4) {
    animation-delay: 0s;
  }

  li:nth-child(5) {
    animation-delay: 0.1s;
  }
`;

const LoadingIndicator = (): JSX.Element => {
  return (
    <List className="ma0 pa0 flex  list">
      <li className="bg-green" />
      <li className="bg-green" />
      <li className="bg-green" />
      <li className="bg-green" />
      <li className="bg-green" />
    </List>
  );
};

export default LoadingIndicator;
