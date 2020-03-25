import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import browser from 'webextension-polyfill';

const Container = styled.div`
  position: absolute;
  background: red;
  margin: 0 auto;
  top: 100px;
  width: 400px;
  z-index: 10000;
  left: 50%;
  transform: translateX(-50%);
`;

const Modal = () => {
  const [sitesList, setSitesList] = useState([]);
  const [startListener, setStartListener] = useState(false);

  const websitesListener = changes => {
    const { newValue = [], oldValue = [] } = changes.websites;
    if (newValue.lenght !== oldValue.length) {
      setSitesList(changes.websites.newValue);
    }
  };
  useEffect(() => {
    if (!sitesList.length) {
      browser.storage.local.get('websites').then(({ websites = [] }) => {
        setSitesList(websites);
      });
    }
  }, []);

  useEffect(() => {
    if (!startListener) {
      browser.storage.onChanged.addListener(websitesListener);
      setStartListener(true);
    }
  }, []);

  useEffect(() => {
    return function removeListener() {
      if (startListener) {
        browser.storage.onChanged.removeListener(websitesListener);
      }
    };
  });

  if (!sitesList.includes(window.location.origin)) return null;

  return (
    <Container>
      <h1>Hello world - My first Extensionn</h1>
    </Container>
  );
};

const app = document.createElement('div');
app.id = 'modal-root';
document.body.appendChild(app);
ReactDOM.render(<Modal />, app);
