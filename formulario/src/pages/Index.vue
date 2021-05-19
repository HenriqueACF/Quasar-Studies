<template>
  <q-page class="container bg-grey-10" padding>
    <p class="text-h4">Formulário</p>
      <q-form 
        class="row q-col-gutter-md"
        @submit.prevent.stop="onSubmit">
    <!--INPUT NOME-->
       <q-input 
        outlined 
        rounded
        clearable
        clear-icon="close"
        dark
        v-model="form.nome" 
        color="deep-purple"
        label="nome"
        class="col-md-12 col-sm-12 col-xs-12"
        >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>
        <!--INPUT IDADE-->
        <q-input
          v-model.number="form.idade"
          type="number"
          outlined 
          dark
          rounded
          label="idade"
          color="deep-purple"
          class="col-md-12 col-sm-12 col-xs-12"
        >
           <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>
            <!--INPUT EMAIL-->
        <q-input
          v-model="form.email"
          label="E-mail"
          suffix="@gmail.com"
          outlined 
          rounded
          clearable
          clear-icon="close"
          dark
          color="deep-purple"
          class="col-md-12 col-sm-12 col-xs-12"
          :loading="true"
        >
          <template v-slot:prepend>
            <q-icon name="mails"/>
          </template>
        </q-input>
            <!--INPUT TELEFONE-->
         <q-input
          v-model="form.telefone"
          label="Telefone"
          outlined 
          rounded
          clearable
          clear-icon="close"
          dark
          color="deep-purple"
          class="col-md-12 col-sm-12 col-xs-12"
          mask="(##) #####-####"
          unmasked-value
        >
          <template v-slot:prepend>
            <q-icon name="phone"/>
          </template>
        </q-input>
        </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data(){
    return{
      form:{
        nome:'',
        idade:null,
        email:'',
        telefone:''
      }
    }
  },

  methods:{
    onSubmit(){

    }
  }
}
</script>
