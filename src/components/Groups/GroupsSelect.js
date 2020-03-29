import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';
import { Form, IconButton } from '../Common';
import PlusIcon from '../../assets/icons/plus.svg';

const GroupsSelect = ({ groups }) => {
  return (
    <Form
      style={{
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Select>
        <Option disabled selected value>
          select a group
        </Option>
        {groups.map(group => {
          return <Option value={group}>{group}</Option>;
        })}
      </Select>
      <IconButton onClick={() => removeLink(site)} color="green" colorHover="darkGreen">
        <PlusIcon width="16px" height="16px" />
      </IconButton>
    </Form>
  );
};

GroupsSelect.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Select = styled.select`
  ${space}
  cursor: pointer;
  width: 85%;
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
