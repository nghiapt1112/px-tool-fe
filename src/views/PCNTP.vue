<template>
  <vx-card title="Phiếu Công Nhận Thành Phẩm">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"><strong>Nhà máy A41</strong></td>
          <th colspan="5" class="p-2 border border-solid d-theme-border-grey-light text-center">
            PHIẾU CÔNG NHẬN THÀNH PHẨM
          </th>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tên sản phẩm:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số PA:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select size="small"></v-select>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Đơn vị thực hiện:</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tổ:</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Đơn vị đặt hàng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số lượng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">ĐVT:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số nghiệm thu được:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td colspan="6" class="p-2 border border-solid d-theme-border-grey-light">&nbsp;</td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">Nội dung thực hiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Kết quả</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Người làm</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Nghiệm thu</th>
        </tr>
        </tbody>

        <tbody>
        <tr
          v-for="(tr, indextr) in listDevices"
          :key="indextr"
        >
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx" style="width: 100%;"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-right">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light">Lao động tiền lương:</td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">Giờ X:</td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">Đồng:</td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI GIAO VIỆC</th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI THỰC HIỆN</th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">TP.KCS</th>
        </tr>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
          </th>
        </tr>
        </tbody>
      </table>
    </div>
    <vs-button
      class="mr-4 float-right mt-3"
      color="danger"
      icon-pack="feather"
      icon="icon-trash"></vs-button>
    <vs-button class="mr-4 mt-3">Lưu</vs-button>
    <vs-button class="mt-3" type="border" color="warning">Reset</vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    components: {
      'v-select': vSelect,
    },
    data () {
      return {
        listDevices: [
          {
            id: 1,
            name: "Vạn điện từ 445",
            detail: "Vỏ thân van",
            code: "3345ty53",
            amount: 1,
            error: "Hỏng ren",
            method: "Bằng mắt",
            person: null,
          },
          {
            id: 1,
            name: "Vạn điện từ 445",
            detail: "Vỏ thân van",
            code: "3345ty53",
            amount: 1,
            error: "Hỏng ren",
            method: "Bằng mắt",
            person: null,
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
  .table--container {
    font-size: .8em;
    overflow: auto;
  }

  .invoice__table--content {
   td {
     &:nth-child(1) {
       min-width: 200px;
     }
   }
  }
</style>
