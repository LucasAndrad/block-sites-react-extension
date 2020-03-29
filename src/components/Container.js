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
  const groups = useWebsitesList();
  const [groupSelect, setGroupSelect] = useState('');

  const groupsNames = () => {
    const names = Object.keys(groups) || [''];
    return names;
  };

  const saveLink = () => {
    const websites = groups[groupSelect].sitesList || [];
    if (!inputValue.length || (websites && websites.length)) {
      if (websites.includes(inputValue)) return null;
    }
    websites.push(inputValue);
    groups[groupSelect].sitesList = websites;
    browser.storage.local.set({ groups });
    setInputValue('');
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <>
      <GroupsSelect
        groups={groupsNames()}
        setDisplayForm={setDisplayForm}
        groupSelect={groupSelect}
        setGroupSelect={setGroupSelect}
      />
      {displayForm ? <GroupForm setDisplayForm={setDisplayForm} /> : null}

      {!displayForm ? (
        <Form>
          <Input value={inputValue} onChange={e => handleInputChange(e)} />
          <Button onClick={() => saveLink()} mt={16}>
            Add Link
          </Button>
          <Toggle />
          <WebsitesList groups={groups} groupSelect={groupSelect} />
        </Form>
      ) : null}
    </>
  );
};

export default Container;
