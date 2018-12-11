import { SERVER_URL} from 'constants/index';

class AbstractService {

  get({
    endpoint,
    headers = {
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
      method:'GET',
      headers,
      body: data,
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
    body = {},
  }) {
    return fetch(`${baseUrl}${endpoint}`,{
      method,
      headers,
      body: JSON.stringify(body)
    });
  }
}

export default AbstractService;