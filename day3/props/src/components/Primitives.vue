<template>
  <div>
    <span v-for="r in repetitions" :key="r">
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    times: {
        type: [Number, String]
    },
    content: {
        type: [Number, String]
    },
    todoListPromise: {
        type: Promise
    }
  },
  computed: {
    repetitions() {
      return Array.from({ length: this.times });
    },
  },
};
</script>
