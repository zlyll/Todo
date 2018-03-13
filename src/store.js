import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  tasks: []
}
const mutations = {
  addTask(state, taskName) {
    //获取taskId
    let id = state.tasks.length + 1
    //加入task列表前端
    state.tasks.unshift({
      id: id,
      taskName: taskName,
      status: 0 //0:未完成　1:已完成
    })
  },
  setTaskStatus(state, taskId){
    let task = state.tasks.find(t => t.id == taskId)
    task.status = !task.status
  },
  delTask(state, taskId){
    let index = state.tasks.findIndex(t => t.id == taskId)
    state.tasks.splice(index,1)
  }
}
const actions = {
  addTask({commit}, taskName) {
    commit('addTask', taskName)
  },
  setTaskStatus({commit}, taskId){
    commit('setTaskStatus', taskId)
  },
  delTask({commit}, taskId){
    commit('delTask', taskId)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
