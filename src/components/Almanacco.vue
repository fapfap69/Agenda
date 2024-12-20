<style>
  .alma {
    display: grid;
    height: 100%;
    width: 100%;
    background-color: #622727;
  }

.alma-giorno {
  font-size: 5.1em;
  width: 45%;
  min-height: 60%;
  background-color: #ddd;
  display: flex;
  padding-right: 5px;
  align-items: left;
  justify-content: right;
}

.alma-data {
  font-size: 1.2em;
  min-width: 100%;
  min-height: 20%;
  background-color: #ddd;
  display: flex;
  padding-top: 5px;
  justify-content: center;
}

.alma-settimana {
  font-size: 1.0em;
  min-width: 100%;
  min-height: 15%;
  background-color: #ddd;
  display: flex;
  padding-left: 10px;
  justify-content: left;
}

.alma-santo {
  font-size: 0.8em;
  min-width: 100%;
  min-height: 5%;
  background-color: #ddd;
  display: flex;
  align-items: top;
  justify-content: center;
}
</style>

<template>
    <div class="alma">
      <div class="alma-giorno">{{ giorno }}</div>
      <div class="alma-data">{{ dateestesa }}</div>
      <div class="alma-settimana">{{ settimanaestesa }}</div>
      <div class="alma-santo">{{ santodelgiorno }}</div>
    </div>
</template>

<script >
export default {
  name: "Almanacco",
};



</script>

<script setup>
  import { ref, reactive, defineComponent, onMounted, computed, watch } from 'vue'
  import axios from 'axios';

  //var theDate = ref(new Date());
  let theDate = new Date(); // the core date variable
  
  let anno = 2024;
  let mese = 1;
  let meseNome = "Gennaio";
  let giorno = 1;
  let giornoNome = "Domenica";
  let settimana = 1;


  let santodelgiorno = ref("dd");

    // Chiamata al montaggio 
    //onMounted(() => { setData(theDate); });

    // Property con bind a due vie
    //const var1 = defineModel('nomeVar', { required: true });

    // proprieta
    const props = defineProps({ dataodierna: Date },
                              { giorno: Number, default: 1 },
                              { mese: Number, default: 1 },
                              { anno: Number, default: 2024 },
                              { settimana: Number, default: 1 },
                              { santo: String, default: "S.Stefano" }); // or const props = defineProps(['pro1'])

    // eventi
    //const emit = defineEmits(['incrDiUno']);

    // metodi
    function setData(dataUTC) { 
      
      anno = dataUTC.getFullYear();
      mese = dataUTC.getMonth();
      meseNome = dataUTC.getMonthName();
      giorno = dataUTC.getDate();
      giornoNome = dataUTC.getDayName();
      settimana = dataUTC.getWeek();
      //props['dataodierna'] = dataUTC;
      getSanto(theDate);
      //console.log(">>---x->>"+santo);
      return true;
    }

  // Variabili calcolate
  const dateestesa = computed(() => { 
    return giornoNome+" "+giorno+" "+meseNome; });

  const settimanaestesa = computed(() => { 
    return anno+" settimana "+settimana;});


  function setSantoDelGiorno(response) {
    const apiData = response.data;
    let a = apiData[0];
    santodelgiorno.value = a['nome'];
    return;
  }

  function getSanto(data) {
    const anno = data.getFullYear();
    const mese = data.getMonth()+1;
    const giorno = data.getDate();
    const url = "https://www.santodelgiorno.it/santi.json?data="+anno+"-"+mese+"-"+giorno;
    let apiData = [];
    let nomesanto = '';
    axios.get(url)
      .then(response => { setSantoDelGiorno(response); } )
      .catch(error => {
        console.log("Errore " + error);
        // Handle any errors that occurred during the API request
      });
    //console.log(">>>",nomesanto);
    return;
  }
// https://weather-ydn-yql.media.yahoo.com/forecastrss?location=Bari&format=json&u=c
//https://api.sunrise-sunset.org/json?lat=-29.883333&lng=31.049999");


  setData(theDate);
  
</script>

