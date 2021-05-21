<template>
  <q-page class="flex" padding>
    <div class="container">
      <div class="form">
        <q-input
          class="inputEqp"
          outlined
          v-model="form.equipamento"
          label="Equipamento"
        />

        <q-select
          class="selectTipoEqp"
          outlined
          v-model="form.tipoEquipamento"
          label="Tipo do equipamento"
          :options="TipoEquipamento"
        />

        <q-btn
          class="btn"
          color="primary"
          label="Cadastrar"
        />

      </div>

     
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    data(){
      return{
        form:{
          equipamento:'',
          tipoEquipamento:''
        },
        TipoEquipamento:[
          'Equipamento 1',
          'Equipamento 2',
          'Equipamento 3',
          'Equipamento 4'
        ],
        
      }
    }
  }
</script>

<style scoped>
  .container{
    margin-left: 25%;
  }

  .form{
    display: flex;
    margin-bottom: 50px;
  }

  .inputEqp{
    width: 250px;
    margin-right: 15px;

  }

  .selectTipoEqp{
    width: 250px;
    margin-right: 15px;
  }

  .table{
    width: 800px;
  }
</style>
