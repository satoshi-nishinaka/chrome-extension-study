/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkButton } from '../LinkButton';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('renders a text', () => {
  const { getByText } = render(
    <LinkButton text={'hoge'} url={'https://example.com'} />
  );
  expect(getByText('hoge')).toBeInTheDocument();
});
