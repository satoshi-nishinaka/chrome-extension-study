/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DummyStorage } from '../../Storage';
import { ToolsSection } from '../ToolsSection';

test('should render component', async () => {
  const storage = new DummyStorage();
  storage.enableConsoleLog = false;
  storage.isOpenNewTab = false;
  render(<ToolsSection storage={storage} />);

  // textareaのroleはtextbox
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'https://example.com/' },
  });
});
