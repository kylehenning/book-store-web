<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  tableData: {
    type: Array,
    required: false,
  },
})
const tableHeaders = ref(null);

// Ugly for now
watch(() => props.tableData, () => {
    if (props.tableData?.length > 0) {
        getTableHeaders();
    }
})

onMounted(() => {
    if (props.tableData?.length > 0) {
        getTableHeaders();
    }
})

const getTableHeaders = () => {
    console.log("getting table headers")
    tableHeaders.value = Object.keys(props.tableData[0]);
}

</script>

<template>
    
<div class="relative overflow-x-auto my-10 mx-5" v-if="props.tableData">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3" v-for="(header, index) in tableHeaders" :key="index">
                    {{ header }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(row, index) in tableData" :key="index">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" v-for="(col, index) in row" :key="index">
                    {{ col }}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>