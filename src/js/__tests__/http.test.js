import fetchData from '../http';

test('fetchData throws', () => {
  expect(() => fetchData(123)).toThrow('Mock this!');
});
