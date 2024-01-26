<template>
  <div>
    <div>
      <h1>Boucle avec tableau</h1>
      <ul>
        <li v-for="(item, index) in interets" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h2>
            {{ item.title }}
          </h2>
          <span>{{ item.description }}</span>
          <ul>
            <li v-for="(str, index) in item.characteristics" :key="index">{{ str }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
        <ul>
            <li v-for="(value, key, index) in cours" :key="key">
            {{ index }}.{{ key }} : {{ value }}
            </li>
        </ul>
    </div>
    <div>
        <div v-for="(value,key) in infos" :key="key">
        {{ key }}: {{ value.toString() }}
        </div>
    </div>
  </div>
</template>

<script setup>
const interets = ["foot", "pas foot", "peutetre foot"];
const items = [
    {
        id: 1,
        title: "Item 1",
        description: "blabla1",
        characteristics: ["1-1", "1-2", "1-3"]
    },
    {
        id: 2,
        title: "Item 2",
        description: "blabla2",
        characteristics: ["1-1", "1-2", "1-3"]
    },
    {
        id: 3,
        title: "Item 3",
        description: "blabla3",
        characteristics: ["1-1", "1-2", "1-3"]
    }
]
const cours = {
    title: 'cours VueJS',
    description: 'une semaine de code',
    prof: 'un formateur'
}
const infos= {
    title: " js",
    subtitle: "vuejs intro",
    items: ["boucles", "méthodes", "data"]
}
</script>

>
