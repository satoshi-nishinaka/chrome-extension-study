/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardContainer } from '../CardContainer';

describe('render', () => {
  test('should render component', async () => {
    const { getByRole } = render(<CardContainer />);

    expect(getByRole('article')).toBeInTheDocument();
  });
  test('set title', () => {
    const { getByText } = render(<CardContainer title={'hoge'} />);
    expect(getByText('hoge')).toBeInTheDocument();
  });
});
