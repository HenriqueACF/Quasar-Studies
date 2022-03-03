<template>
  <q-dialog
    :full-width="$q.platform.is.mobile"
    :model-value="showDialog"
    @before-hide="handleClose"
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">
          Detalhes
        </div>
      </q-card-section>

      <q-card-section v-if="product.img_url">
        <q-img :src="product.img_url" :ratio="4/3" style="min-width: 300px"/>
      </q-card-section>

      <q-card-section>
        <div class="text-h6">
          {{product.name}}
        </div>
        <div class="text-subtitle2">
          {{formatCurrency(product.price)}}
        </div>
        <div class="text-body2" v-html="product.description"></div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          label="Cancel"
          color="primary"
          v-close-popup
        />

        <q-btn
          label="Fazer Pedido"
          icon="mdi-whatsapp"
          color="green-7"
          @click="handleSendWpp"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { formatCurrency } from 'src/utils/format'
import { openURL } from 'quasar'

export default defineComponent({
  name: 'DialogProductDetail',
  props: {
    showDialog: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object
    }
  },
  setup (props, { emit }) {
    const phone = '91981955168'
    const msg = 'Teste envio wpp'
    const handleCloseWpp = () => {
      emit('hideDialog')
    }

    const handleSendWpp = () => {
      const link = encodeURI(`https://api.whatsapp.com/send?phone=55${phone}&text=${msg} - ${props.product.name} - ${formatCurrency(props.product.price)}`)
      openURL(link)
    }
    return {
      formatCurrency,
      handleCloseWpp,
      handleSendWpp
    }
  }
})

</script>
