/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImageButton } from '../ImageButton';
import { DummyStorage } from '../../Storage';

describe('render', () => {
  test('should render component', async () => {
    const storage = new DummyStorage();
    const { getByRole } = render(
      <ImageButton
        title={'hoge'}
        image={'https://example.com/foo.png'}
        url={'https://example.com/'}
        storage={storage}
      />
    );

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });
});
