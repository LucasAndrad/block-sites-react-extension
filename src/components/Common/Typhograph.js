import styled from 'styled-components';

export const H3 = styled.h3`
  all: initial;
  display: block;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.colors.green};
  font-size: ${props => props.size || '1.2rem'};
`;

export const Paragraph = styled.p`
  all: initial;
  color: ${props => props.theme.colors.text};
`;

export const LinkText = styled.h5`
  font-weight: 200;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text};
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  all: initial;
  font-size: 2rem;
  display: block;
  font-family: sans-serif;
  white-space: pre-line;
  color: ${props => props.theme.colors.text};
`;

export const Quote = styled.p`
  all: initial;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.1rem;
  font-family: serif;
  white-space: pre-line;
  color: ${props => props.theme.colors.text};
  font-style: italic;
  margin-top: 20px;
  text-align: right;
`;
