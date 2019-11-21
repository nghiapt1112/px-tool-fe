<template>
  <vx-card title="Thống Kê Tiến Độ Sản Phẩm">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">

        <tbody>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">Sản phẩm:
            {{TKTDSPData.sanPham}}
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tiến độ: {{TKTDSPData.tienDo}}%</th>
          <th colspan="13" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr>
          <th colspan="17" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên phụ kiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên linh kiện, chi tiết kiểm hỏng
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ký hiệu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">SL</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Dạng hư hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày kiểm hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Phương pháp khắc phục</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển phòng vật tư</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số phiếu đặt hàng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển KT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số PA</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày ra PA</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển KH</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày phê duyệt</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày hoàn thành</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Xác nhận hoàn thành</th>
        </tr>
        </tbody>
        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in TKTDSPData.details">
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ indextr + 1 }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.tenPhuKien }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.tenLinhKien }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.kyHieu }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.sl }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.dangHuHong }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayKiemHong }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.phuongPhapKhacPhuc }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenPhongVatTu }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pdh?id=' + tr.requestId">{{ tr.soPhieuDatHang }}</a>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenKT }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pa?id=' + tr.requestId">{{ tr.soPA }}</a>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayRaPA }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenKH }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayPheDuyet }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayHoanThanh }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.xacNhanHoanThanh }}
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
      &:nth-child(1) {
        text-align: center;
        min-width: 50px;
      }

      &:nth-of-type(n+2) {
        min-width: 150px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
