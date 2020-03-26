import styled from 'styled-components';

export const H3 = styled.h3`
  color: ${props => props.theme.colors.green};
  font-size: ${props => props.size || '1.2em'};
`;

export const Paragraph = styled.p`
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
  font-size: 2rem;
  font-family: sans-serif;
  white-space: pre-line;
  line-height: 1.5em;
  color: ${props => props.theme.colors.text};
`;

export const Quote = styled.p`
  font-size: 2.5rem;
  font-family: serif;
  white-space: pre-line;
  line-height: 1.1em;
  color: ${props => props.theme.colors.text};
  font-style: italic;
  margin-top: 20px;
  text-align: right;
`;
