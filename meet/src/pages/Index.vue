<template>
  <q-page class="row justify-around full-width">
    <div style="width:50%" class="column q-pa-xl justify-center">
      <h3 class="q-ma-none">Video chamadas premium.</h3>
      <h3 class="q-ma-none q-mx-none">Agora gratuita para todos.</h3>

      <span style="font-size:20px; color:#5F6368">Reformulamos o Google Meet, nosso serviço seguro para reuniões de negocios. Agora ela é aberta pra todos!</span>
      <div class="row" style="margin:70px 0px;">
        <q-btn color="secondary" icon="video_call" label="Nova Reunião" class="q-mr-lg" />
        <q-input outlined v-model="text" :dense="dense" label="Digite um código ou link" style="width:300px">
          <template v-slot:prepend>
            <q-icon name="keyboard"/>
          </template>
        </q-input>
      </div>

      <q-separator class="q-mb-xl"></q-separator>
      
      <span style="font-size:18px; color:#5F6368">
        <a href="" style="color:#056B5F; text-decoration:none">Saiba mais</a> sobre o Google Meeet.
      </span>
    </div>
    <div style="width:50%" class="row items-center justify-center">
      <q-card>
        <q-card-section class="my-card">
          <q-img src="../assets/reuniao.png" width="600px"></q-img>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      text:'',
      dense:false
    }
  }
})
</script>

<style lang="scss" scoped>
.my-card{
  .q-img{
    border-radius: 7px;
  }
}
</style>
