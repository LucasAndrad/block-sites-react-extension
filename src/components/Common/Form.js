import styled from 'styled-components';

export const Form = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  max-width: calc(100% - 18px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  box-shadow: none;
  font-size: 0.9rem;
  &:focus {
    -webkit-appearance: none;
    outline: none;
  }
`;
