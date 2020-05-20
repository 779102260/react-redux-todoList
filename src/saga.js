import { all, put, delay, takeEvery} from 'redux-saga/effects'

// 异步action

// worker 操作后，在触发原action
function* addTodoAsync(action) {
  yield delay(1000)
  console.log(888)
  yield put({...action, type: 'ADD_TODO'})
}

// wather 创建另一个action，代替原action
function* watchAddTodoAysnc() {
  yield takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}

export default function* () {
  yield all([
    watchAddTodoAysnc()
  ])
}