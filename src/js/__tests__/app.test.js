import Team from '../app';

test('Method adds a single character "Dune"', () => {
  const team = new Team();

  team.add('Dune');
  expect(team.members).toContain('Dune');
});

test('Method add throws an error if existing character "Dune" is added', () => {
  const team = new Team();

  team.add('Dune');
  expect(() => team.add('Dune')).toThrowError('This hero already exists');
});

test('Method addAll adds several characters', () => {
  const team = new Team();

  team.addAll('Dune', 'Joy', 'Lumos');
  expect(team.members).toContain('Dune');
  expect(team.members).toContain('Joy');
  expect(team.members).toContain('Lumos');
});

test('Method toArray converts set to array', () => {
  const team = new Team();

  team.addAll('Dune', 'Joy', 'Lumos');
  const arr = team.toArray();
  expect(arr).toContain('Dune');
  expect(arr).toContain('Joy');
  expect(arr).toContain('Lumos');
  expect(arr.length).toBe(3);
});
