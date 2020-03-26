import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'themes/default';
import styled, { ThemeProvider } from 'styled-components';
import { H1, H3, Quote } from './components/Common';
import { quotes } from './assets/quotes.json';
import { useWebsitesList } from './hooks';

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

const QuoteContainer = styled.div`
  position: relative;
  height: 50%;
  padding-top: 50px;
`;

const QuoteText = styled.div`
  position: absolute;
  bottom: 10px;
`;

const Modal = () => {
  const sitesList = useWebsitesList();

  const quote = quotes[(Math.random() * quotes.length) | 0];

  if (!sitesList.includes(window.location.origin)) return null;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ModalContent>
          <H1>{`Hey, you should't be here\nTry to keep focus\nYou can do it`}</H1>
          <QuoteContainer>
            <H3 size="2em">Maybe these words can help</H3>
            <QuoteText>
              <Quote>{`"${quote.text}"`}</Quote>
              <Quote>{quote.author}</Quote>
            </QuoteText>
          </QuoteContainer>
        </ModalContent>
      </Container>
    </ThemeProvider>
  );
};

const app = document.createElement('div');
app.id = 'modal-root';
document.body.appendChild(app);
ReactDOM.render(<Modal />, app);
