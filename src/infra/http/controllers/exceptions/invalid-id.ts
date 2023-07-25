export class InvalidIdException extends Error {
  constructor() {
    super('Invalid id format');
  }
}
