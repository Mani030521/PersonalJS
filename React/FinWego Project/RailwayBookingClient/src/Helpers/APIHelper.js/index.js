import axios from 'axios';

const URL = `https://railway-booking-server.herokuapp.com/`;

export default function apiHelper(method, api, payload = null) {
  return axios({
    method: method,
    url: `${URL}${api}`,
    data: payload,
  });
}
