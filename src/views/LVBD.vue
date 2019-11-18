<template>
  <vx-card title="Văn bản đến">
    <vs-button class="mb-4" @click="$router.push(`vbd/new`)">Thêm mới</vs-button>
    <div class="cvct-table--container">
      <table class="works__table--content border-collapse">
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Files</th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>

        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in VBDList">

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiNhan }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiDung }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a
              v-for="(fileName, indextr) in tr.files"
              :key="indextr"
              class="mr-2"
            >
              {{fileName}}
            </a>
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-button class="mr-4" size="small" @click="onDetailClick(tr.vbdId)">Chi tiết</vs-button>
<!--            <vs-button class="mr-4" size="small" color="danger" @click="openDeleteConfirm">Hủy</vs-button>-->
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
        'VBDList',
      ])
    },
    mounted () {
      this.vbdGetList()
    },
    methods: {
      ...mapActions([
        'vbdGetList',
      ]),
      onDetailClick (id) {
        this.$router.push(`/vbd/edit?id=${id}`);
      },
      openDeleteConfirm () {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa bản ghi này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete () {
        this.$vs.notify({
          color: 'danger',
          title: 'Xóa Bản Ghi',
          text: 'Xóa bản ghi thất bại.'
        })
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
      &:nth-child(4) {
        width: 200px;
      }
    }
  }
</style>
