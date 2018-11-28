
import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {'Content-type': 'application/json'}
})

export function* fetcher(url, method='get', data = {}, transformRes = null, extendParams = null) {
  // console.log('fetcher', apiURL, reqDatas)
  // const url = `${apiURL}&q=london,us`
  /* return yield axios.get(url, reqDatas)
  .then(res => {
    console.log('[axios]', res)
    return res
  })
  .catch(error => {
    console.log('[axios]', error)
    throw new Error('ajax error')
  }) */

  /* return yield axiosInstance(url, method, data)
  .then(res => {
    console.log('[axios]', res)
    return res
  })
  .catch(error => {
    console.log('[axios]', error)
    throw new Error('ajax error')
  }) */
  // console.log('[[[axiosInstance]]]', axiosInstance)

  trace({
    url,
    method,
    data,
    transformRes,
    ...extendParams
  })

  return yield axiosInstance({
    url,
    method,
    data,
    transformResponse: axiosInstance.defaults.transformResponse.concat(datas => {
      if (transformRes) {
        return transformRes.call(null, datas)
      }
      return datas
    }),
    ...extendParams
  })
  .then(res => {
    console.log('[axios]', res)
    return res
  })
  .catch(error => {
    console.log('[axios]', error)
    throw new Error('ajax error')
  })
}

function trace(a) {
  //
  console.log('==========', a)
}

export function* getList() {
  return yield fetcher(
    'http://localhost:9090/mock/todo-advance-transfer',
    'get',
    {
      test: 123
    },
    function (datas) {
      // ducks 내 SCEHEMA.LIST 참고
      datas.data = datas.data.map(list => {
        return Object.assign({}, {
          value: list.title,
          isDone: list.finish
        })
      })
      return datas
    },
    {
      param: { a: 1},
      cls: {b: 2}
    }
  )
}
