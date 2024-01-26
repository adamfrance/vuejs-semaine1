<template>
  <h3>Auteur:</h3>
  <p>{{ message.author }}</p>
</template>
<script setup>
import { defineProps } from "vue";
const { message } = defineProps({
  id: {
    default: "",
    type: String,
  },
  message: {
    default: () => ({ author: "" }),
  },
});
</script>
