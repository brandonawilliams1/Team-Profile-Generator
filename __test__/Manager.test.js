const Manager = require('../team/Manager');

test('add Manager office number', () => {
  const manager = new Manager('brandon', 1, 'email@email.com', 10);

  expect(manager.officeNumber).toBe(10);
});

test('getOfficeNumber', () => {
  const manager = new Manager('brandon', 1, 'email@email.com', 10);

  expect(manager.getOfficeNumber()).toBe(10);
});

test('getRole', () => {
  const manager = new Manager('brandon', 1, 'email@email.com', 10);

  expect(manager.getRole()).toBe('Manager');
});