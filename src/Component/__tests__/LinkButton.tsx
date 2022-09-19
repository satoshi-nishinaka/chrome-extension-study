/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkButton } from '../LinkButton';

test('renders a button', () => {
  const { getByText, getByRole } = render(
    <LinkButton text={'hoge'} url={'https://example.com'} />
  );
  expect(getByText('hoge')).toBeInTheDocument();
  expect(getByRole('button')).toBeInTheDocument();
});
