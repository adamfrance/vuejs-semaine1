<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  items: {
    type: Array,
    requirde: true,
  },
  limit: {
    type: Number,
  },
  offset: {
    Number,
  },
});
const currentWindow = computed(() =>
  props.items.slice(props.offset, props.limit)
);
</script>
