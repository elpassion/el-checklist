const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

const ignoreKnownErrors = () => {
  const KNOWN_ERRORS = [new RegExp(/An update to .* inside a test was not wrapped in act/)];

  const realConsoleError = console.error;

  beforeEach(() => {
    console.error = err => {
      KNOWN_ERRORS.forEach(known => {
        if (err.search(known) >= 0) {
          return jest.fn();
        }
      });
      return realConsoleError;
    };
  });

  afterEach(() => {
    console.error = realConsoleError;
  });
};

ignoreKnownErrors();
