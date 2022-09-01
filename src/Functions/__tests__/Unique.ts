import { unique } from '../Unique';

test('remove duplicate element', () => {
  const input = ['A', 'B', 'AA', 'B'];
  const expected = ['A', 'B', 'AA'];
  expect(unique(input)).toStrictEqual(expected);
});
