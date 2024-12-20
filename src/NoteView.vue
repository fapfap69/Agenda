<template>
    <h3>{{ titolo }}</h3>
    <button @click="$emit('incrDiUno', 1)">Incr di 1</button>
    <input type="text" v-model="var1" />
</template>

<script>
export default {
  name: "ViewNote",
};

const var1 = "default";
const titolo = "Titolone";

</script>

<script setup>
    import { ref, reactive, defineComponent, onMounted, computed, watch } from 'vue'

    // Chiamata al montaggio 
   // onMounted(() => { console.log("Mounted hook called"); });

  // Property con bind a due vie
  //const var1 = defineModel('var1', { required: true });

  // proprieta
  //  const props = defineProps({ proOne: String, default: "Popone" }); // or const props = defineProps(['pro1'])

    // eventi
  //  const emit = defineEmits(['incrDiUno']);

    // metodi
  //  function getParam(param) { return param; }

    // Watch function
  //  watch(() => props.proOne, () => { console.log("proOne value changed");

    // Variabili calcolate
  //  const isEmpty = computed(() => { return props.proOne === ""; });

    // comunicazione dati
    // provide('key', count) -> manda info key ai figli
    // const message = inject('message') -> intercetta dati che provengono dal genitore
    

//});


</script>

<style>

</style>