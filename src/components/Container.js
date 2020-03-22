import React, { useState } from 'react';
import styled from 'styled-components';
import browser from 'webextension-polyfill';

const Form = styled.div`
  width: 100%;
  border-top: 1px solid #d6d6d6;
`;

const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid black;
  box-shadow: none;
  &:focus {
    -webkit-appearance: none;
    outline: none;
  }
`;

const Button = styled.button``;

// chrome extensions docs
// https://developer.chrome.com/apps/storage#property-local
const Container = () => {
  const [inputValue, setInputValue] = useState('');

  const saveLink = async () => {
    const { websites } = await browser.storage.local.get({ website: [] });
    const newWebsites = [...websites, inputValue];
    browser.storage.local.set({ websites: newWebsites });
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Form>
      <Input value={inputValue} onChange={e => handleInputChange(e)} />
      <Button onClick={() => saveLink()}>Save</Button>
    </Form>
  );
};

export default Container;
