<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}-{{count}}</h3>
        <p><button @click="$store.commit('add',10)">Add</button></p>
        <p><button @click="reduce">reduce</button></p>

        <p><button @click="addAction">Add</button></p>
        <p><button @click="reduceAction">reduce</button></p>
    </div>
</template>

<script>
import store from '../vuex/store.js'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default{
    data(){
        return{
            msg:'Hello Vuex',
        }
    },
    // computed: {
    //     count(){
    //         return this.$store.state.count
    //     }
    // },
    // computed:mapState({
    //     count: state => state.count
    // }),
    computed:{
        ...mapState(['count']),
        ...mapGetters(['count'])
        // count(){
        //     return this.$store.getters.count;
        // }
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store,
}


</script>

