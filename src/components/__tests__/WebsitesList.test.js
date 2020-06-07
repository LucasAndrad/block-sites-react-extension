import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import WebsitesList from '../WebsitesList';
import theme from '../../themes/default';

const groups = {
  work: {
    sitesList: ['site1.com', 'site2.com'],
  },
};

const groupSelect = 'work';

describe('WebsitesList', () => {
  it('should render websites list correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <WebsitesList groups={groups} groupSelect={groupSelect} />
      </ThemeProvider>
    );
    expect(screen.getByText('site1.com')).toBeVisible();
  });
});
