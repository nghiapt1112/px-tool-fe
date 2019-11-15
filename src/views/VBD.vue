<template>
  <div class="vx-col w-full mb-base">
    <vx-card title="Văn bản đến">
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <v-select
            class="w-1/2"
            placeholder="Người nhận"
            size="small"
            label="name"
            :reduce="t => t.name"
            @input="changeData('noiNhan', $event)"
            :options="VBDComboboxData.chuyen"
          ></v-select>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-textarea class="w-1/2" label="Nội dung"/>
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input type="file" class="w-1/2" label="Files" multiple/>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2">Lưu</vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import vSelect from 'vue-select'

  export default {
    components: {
      'v-select': vSelect,
    },
    data () {
      return {
        showError: false,
      }
    },
    computed: {
      ...mapGetters([
        'VBDData',
        'VBDComboboxData',
        'AppActiveUser'
      ])
    },
    mounted () {
      this.vbdGetNoiNhanById();
    },
    methods: {
      ...mapActions([
        'vbdGetNoiNhanById'
      ]),
      changeData () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .table--container {
    font-size: .8em;
    overflow: auto;
  }

  .invoice__table--content {
    min-width: 1268px;

    td {
      &:nth-child(1), &:nth-child(5) {
        min-width: 100px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
