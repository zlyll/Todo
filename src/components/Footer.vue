<template>
    <footer class="footer">  
        <span class="todo-count">  
            <strong></strong>{{count}} items left                     
        </span>  
        <ul class="filters">  
            <router-link to="/All" tag="li">All</router-link>
            <router-link to="/Active" tag="li">Active</router-link>
            <router-link to="/Completed" tag="li">Completed</router-link>
        </ul>  
    </footer> 

</template>
<script>
    export default {
        name: "Footer",
        computed:{
            count(){
                return this.$store.state.tasks.filter(t => t.status == 0).length
            }
        }
    }
</script>
