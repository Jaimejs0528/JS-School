import AbstractService from './abstractService';

// Class that collects all the books services
class BookServices extends AbstractService {

  // returns all the books
  static getAllBooks(endpoint) {
    return this.get({endpoint});
  }

  // return all books filter by city
  static getBooksByCity(endpoint, city) {
    const finalEndpoint = `${endpoint}/${city}`
    return this.prototype.get({endpoint: finalEndpoint});
  }

  // return all books with digital copy
  static getDigitalBooks(endpoint) {
    return this.prototype.get({endpoint});
  }

  // return the books loans for the logged user
  static getLoansByUser(endpoint) {
    return this.prototype.post({endpoint})
  }

  // Make a lend
  static lendABook(endpoint, data) {
    return this.prototype.patch({endpoint, data})
  }
}

export default BookServices;