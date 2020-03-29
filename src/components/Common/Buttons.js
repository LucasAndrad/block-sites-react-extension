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

export const IconButton = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
  background-color: ${props => (props.color ? props.theme.colors[props.color] : '#ffffff')};
  &:hover {
    border: 1px solid ${props => props.theme.colors.border};
    opacity: 0.7;
    cursor: pointer;
    background-color: ${props =>
      props.colorHover ? props.theme.colors[props.colorHover] : '#ffffff'};
  }
`;
