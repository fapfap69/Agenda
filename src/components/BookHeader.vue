<template>
    <div class="book-header">
    <p>Header</p>
    </div>
</template>

<script>
    export default {
        name: "BookHeader",
    };
</script>

<script setup>
    import { ref, reactive, defineComponent, onMounted, computed, watch } from 'vue'
    // Chiamata al montaggio 
//     onMounted(() => { console.log("Mounted hook called"); });
</script>

<style>
    .book-header {
        height: 1.em;
        background-color: #1d0fe1;
        font-size: .7em;
        text-align: center;
        line-height: 1.em;
    }
</style>