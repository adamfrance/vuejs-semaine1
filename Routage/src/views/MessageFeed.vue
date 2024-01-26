<template>
  <div>
    <h2>Message Feed</h2>
    <p v-for="(m, i) in messages" :key="i">
      <RouterLink :to="`/message/${i}`">{{ m.content }}</RouterLink>
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  messages: {
    type: Array,
    default: [],
  },
});
</script>
