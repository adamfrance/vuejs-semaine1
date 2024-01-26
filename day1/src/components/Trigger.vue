<script setup>
const triggerAlert = (index) => {
  alert(`${index} a été cliqué`);
};
</script>

<template>
  <div>
    <h1>Liste cliquable</h1>
    <ul>
      <li v-for="index in 5" :key="index">
        <button @click="triggerAlert(index)">Déclenche {{ index }}</button>
      </li>
    </ul>
  </div>
</template>
<style>
button {
    margin: 10px;
}
</style>
