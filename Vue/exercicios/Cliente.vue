<template>

    <div id="cliente"> 
        <h2 id="clienteName">Cliente aqui</h2>    
        <h3>Descricao Cliente</h3>
    </div>

    </template>

<script>

import OutroComponente from './OutroComponente'

    export default {
        name: 'Cliente',
        components:{
            OutroComponente
        }
    
}
</script>

<style scoped>
        #cliente{
            color: blue;
            background-color: azure;
        }
        #clienteName{
            width: 500px;
        }

</style>