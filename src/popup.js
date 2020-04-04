// import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from './components/Box';
import theme from './themes/default';
import Container from './components/Container';
import { H3 } from './components/Common';

const Popup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box width={['350px', '350px', '560px']} height="60%" padding={16}>
        <H3>Good Block</H3>
        <Container />
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
