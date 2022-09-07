/**
 * @jest-environment jsdom
 */

import * as React from 'react';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
