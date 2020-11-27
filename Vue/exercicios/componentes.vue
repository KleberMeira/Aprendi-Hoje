<template>
    <div id="app">
        <h1>Criando Coponente</h1>
        <Cliente/>
        <Cliente/>
        <Cliente/>
        <Cliente/>
        <Cliente/>
    </div>
</template>


<script>

import Cliente from './Cliente'

export default {
    name: 'App',
    components: {
        Cliente
    }
}

</script>



<style scoped>

</style>