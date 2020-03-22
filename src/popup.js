import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from 'components/Box';
import Example from 'components/Example';
import defaultTheme from 'themes/default';
import Container from './components/Container';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box width="350px" height="450px" padding={3}>
        <h3>Websites block list</h3>
        <Container />
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
