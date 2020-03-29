import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';
import { Form, IconButton } from '../Common';
import PlusIcon from '../../assets/icons/plus.svg';

const GroupsSelect = ({ groups, setDisplayForm, groupSelect, setGroupSelect }) => {
  const changeGroup = event => {
    const { value } = event.target;
    setGroupSelect(value);
    setDisplayForm(false);
  };

  return (
    <Form
      style={{
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Select onChange={e => changeGroup(e)}>
        <Option disabled selected value>
          select a group
        </Option>
        {groups.length
          ? groups.map(group => {
              return (
                <Option selected={groupSelect} value={group}>
                  {group}
                </Option>
              );
            })
          : null}
      </Select>
      <IconButton onClick={() => setDisplayForm(true)} color="green" colorHover="darkGreen">
        <PlusIcon width="16px" height="16px" />
      </IconButton>
    </Form>
  );
};

GroupsSelect.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDisplayForm: PropTypes.func.isRequired,
  groupSelect: PropTypes.string.isRequired,
  setGroupSelect: PropTypes.func.isRequired,
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
