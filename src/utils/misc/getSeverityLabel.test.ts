import getSeverityLabel from './getSeverityLabel';

it('responds with proper default severity', () => {
  const result = getSeverityLabel(1500);
  expect(result).toEqual('unknown');
});

it('responds with proper low severity', () => {
  const result = getSeverityLabel(1);
  expect(result).toEqual('low');
});

it('responds with proper medium severity', () => {
  const result = getSeverityLabel(2);
  expect(result).toEqual('medium');
});

it('responds with proper high severity', () => {
  const result = getSeverityLabel(3);
  expect(result).toEqual('high');
});
