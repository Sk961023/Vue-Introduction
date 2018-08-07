import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count:1
}
const mutations={
    add(state,num){
        state.count+=num
    },
    reduce(state){
        state.count--
    }
}
const getters={
    count:function(state){
        return state.count+=100
    }
}
const actions={
    addAction(context){
        context.commit('add',10)
        setTimeout(()=>{
            context.commit('reduce')
            console.log(123)
        },1000)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
const modelA = {
    state,mutations,getters,actions
}
export default new Vuex.Store({
    modules:{
        a:modelA
    }
})