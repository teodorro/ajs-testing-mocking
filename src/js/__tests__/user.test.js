import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 123,
  });

  const res = getLevel(456);

  expect(res).toBe('Ваш текущий уровень: 123');
});

test('should call loadUser once', () => {
  fetchData.mockReturnValue({
    status: 'false',
    level: 123,
  });

  const res = getLevel(456);

  expect(res).toBe('Информация об уровне временно недоступна');
});
