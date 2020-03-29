import React, { useState } from 'react';
import PropTypes from 'prop-types';
import browser from 'webextension-polyfill';
import { Form, Input, Button } from '../Common';

const GroupForm = ({ setDisplayForm }) => {
  const [inputValue, setInputValue] = useState('');

  const saveGroup = () => {
    browser.storage.local.get('groups').then(({ groups = {} }) => {
      if (groups[inputValue]) return null;

      groups[inputValue] = {
        name: inputValue,
        active: true,
        startTime: '',
        endTime: '',
        sitesList: [],
      };
      browser.storage.local.set({ groups });
      setDisplayForm(false);
      return true;
    });
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Form>
      <Input
        value={inputValue}
        onChange={e => handleInputChange(e)}
        placeholder="Group name (no spaces)"
      />
      <Button onClick={() => saveGroup()} mt={16}>
        Add Group
      </Button>
    </Form>
  );
};

GroupForm.propTypes = {
  setDisplayForm: PropTypes.func.isRequired,
};

export default GroupForm;
