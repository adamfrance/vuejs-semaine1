<template></template>
<script>
import { h } from "vue";
export default {
  props: ["greeting", "who"],
  setup(props) {
    const hasValue = props.greeting && props.who;
    return () =>
      hasValue
        ? h("div", `${props.greeting} ${props.who}`)
        : h(
            "div",
            {
              style: {
                color: "red",
              },
            },
            `Pas assez d'info`
          );
  },
};
</script>
