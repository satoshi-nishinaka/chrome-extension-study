/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImageButton } from '../ImageButton';

describe('render', () => {
  test('should render component', async () => {
    const { getByRole } = render(
      <ImageButton
        title={'hoge'}
        image={'https://example.com/foo.png'}
        url={'https://example.com/'}
      />
    );

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });
});
