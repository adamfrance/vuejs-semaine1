<script setup>
const title= 'un texte à insérer'
const isUpperCase = false
const message = ''
const logo = '../assets/vue.svg'
const count = 5
</script> //v-once avec v-text, v-html
<template>
    <div>
        <div v-text="message"></div>
        <h1>{{ isUpperCase ? title.toUpperCase() : title }}</h1>
        <img v-bind:src="logo" />
        <div v-if="count === 2">Deux</div>
        <div v-else-if="count === 3">Trois</div>
        <div v-else>Autre valeur de count</div>
        <div v-show="count === 2">Deux</div>
    </div>
</template>