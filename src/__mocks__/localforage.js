const realModule = jest.requireActual('localforage');

module.exports = {
  ...realModule,
  createInstance: jest.fn().mockReturnValue({
    iterate: jest.fn().mockReturnValue(new Promise(jest.fn())),
    getItem: jest.fn(),
    setItem: jest.fn(),
    keys: jest.fn(),
  }),
};
