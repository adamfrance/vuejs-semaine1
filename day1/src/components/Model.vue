import { defineComponent } from '@vue/composition-api';
<template>
  <section>
    <div class="form">
      <label>
        Name
        <input type="text" v-model="name" />
      </label>
      <label>
        Langage préféré
        <select name="langage" v-model="langage">
          <option value="JS">JS</option>
          <option value="Dart">Dart</option>
          <option value="Typescript">Typescript</option>
          <option value="Flutter">Flutter</option>
        </select>
      </label>
    </div>
    <ul class="overview">
      <li><strong>Réponse</strong></li>
      <li>Name: {{ name }}</li>
      <li>Langage: {{ langage }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      langage: "",
    };
  },
};
</script>

<style>
.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}
.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;
}
.overview > li {
  list-style: none;
}
.overview > li + li {
  margin-top: 20px;
}
</style>
