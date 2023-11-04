<script setup>
import MyTable from '../components/MyTable.vue';
import { ref } from 'vue';

const tableData = ref(null);

// Author Requests
const getAuthorsAndBookTotals = () => {
    fetch('http://localhost:3001/authorsAndBookTotals', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

const getAuthorsBookPriceTotal = () => {
    fetch('http://localhost:3001/authorsBookPriceTotal', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

const getAuthorWithMostBooksAndPriceTotal = () => {
    fetch('http://localhost:3001/authorWithMostBooksAndPriceTotal', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

// Book Requests
const getBooksByCost = () => {
    fetch('http://localhost:3001/booksByCost', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

const getBookGenres = () => {
    fetch('http://localhost:3001/bookGenres', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

const getAboveAveragePoetryBooks = () => {
    fetch('http://localhost:3001/aboveAveragePoetryBooks', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

const getBookPublishers = () => {
    fetch('http://localhost:3001/bookPublishers', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}

const getMostPublishedYear = () => {
    fetch('http://localhost:3001/mostPublishedYear', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(async (res) => {
        const response = await res.json();
        tableData.value = response;
    })
}
</script>

<template>

    <h1 class="text-center text-black dark:text-white text-2xl">Select a button to run a unique query!</h1>
    <div class="flex justify-center flex-wrap m-10">
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getAuthorsAndBookTotals">Get Authors And Book Totals</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getAuthorsBookPriceTotal">Get Authors Book Price Totals</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getAuthorWithMostBooksAndPriceTotal">Get Author With Most Books And Price Total</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getBooksByCost">Get Books By Cost</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getBookGenres">Get Book Genres</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getAboveAveragePoetryBooks">Get Above Average Poetry Books</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getBookPublishers">Get Book Publishers</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="getMostPublishedYear" >Get Most Published Year</button>
    </div>
    <MyTable :tableData="tableData" />

</template>
