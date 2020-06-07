import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import browser from 'webextension-polyfill';
import TrashIcon from '../assets/icons/trash.svg';
import { LinkText, IconButton } from './Common';

const WebsitesList = ({ groups, groupSelect }) => {
  const removeLink = link => {
    const newList = groups[groupSelect].sitesList.filter(site => {
      return site !== link;
    });

    groups[groupSelect].sitesList = newList;
    browser.storage.local.set({ groups });
  };

  const sitesList = () => {
    if (!groups[groupSelect] || !groups[groupSelect].sitesList.length) return [];

    return groups[groupSelect].sitesList;
  };

  if (!groups || !sitesList().length) return <h4>No websites on your list</h4>;

  return (
    <ListContainer>
      {sitesList().map(site => (
        <LinkContainer key={site}>
          <LinkText>{site}</LinkText>
          <IconButton onClick={() => removeLink(site)} colorHover="lightRed">
            <TrashIcon width="16px" height="16px" />
          </IconButton>
        </LinkContainer>
      ))}
    </ListContainer>
  );
};

WebsitesList.propTypes = {
  groups: PropTypes.shape().isRequired,
  groupSelect: PropTypes.string.isRequired,
};

const ListContainer = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;

export default WebsitesList;
