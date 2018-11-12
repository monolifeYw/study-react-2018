// effect
import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  DATALOAD,
  DATALOADCOMPLETE,
  DATALOADFAIL,
  DATALOADBEFORE,
  END_CONNECTION
} from './reducer/ducks';
import * as API from './api';

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


function* fetchData(action) {
  try {
    const datas = yield startFetch(API.fetcher, API.API_URL, {test: 123});
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
  yield takeEvery(DATALOAD, fetchData);
}


export default function* rootSagas() {
  yield all([
    onInit()
  ]);
};
