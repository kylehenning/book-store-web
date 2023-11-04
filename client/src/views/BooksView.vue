<script setup>
import { onMounted, ref } from 'vue';
import MyTable from '../components/MyTable.vue'

const bookData = ref(null);

onMounted(() => {
    fetch('http://localhost:3001/books', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        bookData.value = response;
    })
})
</script>

<template>

    <h1 class="text-center text-black dark:text-white text-3xl">BOOKS</h1>
    <MyTable :tableData="bookData" v-if="bookData" />

</template>
