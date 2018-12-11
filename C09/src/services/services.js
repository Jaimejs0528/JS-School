/* eslint-disable import/no-unresolved */
import { NOT_CONNECTION } from 'utils/constants';
import { SERVER_URL, BOOKS_BASE } from 'constants/index';

  // Make a request to server
  export const queryRequest = (endpoint = '', data = null) => {
    const urlBase = `${SERVER_URL}${BOOKS_BASE}`;

    const consumeService = async (endpointService = '') => {
      let response;
      // WHEN IS A LOAN
      if (endpointService.split('/')[0] === 'lends') {
        response = await fetch(`${urlBase}${endpointService}`,
        //Is POST when get loan Books, and PATCH when is a new loan
        {
          method:`${data ? 'PATCH' : 'POST'}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: `${data ? JSON.stringify(data) : '{}'}`,
        });
      }
      // ALL OTHER REQUESTS
      else {
        response = await fetch(`${urlBase}${endpointService}`, {
          method:'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,

          },
        });
      }
      return response.json();
    };

    // Fetch data from server
    const result = consumeService(endpoint).then((response) => {
      return response
    }).catch(() => NOT_CONNECTION);

    return result;
  }

export default this;