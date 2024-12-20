<template>
    <div class="book-footer">
    <p>Header</p>
    </div>
</template>

<script>
    export default {
        name: "BookFooter",
    };
</script>

<script setup>
    import { ref, reactive, defineComponent, onMounted, computed, watch } from 'vue'
    // Chiamata al montaggio 
//     onMounted(() => { console.log("Mounted hook called"); });
</script>

<style>
    .book-footer {
        height: 1.em;
        background-color: #1d0fe1;
        font-size: .7em;
        text-align: center;
        line-height: 1.em;
    }
</style>