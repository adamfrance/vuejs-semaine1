<script setup>
import { ref } from "vue";
const isLightOnSalon = ref({
  status: false,
  name: "Salon",
});
const toggleLight = () =>
  (isLightOnSalon.value.status = !isLightOnSalon.value.status);
const replaceLight = () => {
  isLightOnSalon.value = {
    status: false,
    name: "Cuisine",
  };
};
</script>

<template>
  <div>Etat de la lumière : {{ isLightOnSalon.status }}</div>
  <div>Nom de la pièce: {{ isLightOnSalon.name }}</div>
  <button @click="toggleLight">Toggle</button>
  <button @click="replaceLight">Replace</button>
</template>
