import { clearExtremeMargins } from './clearExtremeMargins';

it('returns both vertical and horizontal rules when no params provided', () => {
  const result = clearExtremeMargins();

  expect(result).toEqual(
    expect.objectContaining({
      '&first-child': {
        marginTop: 0,
        marginLeft: 0,
      },
      '&:last-child': {
        marginBottom: 0,
        marginRight: 0,
      },
    }),
  );
});

it('returns only vertical rules when verticalOnly provided', () => {
  const result = clearExtremeMargins({ verticalOnly: true });

  expect(result).toEqual(
    expect.objectContaining({
      '&first-child': {
        marginTop: 0,
      },
      '&:last-child': {
        marginBottom: 0,
      },
    }),
  );
});

it('returns only horizontal rules when horizontalOnly provided', () => {
  const result = clearExtremeMargins({ horizontalOnly: true });

  expect(result).toEqual(
    expect.objectContaining({
      '&first-child': {
        marginLeft: 0,
      },
      '&:last-child': {
        marginRight: 0,
      },
    }),
  );
});
