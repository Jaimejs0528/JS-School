import AbstractService from './abstractService';
import { SIGN_IN_PATH } from 'constants/index';


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