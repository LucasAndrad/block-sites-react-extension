import React from 'react';
import theme from 'themes/default';
import { layout, space } from 'styled-system';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { H1, H3, Quote } from './Common';
import { quotes } from '../assets/quotes.json';
import { useWebsitesList } from '../hooks';

const Modal = () => {
  const groups = useWebsitesList();

  const quote = quotes[(Math.random() * quotes.length) | 0];

  const showCurrentLink = () => {
    let show = true;
    const currentUrl = window.location.origin;

    let allSites = [];

    Object.values(groups).forEach(group => {
      if (group.active) {
        if (!allSites.length) allSites = group.sitesList;
        else allSites = allSites.concat(group.sitesList);
      }
    });

    allSites.forEach(site => {
      if (currentUrl.includes(site)) show = false;
    });

    return show;
  };

  if (showCurrentLink()) return null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ModalContent width={[650]} height={[380]}>
          <H1 style={{ marginTop: '0px', textAlign: 'left' }}>
            {`Hey, you should't be here\nTry to keep focus\nYou can do it`}
          </H1>
          <H3 style={{ marginTop: '8%' }}>Maybe these words can help</H3>
          <QuoteContainer>
            <Quote>{`"${quote.text}"`}</Quote>
            <Quote>{quote.author}</Quote>
          </QuoteContainer>
        </ModalContent>
      </Container>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.95);
`;

const QuoteContainer = styled.div`
  margin-top: 12%;
`;

const ModalContent = styled.div`
  ${layout}
  ${space}
  position: absolute;
  z-index: 10500;
  background: #ffffff;
  /* width: 550px;
  height: 350px; */
  padding: 20px;
  border-radius: 1px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Modal;
