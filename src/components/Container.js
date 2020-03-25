import React, { useState } from 'react';
import styled from 'styled-components';
import browser from 'webextension-polyfill';
import { Button } from './Common';
import WebsitesList from './WebsitesList';

const Form = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  max-width: calc(100% - 18px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  box-shadow: none;
  font-size: 0.9rem;
  &:focus {
    -webkit-appearance: none;
    outline: none;
  }
`;

// chrome extensions docs
// https://developer.chrome.com/apps/storage#property-local
const Container = () => {
  const [inputValue, setInputValue] = useState('');

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
    <Form>
      <Input value={inputValue} onChange={e => handleInputChange(e)} />
      <Button onClick={() => saveLink()} mt={16}>
        Add Link
      </Button>
      <WebsitesList />
    </Form>
  );
};

export default Container;
