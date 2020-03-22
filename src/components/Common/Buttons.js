/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { space } from 'styled-system';

export const Button = styled.button`
  ${space}
  background-color: ${props => props.theme.colors.green};
  padding: 10px 0;
  color: #fff;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: background-color 0.4s;
  font-size: 0.9rem;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.theme.colors.lightGreen};
    color: ${props => props.theme.colors.text};
  }
`;
