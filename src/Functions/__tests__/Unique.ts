import { unique } from '../Unique';

test('remove duplicate element', () => {
  const input = ['A', 'B', 'AA', 'B'];
  const expected = ['A', 'B', 'AA'];
  expect(unique(input)).toStrictEqual(expected);
});

test('remove duplicate elements', () => {
  const input = ['A', 'B', 'AA', 'B', 'AA', 'A', 'C'];
  const expected = ['A', 'B', 'AA', 'C'];
  expect(unique(input)).toStrictEqual(expected);
});

test('remove duplicate elements', () => {
  const input = ['A', 'a', 'A', 'b', 'b', 'C', 'C'];
  const expected = ['A', 'a', 'b', 'C'];
  expect(unique(input)).toStrictEqual(expected);
});
