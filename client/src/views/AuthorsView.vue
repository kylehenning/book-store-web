<script setup>
import { onMounted, ref } from 'vue';
import MyTable from '../components/MyTable.vue'

const authorData = ref(null);

onMounted(() => {
    fetch('http://localhost:3001/authors', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        authorData.value = response;
    })
})
</script>

<template>

    <h1 class="text-center text-black dark:text-white text-3xl">AUTHORS</h1>
    <MyTable :tableData="authorData" v-if="authorData" />

</template>
