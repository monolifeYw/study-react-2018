// effect
import {
  put,
  call,
  takeEvery,
  all,
  fork,
  take
} from 'redux-saga/effects'
import {
  DATALOAD,
  DATALOADCOMPLETE,
  DATALOADFAIL,
  DATALOADBEFORE,
  END_CONNECTION
} from './reducer/ducks';
import * as API from './api';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

/* function* getData(action) {
  console.log('[sagas] getData', action);

  try{
    // const datas = yield call(API.fetcher, '', {test: 123});
    const datas = yield call(API.fetcher, API.API_URL, {test: 123});


    yield put({
      type: DATALOADCOMPLETE,
      datas
    });
  } catch(e) {
    yield errorData(e);
  }
} */

function* startFetch() {
  yield put({
    type: DATALOADBEFORE
  });

  return yield call(...arguments);
}

function* endFetch(action) {
  yield put({
    type: END_CONNECTION
  })

  // console.log('returnAction', returnAction);

  return yield put(action);
}


function* getDta(action) {
  try {
    const datas = yield startFetch(API.getList);
    console.log('[fetchData]', datas, action);
    /* yield put({
      type: DATALOADCOMPLETE,
      datas
    }); */
    yield endFetch({
      type: DATALOADCOMPLETE,
      datas
    });
  } catch (e) {
    console.log('[errorData]', e);
    yield endFetch({
      type: DATALOADFAIL
    });
    // yield errorData(e);
  }
}

/* function* errorData(error) {
  console.log('[errorData]', error);
  yield put({
    type: DATALOADFAIL
  })
} */

function* onInit() {
  console.log('[sagas] onInit');
  yield takeEvery(DATALOAD, getDta);
}

function* onInitTest() {
  try {
    yield call(fetchAll)
  } catch(e) {

  }
}

function* fetchAll() {
  const task1 = yield fork(fetchResource)
  const task2 = yield fork(fetchResource2)

  console.log('task1', task1)
  console.log('task2', task2)

  yield take('DATA_FETCH_RESOURCE1')
  yield take('DATA_FETCH_RESOURCE2')


  console.log('task1', task1)
  console.log('task2', task2)

  // yield put({
  //   type: DATALOADCOMPLETE,
  //   datas: task1.data.data
  // })
  console.log('ddd')
}

function* fetchResource() {
  const datas = yield call(API.getList)

  console.log('[fetchData]', datas)
  yield call(delay, 1000)

  yield put({
    type: 'DATA_FETCH_RESOURCE1',
    datas
  })
}

function* fetchResource2() {
  const datas = yield call(API.getList2)

  console.log('[fetchData]', datas)
  yield call(delay, 1000)

  yield put({
    type: 'DATA_FETCH_RESOURCE2',
    datas
  })
}


export default function* rootSagas() {
  yield all([
    // onInit()
    onInitTest()
  ])
};
