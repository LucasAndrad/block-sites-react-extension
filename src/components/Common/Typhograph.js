import styled from 'styled-components';

export const H3 = styled.h3`
  color: ${props => props.theme.colors.green};
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
