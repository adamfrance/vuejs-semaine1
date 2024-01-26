<script>
export default {
  data () {
        return {
            message: null
        }
    },
  methods: {
    send() {
      this.$emit('send', this.message);
    }
  }
}
</script>

<script setup>
import { defineEmits, ref } from  'vue'
const message = ref(null)
const emits = defineEmits(['send'])
emits('send', message.value);
</script>


<template>
  <div>
    <input v-model="message" />
    <button @click="$emit('send', message)">Emit inline
      </button>
  </div>
</template>