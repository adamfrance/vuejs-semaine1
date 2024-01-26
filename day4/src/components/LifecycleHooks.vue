<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, n) in messages" :key="n">
        {{ item }}
        <button @click="deleteMessage(item)">Delete</button>
      </li>
    </ul>

    <strong
      >Ajoutez un nouvel élément dans le tableau list et enregistrez-le lors de
      l'exécution de localhost dans Prévisualisez les hooks de
      destruction</strong
    >
  </div>
</template>

<script setup>
import { useMessages } from "@/hooks/useMessages";
const { messages, deleteMessage, addMessage } = useMessages();
</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;
  margin-top: 10px;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
