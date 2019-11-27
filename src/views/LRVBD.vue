<template>
  <vx-card title="Văn bản đến">
    <div class="cvct-table--container">
      <table class="works__table--content border-collapse">
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Chức năng</th>
        </tr>

        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in VBDListReceive.details">

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
    <div class="vx-row no-gutter justify-end mt-5">
      <div class="vx-col">
        <vs-pagination
          :total="VBDListReceive.total"
          @change="onChangePage()"
          v-model="page"
        ></vs-pagination>
      </div>
    </div>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        page: 1
      }
    },
    computed: {
      ...mapGetters([
        'VBDListReceive',
      ])
    },
    methods: {
      ...mapActions([
        'vbdGetListReceive'
      ]),
      onChangePage () {
        const params = {
          page: this.page,
          size: 15
        }
        this.vbdGetListReceive(params);
      },
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
