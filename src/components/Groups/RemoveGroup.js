import React from 'react';
import PropTypes from 'prop-types';
import browser from 'webextension-polyfill';
import styled from 'styled-components';
import { IconButton, H3 } from '../Common';
import Toggle from '../Toggle';
import TrashIcon from '../../assets/icons/trash.svg';

const RemoveGroup = ({ groups, groupSelect, setGroupSelect }) => {
  const remove = () => {
    const newGroups = JSON.parse(JSON.stringify(groups));
    delete newGroups[groupSelect];

    browser.storage.local.set({ groups: newGroups });
    setGroupSelect('');
  };

  const toggleActive = () => {
    const newGroups = JSON.parse(JSON.stringify(groups));
    newGroups[groupSelect].active = !groups[groupSelect].active;
    browser.storage.local.set({ groups: newGroups });
  };

  return (
    <Container>
      <H3>{groupSelect}</H3>
      <Container width="35%" justify="flex-end">
        <Toggle active={groups[groupSelect].active} toggleActive={toggleActive} />
        <IconButton onClick={() => remove()} colorHover="lightRed">
          <TrashIcon width="16px" height="16px" />
        </IconButton>
      </Container>
    </Container>
  );
};

const Container = styled.div`
  width: ${props => props.width || '100%'};
  display: flex;
  justify-content: ${props => props.justify || 'space-between'};
  align-items: center;
`;

RemoveGroup.propTypes = {
  groups: PropTypes.shape().isRequired,
  groupSelect: PropTypes.string.isRequired,
  setGroupSelect: PropTypes.func.isRequired,
};

export default RemoveGroup;
