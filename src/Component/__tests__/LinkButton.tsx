/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkButton } from '../LinkButton';
import { DummyStorage } from '../../Storage';

test('renders a button', () => {
  const storage = new DummyStorage();
  const { getByText, getByRole } = render(
    <LinkButton text={'hoge'} url={'https://example.com'} storage={storage} />
  );
  expect(getByText('hoge')).toBeInTheDocument();
  expect(getByRole('button')).toBeInTheDocument();
});
