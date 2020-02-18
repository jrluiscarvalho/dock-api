export default class ServiceError extends Error {
  constructor(type, data) {
    super(type);
    this.data = data;
  }
}
