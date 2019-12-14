<template>
  <vx-card title="Gửi văn bản, giấy tờ">
    <vs-button class="mb-4" @click="$router.push(`vbg/new`)">Thêm mới</vs-button>
    <div class="cvct-table--container">
      <table class="works__table--content border-collapse">
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số VB</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Chức năng</th>
        </tr>

        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in VBDList.details">

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiNhan }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.soPa }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiDung }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-button class="mr-4" size="small" @click="onDetailClick(tr.vbdId)">Chi tiết</vs-button>
            <vs-button class="mr-4" size="small" color="danger" @click="openDeleteConfirm(tr.vbdId)">Hủy</vs-button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
    <div class="vx-row no-gutter justify-end mt-5">
      <div class="vx-col">
        <vs-pagination
          :total="VBDList.total"
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
        'VBDList',
      ])
    },
    methods: {
      ...mapActions([
        'vbdGetList',
        'vbdDeleteById'
      ]),
      onChangePage () {
        const params = {
          page: this.page,
          size: 15
        }
        this.vbdGetList(params);
      },
      onDetailClick (id) {
        this.$router.push(`/vbg/edit?id=${id}`);
      },
      openDeleteConfirm (id) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa bản ghi này?',
          acceptText: 'Đồng ý',
          cancelText: 'Đóng',
          accept: () => {
            this.acceptDelete(id);
          }
        })
      },
      acceptDelete (id) {
        this.vbdDeleteById(id)
          .then(() => {
            this.vbdGetList();
            this.$vs.notify({
              color: 'success',
              title: 'Xóa Bản Ghi',
              text: 'Xóa bản ghi thành công.'
            })
          }).catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Xóa Bản Ghi',
            text: `Xóa bản ghi thất bại. ${e}`
          })
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

    td, th {
      &:nth-child(4) {
        width: 200px;
      }
    }
  }
</style>
