<template>
  <div>
    <h1>Cycles de vie</h1>
    <ul>
      <li v-for="(item, n) in list" :key="n">
        {{ item }} <button @click="deleteItem(item)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche",
        "janvier",
        "février",
        "mars",
      ],
    };
  },
  methods: {
    deleteItem(value) {
      this.list = this.list.filter((item) => item !== value);
    },
  },
  beforeCreate() {
    alert("beforeCreate: la data est statique");
  },
  created() {
    alert("crated: data et events ok mais pas de DOM");
  },
  beforeUpdate() {
    alert("beforeUpdate: nous savons quil y a une update et avons la data");
  },
  updated() {
    alert('DOM réactualisé après votre click du OK')
  },
};
</script>
