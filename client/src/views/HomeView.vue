<script setup>
import MyTable from '../components/MyTable.vue';
import { ref } from 'vue';

const tableData = ref([]);
</script>

<template>

    <h1 class="text-center">Hello World!</h1>
    <MyTable class="m-10" :tableData="tableData" />

</template>
