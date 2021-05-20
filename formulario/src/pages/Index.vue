<template>
  <q-page class="container bg-grey-10" padding>
    <p class="text-h4">Formulário</p>
      <q-form
        @submit="onSubmit"
		@reset="onReset"
        class="row q-col-gutter-lg"
		ref="myForm"
		>
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
		:rules="[
			val => val && val.length > 0 || 'Nome obrigatorio'
		]"
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
		  :rules="[
			val => val !== null && val != '' || 'Idade obrigatoria',
			val => val > 0 && val < 100 || 'Coloque uma Idade Real'
		]"
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
		  :rules="[
		  	val => val && val.length > 0 || 'E-mail obrigatorio'
		  ]"
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
		  :rules="[
		  	val => val && val.length > 0 || 'Telefone obrigatorio',
			val => val.length === 11 || 'Coloque um telefone real'
		  ]"
        >
          <template v-slot:prepend>
            <q-icon name="phone"/>
          </template>
        </q-input>

    <!--SELECT-->
    <q-select
      outlined
      rounded
      dark
      v-model="form.tipoPessoa"
      :options="optionsTipoPessoa"
      label="Tipo de pessoa"
      class="col-md-12 col-sm-12 col-xs-12"
      emit-value
      map-options
      :rules="[
        val => val && val.length > 0 || 'Tipo de Pessoa obrigatorio'
      ]"
     />

  <!--RADIO BUTTON-->

      <q-option-group
        dark
        label="Sexo"
        :options="optionsSexo"
        type="radio"
        v-model="form.sexo"
        class="col-md-12 col-sm-12 col-xs-12 text-white"

      />
    
  <!--INPUT PASSWORD-->
		<q-input
      label="Password"
			v-model="form.password"
			:type="form.isPwd ? 'password': 'text'"
			outlined
      rounded
      dark
      color="deep-purple"
      class="col-md-12 col-sm-12 col-xs-12"
		 >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
    </q-input>

    <!--BUTTONS-->
		<div class="col-12">
			<q-btn
				label="Cadastrar"
				type="submit"
				color="primary"
				class="float-right"
			/>

			<q-btn
				label="Resetar"
				type="submit"
				color="primary"
				class="float-left"
			/>
		</div>

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
        telefone:'',
		    password: '',
      	isPwd: true,
        tipoPessoa:'',
        sexo:'O',
      },

      optionsTipoPessoa:[
       {label:'Pessoa Física', value:'PF'},
       {label:'Pessoa Jurídica', value:'PJ'}
      ],

      optionsSexo:[
        {label:'Feminino', value:'F'},
        {label:'Masculino', value:'M'},
        {label:'Outro', value:'O'}
      ],
    }
  },

  methods:{
    onSubmit(){
		this.$q.notify({
			message:'Cadastro realizado com sucesso!',
			color:'positive',
			icon:'check_circle_outline'
		}),
		this.onReset()

    },

	async onReset(){
		await this.resetForm()
		this.$refs.myForm.resetValidation()
	},

	async resetForm(){
		this.form = {
			nome:'',
			idade:null,
			email:'',
			telefone:'',
			password: '',
			isPwd: true,
      tipoPessoa:'',
      sexo:''
    }
	}
  }
}
</script>
