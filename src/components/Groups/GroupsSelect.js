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
  cursor: pointer;
  width: 100%;
  font-size: 0.85rem;
  height: 40px;
  margin: 20px 0;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  box-shadow: none;
  padding-left: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('../../assets/icons/arrowDown.svg') no-repeat;
  background-position: right 10px top 50%;
  &:focus {
    -webkit-appearance: none;
    outline: none;
    background: url('../../assets/icons/arrowDownActive.svg') no-repeat;
    background-position: right 10px top 50%;
  }
`;
const Option = styled.option``;

export default GroupsSelect;
