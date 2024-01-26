<script setup>
import { reactive } from "vue";
const newBook = reactive({
  title: "",
  price: 0,
  currency: "EUR",
  description: "",
});
const books = reactive([]);
const addBook = () => {
  books.push({
    ...newBook,
  });
  newBook.title = "";
  newBook.price = 0;
  newBook.currency = "EUR";
  newBook.description = "";
};
</script>
<template>
  <fieldset :style="{ display: 'flex', flexDirection: 'column' }">
    <label>
      Title:
      <input v-model="newBook.title" />
    </label>
    <label>
      Price:
      <input v-model.number="newBook.price" />
    </label>
    <label>
      Currency:
      <input v-model="newBook.currency" />
    </label>
    <label>
      Description:
      <input v-model="newBook.description" />
    </label>
    <button @click="addBook">Add</button>
  </fieldset>
</template>
