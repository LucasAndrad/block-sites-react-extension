import React, { useState } from 'react';
import styled from 'styled-components';
import browser from 'webextension-polyfill';
import { Button, Form, Input } from './Common';
import { GroupsSelect, GroupForm } from './Groups';
import WebsitesList from './WebsitesList';
import Toggle from './Toggle';
import { useWebsitesList } from '../hooks';

// chrome extensions docs
// https://developer.chrome.com/apps/storage#property-local
const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayForm, setDisplayForm] = useState(false);
  const sitesList = useWebsitesList();

  const saveLink = async () => {
    const { websites = [] } = await browser.storage.local.get('websites');
    if (!inputValue.length || (websites && websites.length)) {
      if (websites.includes(inputValue)) return null;
    }
    websites.push(inputValue);
    browser.storage.local.set({ websites });
    setInputValue('');
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <>
      <GroupsSelect groups={['Work', 'Study']} setDisplayForm={setDisplayForm} />
      {displayForm ? <GroupForm setDisplayForm={setDisplayForm} /> : null}

      {!displayForm ? (
        <Form>
          <Input value={inputValue} onChange={e => handleInputChange(e)} />
          <Button onClick={() => saveLink()} mt={16}>
            Add Link
          </Button>
          <Toggle />
          <WebsitesList sitesList={sitesList} />
        </Form>
      ) : null}
    </>
  );
};

export default Container;
