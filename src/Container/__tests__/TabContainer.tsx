/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TabContainer } from '../TabContainer';

describe('render', () => {
  test('should render component', async () => {
    const { getByText, getByRole } = render(
      <TabContainer activeTabId="hoge" identify="hoge" title="hoge" />
    );

    expect(getByText('hoge')).toBeInTheDocument();
    expect(getByRole('tabpanel')).toBeInTheDocument();
  });
});
