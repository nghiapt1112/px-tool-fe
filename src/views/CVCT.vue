<template>
  <vx-card title="Văn bản cần giải quyết">
    <div class="cvct-table--container">
      <table class="works__table--content border-collapse">

        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Mã</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Loại</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Trạng thái</th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>

        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in CVCTData">

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ma }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.noiDung }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ MAP_TYPES[tr.type] }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            <span class="text-warning">{{ tr.trangThai }}</span>
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-button class="mr-4" size="small" @click="onDetailClick(tr.requestId, tr.type)">Chi tiết</vs-button>
            <vs-button class="mr-4" size="small" color="danger" @click="openDeleteConfirm">Hủy</vs-button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  const MAP_TYPES = {
    'PHUONG_AN': 'Phương án',
    'KIEM_HONG': 'Kiểm hỏng',
    'DAT_HANG': 'Đặt hàng',
    'CONG_NHAN_THANH_PHAM': 'C.N thành phẩm',
  };
  export default {
    data () {
      return {
        MAP_TYPES,
      }
    },
    computed: {
      ...mapGetters([
        'CVCTData',
      ])
    },
    mounted () {
      this.cvctGetList()
    },
    methods: {
      ...mapActions([
        'cvctGetList',
        'cvctUpdateRequestId'
      ]),
      onDetailClick (id, type) {
        this.cvctUpdateRequestId(id)
        switch (type) {
          case 'DAT_HANG': {
            this.$router.push(`/pdh?id=${id}`);
            break;
          }
          case 'KIEM_HONG': {
            this.$router.push(`/pkh?id=${id}`);
            break;
          }
          case 'PHUONG_AN': {
            this.$router.push(`/pa?id=${id}`);
            break;
          }
          case 'CONG_NHAN_THANH_PHAM': {
            this.$router.push(`/pcntp?id=${id}`);
            break;
          }
        }
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
      &:nth-child(1) {
        width: 100px;
      }

      &:nth-child(5) {
        width: 200px;
      }
    }
  }
</style>
