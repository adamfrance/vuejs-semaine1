<template>
  <div id="app">
    <p>Message: {{ parentMessage }}</p>
    <MessageEditorEnfant @send="ParentMessage = $event" />
    <button @click="parentMessage = null">Reset</button>
  </div>
</template>
<script>
import MessageEditorEnfant from './components/MessageEditorEnfant.vue'
export default {
  components: {
    MessageEditorEnfant
  },
  data() {
        return {
            parentMessage: null
        }
    },
  methods: {
    updateParentMessage(newMessage) {
      this.parentMessage = newMessage
    }
  }
}
</script>

