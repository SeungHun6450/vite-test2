import { createStore } from 'vuex'
import message from './message'
import count from './count'

export default createStore({
  modules: {
    // 모듈화로 분리 index.js에서가 아닌 나눠서 작성
    message,
    count
  }
})
