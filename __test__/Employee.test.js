const Employee = require('../team/Employee');

test('add employee name', () => {
  const employee = new Employee ('test', 1, 'teat@email.com');

  expect(employee.name).toBe('test');
});

test('add employee id', () => {
  const employee = new Employee ('test', 1, 'teat@email.com');

  expect(employee.id).toBe(1);
});

test('add employee email', () => {
  const employee = new Employee ('test', 1, 'teat@email.com');

  expect(employee.email).toBe('teat@email.com');
});

test('getName', () => {
  const employee = new Employee('test', 1, 'teat@email.com');

  expect(employee.getName()).toBe('test');
});

test('getId', () => {
  const employee = new Employee('test', 1, 'teat@email.com');

  expect(employee.getId()).toBe(1);
});

test('getEmail', () => {
  const employee = new Employee('test', 1, 'teat@email.com');

  expect(employee.getEmail()).toBe('teat@email.com');
});

test('getRole', () => {
  const employee = new Employee('test', 1, 'teat@email.com');

  expect(employee.getRole()).toBe('Employee');
});