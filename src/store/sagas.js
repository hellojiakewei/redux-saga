/**
 *
 * 派发的action  不但可以被reducer 接收到 还可以被sagas 这个文件接收 并且捕获到
 * action的type
 * takeEvery:
 */
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {INIT_LIST_ACTION} from './actionName'
import axios from 'axios'
import {initListAction} from './actionCreate'

function* mySaga() {
    yield takeEvery(INIT_LIST_ACTION,getInitList)
}





function* getInitList() {
    try{
        const res = yield axios.post('/api/user/login')
        const action = initListAction(res.data)
        yield put(action)
    }catch (e) {
        console.log('网络请求失败')
    }
        // axios.post('/api/user/login').then((res)=>{
        //     const action = initListAction(res.data)
        //     store.dispatch(action)
        // })
}

export default mySaga;