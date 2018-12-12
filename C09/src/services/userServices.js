/* eslint-disable import/no-unresolved */
import { SIGN_IN_PATH } from 'constants/urlConstants';
import AbstractService from './abstractService';


class UserServices extends AbstractService {
  static signIn(data){
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return this.prototype.post({endpoint: SIGN_IN_PATH, data, headers});
  }
}

export default UserServices;