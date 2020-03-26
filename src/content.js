import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import theme from 'themes/default';
import styled, { ThemeProvider } from 'styled-components';
import browser from 'webextension-polyfill';
import { H1, H3, Quote } from './components/Common';
import { quotes } from './assets/quotes.json';

const Container = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.95);
`;

const ModalContent = styled.div`
  position: absolute;
  z-index: 10500;
  background: #ffffff;
  width: 550px;
  height: 350px;
  padding: 20px 50px;
  border-radius: 1px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

  const quote = quotes[(Math.random() * quotes.length) | 0];

  if (!sitesList.includes(window.location.origin)) return null;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ModalContent>
          <H1>{`Hey, you should't be here\nTry to keep your focus\nYou can do it`}</H1>
          <H3 size="1.5em">Maybe these words can help</H3>
          <Quote>{`"${quote.text}"`}</Quote>
          <Quote>{quote.author}</Quote>
        </ModalContent>
      </Container>
    </ThemeProvider>
  );
};

const app = document.createElement('div');
app.id = 'modal-root';
document.body.appendChild(app);
ReactDOM.render(<Modal />, app);
