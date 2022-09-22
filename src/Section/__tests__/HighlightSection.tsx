/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HighlightSection } from '../HighlightSection';
import { DummyStorage } from '../../Storage';

test('should render component', async () => {
  const storage = new DummyStorage();
  storage.highlightWords = 'hoge';
  storage.enableHighlight = true;
  render(<HighlightSection storage={storage} />);

  expect(await screen.findByDisplayValue('hoge')).toBeInTheDocument();
});
