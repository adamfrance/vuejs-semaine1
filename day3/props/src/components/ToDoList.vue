<script>
import User from user.js
export default {
    props: {
        todoListPromise: {
            type: Promise
        },
        currentUser: {
            type: User
        }
    },
    mounted() {
        try {
            this.todoListPromise = fetch('api.com').then(res=> res.json)
        } catch (error) {
            
        }
        
    }
}
</script>

<template>
  <div>
    <div v-if="todosPromise && !error">
      <ToDoList :todoListPromise="todosPromise" :currentUser="currentUser" />
    </div>
    {{ error }}
  </div>
</template>
