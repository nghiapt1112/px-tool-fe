<template>
  <vx-card title="Văn bản nhận">
    <div class="cvct-table--container">
      <table class="works__table--content border-collapse">
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Chức năng</th>
        </tr>

        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in VBDListReceive">

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiNhan }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiDung }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-button class="mr-4" size="small" @click="onDetailClick(tr.vbdId)">Chi tiết</vs-button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'VBDListReceive',
      ])
    },
    mounted () {
      this.vbdGetListReceive()
    },
    methods: {
      ...mapActions([
        'vbdGetListReceive'
      ]),
      onDetailClick (id) {
        this.$router.push(`/vbd/edit?id=${id}`);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cvct-table--container {
    font-size: .8em;
    overflow: auto;
  }

  .works__table--content {
    width: 100%;

    td {
      &:nth-child(3) {
        width: 200px;
      }
    }
  }
</style>
