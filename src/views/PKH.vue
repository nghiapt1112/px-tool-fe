<template>
  <vx-card title="Phiếu Kiểm Hỏng">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <!--        <colgroup>-->
        <!--          <col width="5%">-->
        <!--          <col width="10%">-->
        <!--          <col width="15%">-->
        <!--          <col width="10%">-->
        <!--          <col width="10%">-->
        <!--          <col width="10%">-->
        <!--          <col width="10%">-->
        <!--          <col width="10%">-->
        <!--          <col width="10%">-->
        <!--        </colgroup>-->
        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center" colspan="3"><strong>Nhà máy
            A41</strong></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tên VKTBKT:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select size="small" style="width: 150px"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số hiệu:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tờ số:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input-number size="small" value="1"/>
          </td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Phẩn xưởng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select size="small"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nguồn vào:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx" style="width: 150px"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số XX:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input size="small" class="inputx"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số tờ:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input-number size="small" value="2"/>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tổ sx:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select size="small"></v-select>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">Công đoạn: KIỂM HỎNG CHI TIẾT</td>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light">&nbsp;</td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tên phụ kiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên linh kiện, chi tiết kiểm hỏng
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ký hiệu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">SL</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Dạng hư hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Phương pháp kiểm hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Người kiểm hỏng</th>
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
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input size="small" class="inputx"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input size="small" class="inputx"  style="width: 150px"/>
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
        </tr>
        </tbody>

        <tbody>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019</td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019</td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019</td>
        </tr>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">QUẢN ĐỐC</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TRỢ LÝ KT</th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TỔ TRƯỞNG</th>
        </tr>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-upload></vs-upload>
          </th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-upload></vs-upload>
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-upload></vs-upload>
          </th>
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
