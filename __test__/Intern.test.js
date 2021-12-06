const Intern = require('../team/Intern');

test('add Intern school', () => {
  const intern = new Intern('Omar', 1, 'o@email.com', 'UC Berkeley');

  expect(intern.school).toBe('UC Berkeley');
});

test('getSchool', () => {
  const intern = new Intern('Omar', 1, 'o@email.com', 'UC Berkeley');

  expect(intern.getSchool()).toBe('UC Berkeley');
});

test('getRole', () => {
  const intern = new Intern('Omar', 1, 'o@email.com', 'UC Berkeley');

  expect(intern.getRole()).toBe('Intern');
});