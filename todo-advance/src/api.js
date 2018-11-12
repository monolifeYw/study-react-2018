import axios from 'axios';
const API_KEY = 'a95045330d2c32eabd568f273709ee39';
export const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function* fetcher(apiURL, reqDatas = {}) {
  console.log('fetcher', apiURL, reqDatas);
  const url = `${apiURL}&q=london,us`;
  return yield axios.get(url, reqDatas)
  .then(res => {
    console.log('[axios]', res);
    return res;
  })
  .catch(error => {
    console.log('[axios]', error);
    throw new Error('ajax error');
  });
}
