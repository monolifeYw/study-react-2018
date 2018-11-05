import axios from 'axios';

const API_KEY = 'a95045330d2c32eabd568f273709ee39';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WHETHER = 'FETCH_WHETHER';

export function fetchWhether(city) {
  const url = `${API_URL}&q=${city},us`;
  const request = axios.get(url); // promise 반환

  console.log('request : ', request);

  return {
    type: FETCH_WHETHER,
    payload: request // promise 가 payload 의 property 로 전달
  };
}
