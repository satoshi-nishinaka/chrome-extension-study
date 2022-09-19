/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImageButton } from '../ImageButton';

describe('render', () => {
  test('should render component', async () => {
    render(
      <ImageButton
        title={'hoge'}
        image={'https://example.com/foo.png'}
        url={'https://example.com/'}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
