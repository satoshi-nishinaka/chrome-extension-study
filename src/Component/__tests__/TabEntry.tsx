/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabEntry from '../TabEntry';

test('renders a tab', () => {
  const { getByText, getByRole } = render(
    <TabEntry title={'hoge'} active={true} identify={'title'} />
  );
  expect(getByText('hoge')).toBeInTheDocument();
  expect(getByRole('tab')).toBeInTheDocument();
});
