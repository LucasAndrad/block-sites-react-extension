import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default';

const backgroundPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Nothing here yet. This will be add in future version</p>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<backgroundPage />, root);
