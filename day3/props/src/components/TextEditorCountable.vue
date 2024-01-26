<script>
import * as Countable from 'countable';
export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    Countable.on(this.$refs.textArea, (count) => (this.count = count));
  },
  beforeUnMount() {
    Countable.off(this.ref$.textArea)
  }
};
</script>

<template>
  <div>
    <textarea ref="textArea" cols="50" rows="7"></textarea>
    <div>
      <ul>
        <li>Paragraphes: {{ count.paragraphs }}</li>
        <li>Phrases: {{ count.sentences }}</li>
        <li>Mots: {{ count.words }}</li>
      </ul>
    </div>
  </div>
</template>
