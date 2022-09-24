/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DummyStorage } from '../../Storage';
import { SettingSection } from '../SettingSection';

test('should render component', async () => {
  const storage = new DummyStorage();
  storage.enableConsoleLog = false;
  storage.isOpenNewTab = false;
  render(<SettingSection storage={storage} />);

  expect(await screen.findByLabelText('新しいタブで開く')).toBeInTheDocument();

  fireEvent.click(screen.getByText('新しいタブで開く'));
  expect(storage.isOpenNewTab).toEqual(true);

  fireEvent.click(screen.getByText('ログをConsoleに流す'));
  expect(storage.enableConsoleLog).toEqual(true);
});
