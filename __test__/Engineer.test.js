const Engineer = require('../team/Engineer');

test('add Engineer GitHub Account', () => {
  const engineer = new Engineer('test', 1, 'test@email.com', 'test@email.com');

  expect(engineer.github).toBe('test@email.com');
});

test('getGitHub', () => {
  const engineer = new Engineer('test', 1, 'test@email.com', 'test@email.com');

  expect(engineer.getGitHub()).toBe('test@email.com');
});

test('getRole', () => {
  const engineer = new Engineer('test', 1, 'test@email.com', 'test@email.com');

  expect(engineer.getRole()).toBe('Engineer');
});