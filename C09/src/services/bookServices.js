import AbstractService from './abstractService';
import { BOOKS_BASE, CITIES_ENDPOINT, DIGITAL_ENDPOINT, LOANS_ENDPOINT } from 'constants/index';

// Class that collects all the books services
class BookServices extends AbstractService {

  // returns all the books
  static getAllBooks() {
    return this.get({endpoint: BOOKS_BASE});
  }

  // return all books filter by city
  static getBooksByCity(city) {
    const endpoint = `${CITIES_ENDPOINT}${city}`
    return this.prototype.get({endpoint});
  }

  // return all books with digital copy
  static getDigitalBooks() {
    return this.prototype.get({endpoint: DIGITAL_ENDPOINT});
  }

  // return the books loans for the logged user
  static getLoansByUser() {
    return this.prototype.post({endpoint: LOANS_ENDPOINT})
  }

  // Make a lend
  static lendABook(data) {
    return this.prototype.patch({endpoint: LOANS_ENDPOINT, data})
  }
}

export default BookServices;