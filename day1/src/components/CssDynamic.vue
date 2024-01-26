<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  data() {
    return {
      title: "Liaison avec v-bind",
      headingStyles: {
        marginTop: 10,
        textAlign: "center",
        color: "#4fc08d",
      },
    };
  },
};
</script>
<style>
h1 {
  margin-top: v-bind(`${headingStyles.marginTop + 5}px`);
  text-align: v-bind(headingStyles.textAlign);
  color: v-bind(headingStyles.color);
}
</style>
