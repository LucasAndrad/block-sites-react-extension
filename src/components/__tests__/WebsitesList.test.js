import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import WebsitesList from '../WebsitesList';
import theme from '../../themes/default';

const groups = {
  work: {
    sitesList: ['site1.com', 'site2.com'],
  },
};

const groupSelect = 'work';

describe('WebsitesList without groups', () => {
  it('should render message', () => {
    render(
      <ThemeProvider theme={theme}>
        <WebsitesList groups={{}} groupSelect={groupSelect} />
      </ThemeProvider>
    );
    expect(screen.getByText('No websites on your list')).toBeVisible();
  });
});

describe('WebsitesList with groups', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <WebsitesList groups={groups} groupSelect={groupSelect} />
      </ThemeProvider>
    );
  });

  it('should render websites list correctly', () => {
    expect(screen.getByText('site1.com')).toBeVisible();
  });

  it('should render websites list correctly', () => {
    fireEvent.click(screen.getAllByTestId('remove-btn')[0]);
    expect(browser.storage.local.set).toHaveBeenCalled();
  });
});
