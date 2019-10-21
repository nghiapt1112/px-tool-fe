<template>
  <vx-card title="Phiếu Đặt Hàng">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"><strong>Nhà máy
            A41</strong></td>
          <th colspan="7" class="p-2 border border-solid d-theme-border-grey-light text-center">Phiếu đặt hàng</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">Mẫu số : 3VT2001</td>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">Phòng vật tư</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">Số:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx" style="width: 150px"/>
          </td>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">Đơn vị yêu cầu:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Phân xưởng</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td colspan="10" class="p-2 border border-solid d-theme-border-grey-light">&nbsp;</td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên phụ kiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên vật tư kỹ thuật</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ký mã hiệu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">ĐVT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">SL</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Mục đích sử dụng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Phương pháp khắc phục</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số phiếu đặt hàng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Người thực hiện</th>
        </tr>
        </tbody>

        <tbody>
        <tr
          v-for="(tr, indextr) in listDevices"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            {{indextr + 1}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input size="small" class="inputx" style="width: 150px"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-right">
            <vs-input size="small" class="inputx" style="width: 50px"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019</td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019</td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019</td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic"></td>
        </tr>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TP KTHK</th>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TP VẬT TƯ</th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI ĐẶT HÀNG</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-upload></vs-upload>
          </th>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-upload></vs-upload>
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-upload></vs-upload>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        </tbody>
      </table>
    </div>
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
    /*width: auto;*/
  }
</style>
