<template>
  <div class="vx-col w-full mb-base">
    <vx-card title="Cập nhật thông tin cá nhân">
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input type="file" class="w-1/2" label="Chữ ký"/>
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input
            class="w-1/2"
            label="Tên dưới chữ ký"
            :value="AppActiveUser.name"
          />
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

  export default {
    data () {
      return {
        showError: false,
      }
    },
    computed: {
      ...mapGetters([
        'TKTDSPData',
        'AppActiveUser'
      ])
    },
    mounted () {
      this.tktdspGetList();
    },
    methods: {
      ...mapActions([
        'tktdspGetList'
      ])
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
