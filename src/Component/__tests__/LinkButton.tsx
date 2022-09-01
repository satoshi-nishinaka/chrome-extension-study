import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkButton } from '../LinkButton';

test('rendering button', async () => {
  render(<LinkButton text={'test link button'} url={'https://example.com/'} />);

  expect(await screen.findByText('test link button')).toBeVisible();
});
