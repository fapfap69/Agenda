
<style>
  .doppiapagina {
    margin-top: 20;
    display: flex;
    height: 100%;
    width: 100%;
  }
  .paginasx {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #5a9159;
    gap: 0;
  }
  .paginadx {
    width: 100%;
    background-color: #6f6f87;
  }
  .paginasx .colonnasx {
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #251cd1;
  }
  .paginasx .colonnadx {
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #7a8ba3;
  }
  
  .almanacco {
    border: 1px solid #211bd8;
    color:darkslategrey;
    display: flex;
    align-items: top;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-weight: lighter;
    height: 60%;
  }
</style>

<template>
    <div class ="doppiapagina">
      <div name="paginasx" class="paginasx">
        <div name="colonnasx" class="colonnasx">
          <div class="almanacco">
 <!--           Almanacco -->
            <Almanacco :setData="ladata"/>  
          </div>
          <div >
            Diario
<!--            <Diario>Diario</Diario> -->
          </div>
          
        </div>
        <div name="colonnadx" class="colonnadx">
          <div>
            Calendario
<!--            <Calendario>Calendario</Calendario> -->
          </div>
          <div>
            Eventi
<!--            <EventiGiorno>Eventi Giorno</EventiGiorno> -->
          </div>
        </div>
      </div>
      <div name="paginadx" class="paginadx">
        <h3>Pagins delle note</h3>
      </div>
    </div>
</template>

<script>
export default {
  name: "ViewDiario",
};
</script>

<script setup>
    import { ref, reactive, defineComponent, onMounted, computed, watch } from 'vue'
    import Almanacco from './components/Almanacco.vue';
  
    let ladata = Date();

//    setData(Date());
  
    /*

    // Chiamata al montaggio 
    onMounted(() => { console.log("Mounted hook called"); });

    // Property con bind a due vie
    const var1 = defineModel('nomeVar', { required: true });

    // proprieta
    const props = defineProps({ proOne: String, default: "Popone" }); // or const props = defineProps(['pro1'])

    // eventi
    const emit = defineEmits(['incrDiUno']);

    // metodi
    function getParam(param) { return param; }

    // Watch function
    watch(() => props.proOne, () => { console.log("proOne value changed");

    // Variabili calcolate
    const isEmpty = computed(() => { return props.proOne === ""; });

    // comunicazione dati
    // provide('key', count) -> manda info key ai figli
    // const message = inject('message') -> intercetta dati che provengono dal genitore
    

});
*/

</script>
