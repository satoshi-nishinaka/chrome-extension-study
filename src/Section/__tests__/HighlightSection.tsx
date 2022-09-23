/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { HighlightSection } from '../HighlightSection';
import { DummyStorage } from '../../Storage';

test('should render component', async () => {
  const storage = new DummyStorage();
  storage.highlightWords = 'hoge';
  storage.enableHighlight = true;
  render(<HighlightSection storage={storage} />);

  expect(await screen.findByDisplayValue('hoge')).toBeInTheDocument();

  fireEvent.click(screen.getByText('ハイライト有効'));
  expect(storage.enableHighlight).toEqual(false);
});

test('change value after click', async () => {
  const storage = new DummyStorage();
  storage.highlightWords = 'hoge';
  storage.enableHighlight = false;
  render(<HighlightSection storage={storage} />);

  expect(await screen.findByDisplayValue('hoge')).toBeInTheDocument();

  fireEvent.click(screen.getByText('ハイライト有効'));
  expect(storage.enableHighlight).toEqual(false);
});