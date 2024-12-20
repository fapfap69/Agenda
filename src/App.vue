<template>
    <BookView :views="defviews"/>
</template>

<style>
</style>

<script>
    import {ref, watch, computed, reactive, onMounted } from 'vue'

    // read the configuration
    import jBookConf from '../bookconfig.json'

    export default {
    setup() {

        var defviews = [];
        var jConf = jBookConf; 
        defviews = jConf['VIEWS'];
       
        return {
            defviews
        }
    }

    }
</script>


