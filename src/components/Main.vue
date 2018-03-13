<template>
  <section class="todoapp">  
     <header class="header">
        <h1>todos</h1>
        <input class="new-todo" 
            autofocus="autofocus" 
            autocomplete="off" placeholder="What needs to be done?"
            @keyup.enter="addTask(taskName),taskName=''" v-model="taskName"
            >
    </header> 
      <section class="main" >  
          <ul class="todo-list">  
            <li :class="{todo:true,completed:t.status==1}" v-for="t in tasks">
                <div class="view">
                    <input type="checkbox" :checked="t.status==1" class="toggle" @click="setTaskStatus(t.id)"> 
                    <label>{{t.taskName}}</label> <button class="destroy" @click="delTask(t.id)"></button>
                </div> 
                <input type="text" class="edit"></li>
          </ul>  
      </section>   
      <Footer v-show="$store.state.tasks.length>0"></Footer>
  </section>  
</template>

<script>
    import { mapState,mapMutations,mapActions } from "vuex"
    import Footer from "./Footer"
    export default {
        name: 'Main',
        data () {
            return {
                taskName: ''
            }
        },
        components:{
            Footer
        },
        computed:{
            tasks(){
                //根据路由参数找出state.tasks列表中对应的task
                let status = this.$route.params.status
                let tasks = []
                switch(status){
                    case 'All':     //所有任务
                        tasks = this.$store.state.tasks
                        break
                    case 'Active':  //未完成任务
                        tasks = this.$store.state.tasks.filter(item => item.status == 0)
                        break
                    case 'Completed':   //已完成任务
                        tasks = this.$store.state.tasks.filter(item => item.status == 1)
                        break
                    default:
                        tasks = this.$store.state.tasks
                        break
                }
                return tasks
            }
            //...mapState(['tasks'])
        },
        methods:{
            ...mapActions(['addTask','setTaskStatus','delTask'])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
