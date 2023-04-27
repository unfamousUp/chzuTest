// 该文件用于创建Vuex中核心的store

// 引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 用于响应组件中的动作
const actions = {
    // jiaOdd(context, value) {
    //     context.commit('JIAODD', value)
    // },
    // jiaWait(context, value) {
    //     context.commit('JIAWAIT', value)
    // }
}

// 用于操作数据（state）
const mutations = {
    // JIA(state, value) {
    //     state.sum += value
    // },
    // JIAN(state, value) {
    //     state.sum -= value
    // },
    // JIAODD(state, value) {
    //     if (state.sum % 2) {
    //         state.sum += value
    //     }
    // },
    // JIAWAIT(state, value) {
    //     setTimeout(() => {
    //         state.sum += value
    //     }, 500)
    // }
}

// 用于存储数据
const state = {
    students: [],
    row: {},
    pictureRow:{},
    classes: [
        {
            teacherName: '云心',
            name: '计科201',
            isDisabled: false,
            active: 0,
        },
        {

        }
    ],
    teachers: [
        {
            teacherName: '云心',
            institution: "计算机与信息工程学院",
            state: '0', // 未受理
        }
    ]
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})