import React from 'react';
import PropTypes from 'prop-types';
import browser from 'webextension-polyfill';
import styled from 'styled-components';
import { IconButton, H3 } from '../Common';
import TrashIcon from '../../assets/icons/trash.svg';

const RemoveGroup = ({ groups, groupSelect, setGroupSelect }) => {
  const remove = () => {
    const newGroup = JSON.parse(JSON.stringify(groups));
    delete newGroup[groupSelect];

    browser.storage.local.set({ groups: newGroup });
    setGroupSelect('');
  };

  return (
    <Container>
      <H3>{groupSelect}</H3>
      <IconButton onClick={() => remove()} colorHover="lightRed">
        <TrashIcon width="16px" height="16px" />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

RemoveGroup.propTypes = {
  groups: PropTypes.shape().isRequired,
  groupSelect: PropTypes.string.isRequired,
  setGroupSelect: PropTypes.func.isRequired,
};

export default RemoveGroup;
