/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { space } from 'styled-system';

export const Button = styled.button`
  ${space}
  background-color: ${props => props.theme.colors.green};
  padding: 10px 0;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.colors.lightGreen};
  }
`;
