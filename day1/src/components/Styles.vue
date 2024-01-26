<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "composant liste",
      subtitle: "sous liste",
      items: ["item 1", "item 2", "item 3"],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/typography.scss";
h1 {
    font-size: 50px;
    color: $color-blue;;
}
</style>
