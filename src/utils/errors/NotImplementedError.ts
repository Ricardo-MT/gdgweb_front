class NotImplementedError extends Error {
  constructor() {
    super('Not implemented error');
    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }
}

export default NotImplementedError;
