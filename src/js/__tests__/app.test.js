import GameSaving from '../GameSaving';
import GameSavingLoader from '../app';

test('new GameSaving Test', (done) => {
  const char = new GameSaving(9, 1546300800, {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  });
  const test = new GameSavingLoader();
  test.load().then((result) => {
    expect(result).toEqual(char);
  });
  done();
});
