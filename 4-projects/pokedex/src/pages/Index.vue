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
      search: "pikachu",
    };
  },

  async beforeMount() {
    await this.getPokemon();
  },

  methods: {
    getPokemon() {
      api
        .get(`/pokemon/${this.search}/`)
        .then((response) => {
          this.name = response.data.name;
          this.url = response.data.sprites.other.dream_world.front_default;
          this.triggerPositive()
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
