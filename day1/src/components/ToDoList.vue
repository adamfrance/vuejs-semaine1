<template>
  <div>
    <h2>Liste</h2>
    <div>
      <input
        placeholder="Entrez un item"
        v-model="input"
        @keyup.enter="addItem"
        ref="input"
      />
      <button @click="addItem">Add Item</button>
    </div>
    <ul v-if="shoppingList">
      <li v-for="(item, i) in shoppingList" :key="i">
        <span>{{ item }}</span>
        <button @click="deleteItem(i)">Remove</button>
      </li>
    </ul>
    <br />
    <button @click="deleteAll">Delete All</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      shoppingList: [],
    };
  },
  methods: {
    addItem() {
      if (!this.input) return;
      this.shoppingList.push(this.input);
      this.input = "";
      this.$refs.input.focus();
      console.log(this.shoppingList);
    },
    deleteItem(i) {
        if ( i < 0 || i > this.shoppingList.length) return;
      this.shoppingList = this.shoppingList.filter(
        (item, index) => index !== i
      );
    },
    deleteAll() {
        this.shoppingList = [];
    }
  },
};
</script>
