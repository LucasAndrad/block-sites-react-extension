import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';

const GroupsSelect = ({ groups }) => {
  return (
    <Select>
      <Option disabled selected value>
        select a group
      </Option>
      {groups.map(group => {
        return <Option value={group}>{group}</Option>;
      })}
    </Select>
  );
};

GroupsSelect.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Select = styled.select`
  ${space}
  width: 100%;
  font-size: 0.85rem;
  height: 40px;
  margin: 20px 0;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  box-shadow: none;
  padding-left: 15px;
  &:focus {
    -webkit-appearance: none;
    outline: none;
  }
`;
const Option = styled.option``;

export default GroupsSelect;
