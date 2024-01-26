<template>
  <input v-model="firstName" placeholder="prénom" />
  <input v-model="lastName" placeholder="nom de famille" />
  <input @keyup.enter="addToLanguageList" placeholder="Ajouter une langue" />
  <h3 class="output">
    {{ fullName }}
  </h3>
  <p>Langages ({{ numberOfLanguages }}): {{ languages.toString() }}</p>
  <div>
    <input type="text" v-model="searchTerm" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
const firstName = ref("");
const lastName = ref("");
const languages = reactive([]);
const addToLanguageList = (event) => {
  if (!event.target.value) return;
  languages.push(event.target.value);
  event.target.value = "";
};
const fullName = computed(
  ()=> `${firstName.value} ${lastName.value}`
);
const numberOfLanguages = computed(() => languages.length);
const searchTerm = ref('');
const searchTermWatcher = watch(
  searchTerm,
  (newValue, oldValue) => console.log(
    `Search term changed from ${oldValue} to ${newValue}`
  )
);
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
}
</style>
