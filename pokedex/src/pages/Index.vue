<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <h2>{{ name }}</h2>
      <q-img :src="url" width="250px" />
    </div>
    <div class="row justify-around full-width">
      <q-input filled v-model="search" label="Digite o nome de um Pokemon" />
      <q-btn color="purple" label="Pesquisar" @click="getPokemon" />
    </div>
    <div class="row justify-between full-width absolute container-arrows">
      <q-icon  
        name="far fa-arrow-alt-circle-left" 
        color="primary"
        class="q-ml-sm cursor-pointer" 
        size="50px"
        @click="getPokemon(id - 1)">
        <q-tooltip>Anterior</q-tooltip>
      </q-icon>
      <q-icon 
        name="far fa-arrow-alt-circle-right" 
        color="primary" 
        class="q-mr-sm cursor-pointer" 
        size="50px"
        @click="getPokemon(id + 1)">
        <q-tooltip>Proxímo</q-tooltip>
      </q-icon>
    </div>
  </q-page>
</template>

<script>
import api from "../services/api";

export default {
  name: "PageIndex",
  data() {
    return {
      name: "",
      url: "",
      id:null,
      search: "pikachu",
    };
  },

  async beforeMount() {
    await this.getPokemon();
  },

  methods: {
    getPokemon(id) {
      api
        .get(id > 0 ? `/pokemon/${id}` : `/pokemon/${this.search}/`)
        .then((response) => {
          this.id = response.data.id;
          this.name = response.data.name;
          this.search = response.data.name;
          this.url = response.data.sprites.other.dream_world.front_default;
        })
        .catch((error) => {
          this.triggerNegative()
        })
    },
    triggerPositive() {
      $q.notify({
        type: "positive",
        position:'top',
        message: 'Pokemon encontrado',
      });
    },

    triggerNegative() {
      $q.notify({
        type: "negative",
        position:'top',
        message: 'Ocorreu um erro, tente novamente',
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
