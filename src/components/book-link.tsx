import styled from 'styled-components';

const BookLink = styled.a.attrs({
  className: 'ml-4 pa3 br3 bg-green hover-light-green white dib',
})`
  text-decoration: none;

  &:focus-visible {
    outline-offset: 0;
    outline: darkgreen auto 1px;
  }
`;

export default BookLink;
