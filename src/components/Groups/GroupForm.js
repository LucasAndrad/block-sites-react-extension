import React, { useState } from 'react';
import browser from 'webextension-polyfill';
import { Form, Input, Button } from '../Common';

const GroupForm = () => {
  const [inputValue, setInputValue] = useState('');

  const saveGroup = () => {
    browser.storage.local.get('groups').then(({ groups = {} }) => {
      if (groups[inputValue]) return null;

      groups[inputValue] = {
        name: inputValue,
        startTime: '',
        endTime: '',
        sitesList: [],
      };
      browser.storage.local.set({ groups });
      return true;
    });
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Form>
      <Input value={inputValue} onChange={e => handleInputChange(e)} />
      <Button onClick={() => saveGroup()} mt={16}>
        Add Group
      </Button>
    </Form>
  );
};

export default GroupForm;
