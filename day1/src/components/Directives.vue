<template>
    <div>
        <h1 v-show="false" v-once v-text="text"></h1>
        <h2 v-show="true" v-html="html"></h2>
        <a
        :href = "link.url"
        :target = "link.target"
        :tabindex = "link.tabindex"
        >{{ link.title }}</a>
    </div>
</template>

<script setup>
const text = 'Texte de la directive'
const html = 'Insertion<b> HTML</b> dans mon h2'
const link = {
    title: "Accueil",
    url: "https://monsite.com",
    tabindex: 1,
    target: '_blank'
}
</script>

