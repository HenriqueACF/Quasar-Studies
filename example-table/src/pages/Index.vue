<template>
  <q-page >
    <div class="row">
      <q-table
        title="Treats"
        :data="posts"
        :columns="columns"
        row-key="name"
        class="col"
        separator="cell"
        selection="single"
        :selected.sync="selected"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            
            <q-btn
              icon="create"
              color="primary"
              size="sm"
              class="q-ml-sm"
              @click="editPost(props.row)"
            />

            <q-btn
              icon="delete"
              color="negative"
              size="sm"
              @click="deletePost(props.row)"
            />

           
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data(){
    return{
      columns: [
        {
          name: 'id',
          label: 'Id Post',
          field:'id',
          align: 'left',
          sortable: true
        },
        {
          name:'title',
          label:'Title',
          field:'title',
          align:'left',
          sortable: true
        },
        {
          name:'action',
          label:'Actions',
          field:'actions',
          align:'center',
          sortable: true
        }
      ],
      posts:[]
    }
  },
  mounted(){
    this.getPosts()
  },

  methods:{
    getPosts(){
      this.$axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
          this.posts = res.data
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    editPost(idPost){
      console.log(idPost)
    },
    deletePOst(idPost){
      console.log(idPost)
    }
  }
}
</script>
