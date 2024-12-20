<style >
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
/*
    body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: Arial, sans-serif;
    }
*/
    .header, .footer {
        height: 1.em;
        background-color: #1d0fe1;
        font-size: .7em;
        text-align: center;
        line-height: 1.em;
    }

    .content {
        flex: 1;
        display: flex;
        min-height: 100%;
    }

    .sidebar-left {
        /* writing-mode: vertical-lr; */
        font-size: .8em;
        width: 35px;
        background-color: #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        gap: 48px;
    }

    .sidebar-right {
       /*  writing-mode: vertical-rl; */
        font-size: .8em;
        width: 35px;
        background-color: #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        gap: 45px;        
    }

    .sidebar-left button {
        width: 120px;
        height: 30px;
        margin-top: 20px;
        transform: rotate(-90deg);
        display: inline-block;
        background: linear-gradient(to right, #007BFF, #0056b3);
        border: none;
        border-radius: 9px;
        color: white;
        font-size: 14px;
        /*font-weight: bold;*/
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        cursor: pointer;
        position: relative;
    }

    .sidebar-right button {
        width: 120px;
        height: 30px;
        margin-top: 20px;
        transform: rotate(90deg);
        display: inline-block;
        background: linear-gradient(to right, #007BFF, #0056b3);
        border: none;
        border-radius: 9px;
        color: white;
        font-size: 14px;
        /*font-weight: bold;*/
        clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%);
        cursor: pointer;
        position: relative;
    }

    .sidebar-left button:hover, .sidebar-right button:hover {
        background: linear-gradient(to right, #0056b3, #003f7f);
    }

    .main {
        flex: 1;
        background-color: #eee;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>

<script setup>
    import {ref, watch, computed, reactive, defineAsyncComponent } from 'vue'
    import BookHeader from './components/BookHeader.vue'
    import BookFooter from './components/BookFooter.vue'
    
    const props = defineProps(['views']);
    // produce gli array per la navigazione
    function makeNavArray() {
        var aCon = [];
        props.views.forEach(function (v) {
            let lz = 2000 - v.id;
            let rz = 2000 + v.id;
            if(v.abilitato === true) {
                const p = { "nome" : v.nome, 
                            "file" : v.viewfile, 
                            "isLeft" : true,
                            "isRight" : false,
                            "stile" : { background : "linear-gradient(to right,"+v.colore1+", "+v.colore2+")",
                                        "z-index" : lz },
                            "rstile" : { background : "linear-gradient(to right,"+v.colore1+", "+v.colore2+")",
                                        "z-index" : rz }
                };
                aCon.push(p);
            }
        });
        return aCon;
    };
    // Carica la struttura 
    const defPuls = reactive(makeNavArray());

    // Dobbiamo importare tutte le View
    const capitoliComponents = {}
    const routes = {};
    let dir = "/"; // the root path uRL
    defPuls.map(capitolo => {
        const pageName = capitolo.nome
        capitoliComponents[pageName] = () => import( /* @vite-ignore */  capitolo.viewFile) 
        dir = (pageName === "Diario") ? "/" : pageName.toLowerCase();
        routes[dir] = pageName;
    })
/*    
    const currentPath = ref(window.location.hash)
    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })
    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || NotFound
    })
*/
    const currentChapter = ref(0); // contiene l'indice del capitolo
//    const actualChapterView = computed(() => {
        //console.log(">>>>"+currentChapter.value);
        //console.log(defPuls[1].nome)
        //console.log(capitoliComponents[defPuls[1].nome]);
  //      if(currentChapter.value === -1 ) return;
  //      return capitoliComponents[defPuls[currentChapter.value].nome]; 
   //  });

     const actualChapterView = computed(() => {
        console.log(">>>>"+currentChapter.value);
        return defineAsyncComponent(() => import(/* @vite-ignore */ defPuls[currentChapter.value].file));
    });

</script>

<script>
      
    
    

    function clickTabLeft(idx) {
        this.currentChapter = idx;
        for(let i = 0;i<=idx;i++) {
            this.defPuls[i].isLeft = false;
            this.defPuls[i].isRight = true;
        }
    }
    function clickTabRight(idx) {
        this.currentChapter = idx;
        for(let i = this.defPuls.length - 1; i>=idx;i--) {
            this.defPuls[i].isLeft = true;
            this.defPuls[i].isRight = false;
        }
    }
</script>

<template>
    <BookHeader />
    <div class="content">
        <div class="sidebar-left" >
            <table>
                <tr v-for="(p, idx) in defPuls" style="height:100px">
                    <td >
                        <button v-bind:style="p.stile" 
                            v-on:click="clickTabLeft(idx)"
                            v-show="p.isLeft">{{ p.nome }}</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="main">
            <!-- <Suspense>
                <template #default>
                    <component :is="actualChapterView"></component>
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense> -->
            <KeepAlive>
                <component :is="actualChapterView"></component>
            </KeepAlive>
        </div>
        <div class="sidebar-right">
            <table>
                <tr v-for="(p, idx) in defPuls" style="height:100px">
                    <td >
                        <button v-bind:style="p.rstile" 
                            v-on:click="clickTabRight(idx)" 
                            v-show="p.isRight">{{ p.nome }}</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <BookFooter />



<!--
 
<template>
    <BookHeader />
    <div class="content">
        <div class="sidebar-left" >
            <table>
                <tr v-for="(p, idx) in defPuls" style="height:90px">
                    <td >
                        <button v-bind:style="p.stile" 
                            v-on:click="clickTabLeft(idx)"
                            v-show="p.isLeft">{{ p.nome }}</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="main">Centrale</div>
        <div class="sidebar-right">
            <table>
                <tr v-for="(p, idx) in defPuls" style="height:90px">
                    <td >
                        <button v-bind:style="p.rstile" 
                            v-on:click="clickTabRight(idx)" 
                            v-show="p.isRight">{{ p.nome }}</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <BookFooter />

-->    
</template>