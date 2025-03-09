/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabEntry from '../TabEntry';
import fn = jest.fn;

test('renders a tab', () => {
  const { getByText, getByRole } = render(
    <TabEntry
      title={'hoge'}
      activeTabId="hoge"
      identify={'title'}
      onClickEvent={fn}
    />
  );
  expect(getByText('hoge')).toBeInTheDocument();
  expect(getByRole('tab')).toBeInTheDocument();
});
