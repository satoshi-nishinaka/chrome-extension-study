/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageInformationSection } from '../PageInformationSection';

test('should render component', async () => {
  render(<PageInformationSection />);

  expect(await screen.getByText('☆Favicon★')).toBeInTheDocument();
});
