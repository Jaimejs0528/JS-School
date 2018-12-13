/* eslint-disable import/no-unresolved */
import { SERVER_URL} from 'constants/urlConstants';

class AbstractService {

  get({
    endpoint,
    headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    baseUrl = SERVER_URL, 
  }) {
    return this.request({
      baseUrl,
      endpoint,
      method:'GET',
      headers,
    })
  }

  post({
    endpoint,
    headers= {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data = {},
    baseUrl = SERVER_URL, 
  }) {
    return this.request({
      baseUrl,
      endpoint,
      method:'POST',
      headers,
      body: data,
    })
  }

  patch({
    endpoint,
    data = {},
    headers= {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    baseUrl = SERVER_URL, 
  }) {
    return this.request({
      baseUrl,
      endpoint,
      method:'PATCH',
      headers,
      body: data,
    })
  }

  request({
    baseUrl,
    endpoint,
    method,
    headers,
    body = null,
  }) {
    if(body){
      return fetch(`${baseUrl}${endpoint}`,{
        method,
        headers,
        body: JSON.stringify(body)
      });

    } else {
      return fetch(`${baseUrl}${endpoint}`,{
        method,
        headers,
      });
    }
  }
}

export default AbstractService;