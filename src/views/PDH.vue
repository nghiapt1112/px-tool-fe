<template>
  <vx-card title="Phiếu Đặt Hàng">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"><strong>Nhà máy
            A41</strong></td>
          <th colspan="7" class="p-2 border border-solid d-theme-border-grey-light text-center">PHIẾU ĐẶT HÀNG</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">Mẫu số : 3VT2001</td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Phòng vật tư</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('so', $event.target.value)"
              :value="PDHData.so"/>
          </td>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Đơn vị yêu cầu:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PDHData.donViYeuCau"
              :reduce="t => t.name"
              @input="changeData('toSX', $event)"
              :options="PDHComboboxData.to_san_xuat"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Phân xưởng</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PDHData.phanXuong"
              :reduce="t => t.name"
              @input="changeData('phanXuong', $event)"
              :options="PDHComboboxData.phan_xuong"></v-select>
          </td>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              @change="changeData('noiDung', $event.target.value)"
              :value="PDHData.noiDung"/>
          </td>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light"></td>
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
          v-for="(tr, indextr) in PDHData.phieuDatHangDetails"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            {{indextr + 1}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.tenPhuKien"
              @change="changeDetailItem(indextr, 'tenPhuKien', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.tenVatTuKyThuat"
              @change="changeDetailItem(indextr, 'tenVatTuKyThuat', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.kiMaHieu"
              @change="changeDetailItem(indextr, 'kiMaHieu', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.dvt"
              @change="changeDetailItem(indextr, 'dvt', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-right">
            <vs-input
              style="width: 85px"
              size="small"
              class="inputx"
              :value="tr.sl"
              @change="changeDetailItem(indextr, 'sl', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              style="width: 220px"
              size="small"
              label="name"
              :value="tr.mucDichSuDung"
              :reduce="t => t.name"
              @input="changeData('mucDichSuDung', $event)"
              :options="PDHComboboxData.ten_vktbkt"></v-select>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.phuongPhapKhacPhuc"
              @change="changeDetailItem(indextr, 'phuongPhapKhacPhuc', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.soPhieuDatHang"
              @change="changeDetailItem(indextr, 'soPhieuDatHang', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.nguoiThucHien"
              @change="changeDetailItem(indextr, 'nguoiThucHien', $event.target.value)"/>
          </td>
        </tr>
        <tr>
          <td colspan="10" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-button
              color="success"
              size="small"
              icon-pack="feather"
              icon="icon-plus"
              @click="addDetail"
            ></vs-button>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PDHData.ngayThangNamTPKTHK || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PDHData.ngayThangNamTPVatTu || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PDHData.ngayThangNamNguoiDatHang || ' Ngày ... tháng ... năm ...'}}
          </td>
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
          <th class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <td  class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PDHData.noiNhan"
              :reduce="t => t.name"
              @input="changeData('noiNhan', $event)"
              :options="PDHComboboxData.noi_nhan"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <span class="text-warning">Chờ phê duyệt</span>
          </th>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <span class="text-danger">Không phê duyệt</span>
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <span class="text-success">Đã phê duyệt</span>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        </tbody>
      </table>
    </div>
    <vs-button
      class="mr-4 float-right mt-3"
      color="danger"
      icon-pack="feather"
      icon="icon-trash"
      @click="openDeleteConfirm"></vs-button>
    <vs-button class="mr-4 mt-3" @click="onSubmit">Lưu</vs-button>
    <vs-button class="mt-3" type="border" color="warning">Reset</vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'
  import { mapGetters, mapActions } from 'vuex';

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
    computed: {
      ...mapGetters([
        'PDHData',
        'PDHComboboxData'
      ]),
    },
    methods: {
      ...mapActions([
        'pdhUpdateData',
        'pdhSaveData'
      ]),
      changeData (fieldName, value) {
        const data = Object.assign({}, this.PDHData);
        data[fieldName] = value;
        this.pdhUpdateData(data);
      },
      changeDetailItem (index, fieldName, value) {
        const item = Object.assign({}, this.PDHData.phieuDatHangDetails[index]);
        const phieuDatHang = Object.assign([], this.PDHData.phieuDatHangDetails);
        item[fieldName] = value;
        phieuDatHang[index] = item;
        this.changeData('phieuDatHangDetails', phieuDatHang);
      },
      addDetail () {
        const phieuDatHang = Object.assign([], this.PDHData.phieuDatHangDetails);
        phieuDatHang.push({})
        this.changeData('phieuDatHangDetails', phieuDatHang);
      },
      onSubmit () {
        const data = Object.assign({}, this.PDHData);
        this.pdhSaveData(data).then(() => {

        }).catch(()=> {
          this.showError = true;
        })
      },
      openDeleteConfirm() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Đặt Hàng này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete() {
        this.$vs.notify({
          color: 'danger',
          title: 'Xóa Phiếu Đặt Hàng',
          text: 'Xóa Phiếu Đặt Hàng thất bại.'
        })
      },
    }
  }
</script>

<style lang="scss">
  .table--container {
    font-size: .8em;
    overflow: auto;
  }

  .invoice__table--content {
    td {
      &:nth-child(1), &:nth-child(6) {
        min-width: 100px;
      }

      /*&:nth-child(2) {*/
      /*  min-width: 190px;*/
      /*}*/
    }
  }
</style>
