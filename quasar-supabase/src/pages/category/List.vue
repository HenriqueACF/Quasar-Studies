<template>
  <q-page padding>
    <div class='row'>
      <q-table
        title="Category"
        :rows="rows"
        :columns="columns"
        row-key="id"
        class="col-12"
      >
        <template v-slot:top>
          <span class="text-6">Category</span>
          <q-space/>
          <q-btn label="Add New" color="primary"/>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-pecil-outline" color="info" dense size="sm">
              <q-tooltip>
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn icon="mdi-delete-outline" color="negative" dense size="sm">
              <q-tooltip>
                Remove
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'actions', align: 'left', label: 'Actions', field: 'actions' }
]

const rows = [
  {
    id: '123',
    name: 'Tenis'
  }
]
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageCategoryList',
  setup () {
    return {
      columns,
      rows
    }
  }
})
</script>
