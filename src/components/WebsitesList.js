import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import browser from 'webextension-polyfill';

const ListContainer = styled.div`
  height: 250px;
  width: 100%;
`;

const WebsitesList = () => {
  const [sitesList, setSitesList] = useState([]);

  useEffect(async () => {
    console.log('inside of useEffect');
    const { websites } = await browser.storage.local.get({ websites: [] });
    console.log(websites);
    setSitesList(websites);
  }, []);

  if (!sitesList || !sitesList.length) return <h4>No websites on your list</h4>;

  return (
    <ListContainer>
      {sitesList.map(site => (
        <h5>{site}</h5>
      ))}
    </ListContainer>
  );
};

export default WebsitesList;
