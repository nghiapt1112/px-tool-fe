<template>
  <vx-card title="Phiếu Định Mức Lao Động - Vật Tư">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            CỤC KỸ THUẬT PKKQ
          </th>
          <th colspan="12" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            NHÀ MÁY A41
          </th>
          <th colspan="10" class="p-2 border border-solid d-theme-border-grey-light text-center">
            PHIẾU ĐỊNH MỨC LAO ĐỘNG - VẬT TƯ
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            Tờ số
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('toSo', $event.target.value)"
              :value="PDHData.toSo"/>
          </td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            PHÊ DUYỆT
          </th>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Mã số:
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('maSo', $event.target.value)"
              :value="PDHData.maSo"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            Số tờ
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soTo', $event.target.value)"
              :value="PDHData.soTo"/>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center italic">
            {{PDHData.ngayThangNamPheDuyet || ' Ngày ... tháng ... năm ...'}}
          </td>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Sản phẩm (công việc):
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('sanPham', $event.target.value)"
              :value="PDHData.sanPham"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            PĐH
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('pdh', $event.target.value)"
              :value="PDHData.pdh"/>
          </td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            GIÁM ĐỐC
          </th>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Nội dung:
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('noiDung', $event.target.value)"
              :value="PDHData.noiDung"/>
          </th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Nguồn kinh phí:
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('nguonKinhPhi', $event.target.value)"
              :value="PDHData.nguonKinhPhi"/>
          </th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th colspan="14" class="p-2 border border-solid d-theme-border-grey-light text-center">
            I - ĐỊNH MỨC LAO ĐỘNG
          </th>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th colspan="9" class="p-2 border border-solid d-theme-border-grey-light text-center">Nội dung công việc</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Bậc CV</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">ĐM (h)</th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Ghi chú</th>
        </tr>
        </tbody>
        <tbody>
        <tr
          v-for="(tr, indextr) in PDHData.phieuDatHangDetails"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">1</td>
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              :value="tr.noiDungCongViec"
              @change="changeDetailItem(indextr, 'noiDungCongViec', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.bacCV"
              @change="changeDetailItem(indextr, 'bacCV', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.dm"
              @change="changeDetailItem(indextr, 'dm', $event.target.value)"/>
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              :value="tr.ghiChu"
              @change="changeDetailItem(indextr, 'ghiChu', $event.target.value)"/>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th colspan="14" class="p-2 border border-solid d-theme-border-grey-light text-center">
            II - ĐỊNH MỨC VẬT TƯ
          </th>
        </tr>
        <tr>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tên vật tư kỹ thuật</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Ký mã hiệu</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">ĐVT</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">ĐM/ 1SP</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">S.L SP</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tổng nhu cầu</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">Huy động kho</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">Mua ngoài</th>
          <th rowspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Ghi chú</th>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Đơn giá</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">S.Lg</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">T. Tiền</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Đơn giá</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">S.Lg</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">T. Tiền</th>
        </tr>
        </tbody>
        <tbody>
        <tr
          v-for="(tr, indextr) in PDHData.phieuDatHangDetails"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">1</td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 120px"
              size="small"
              class="inputx"
              :value="tr.tenVatTuKyThuat"
              @change="changeDetailItem(indextr, 'tenVatTuKyThuat', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 120px"
              size="small"
              class="inputx"
              :value="tr.kyMaKyHieu"
              @change="changeDetailItem(indextr, 'kyMaKyHieu', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              :value="tr.dvt"
              @change="changeDetailItem(indextr, 'dvt', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              :value="tr.dm1SP"
              @change="changeDetailItem(indextr, 'dm1SP', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              :value="tr.soLuongSanPham"
              @change="changeDetailItem(indextr, 'soLuongSanPham', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              :value="tr.tongNhuCau"
              @change="changeDetailItem(indextr, 'tongNhuCau', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              :value="tr.khoDonGia"
              @change="changeDetailItem(indextr, 'khoDonGia', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.khoSoLuong"
              @change="changeDetailItem(indextr, 'khoSoLuong', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.khoThanhTien"
              @change="changeDetailItem(indextr, 'khoThanhTien', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.mnDonGia"
              @change="changeDetailItem(indextr, 'mnDonGia', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.mnSoLuong"
              @change="changeDetailItem(indextr, 'mnSoLuong', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.mnThanhTien"
              @change="changeDetailItem(indextr, 'mnThanhTien', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.ghiChu"
              @change="changeDetailItem(indextr, 'ghiChu', $event.target.value)"/>
          </td>
        </tr>
        <tr>
          <td colspan="14" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-button
              color="success"
              size="small"
              icon-pack="feather"
              icon="icon-plus"
              @click="addDetail"
            ></vs-button>
          </td>
        </tr>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Cộng</th>
          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center bg-warning">300</td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center bg-warning">300</td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
        </tr>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tiền lương (tiền công)</th>
          <td colspan="12" class="p-2 border border-solid d-theme-border-grey-light text-center bg-warning"></td>
        </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light italic">
              {{PDHData.ngayThangNamTPKTHK || ' Ngày ... tháng ... năm ...'}}
            </td>
            <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light italic">
              {{PDHData.ngayThangNamTPKEHOACH || ' Ngày ... tháng ... năm ...'}}
            </td>
            <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light italic">
              {{PDHData.ngayThangNamtpVatTu || ' Ngày ... tháng ... năm ...'}}
            </td>
            <td colspan="3"  class="p-2 border border-solid d-theme-border-grey-light italic">
              {{PDHData.ngayThangNamNguoiLap || ' Ngày ... tháng ... năm ...'}}
            </td>
            <td class="p-2 border border-solid d-theme-border-grey-light italic"></td>
          </tr>
          <tr>
            <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. KTHK</th>
            <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. KẾ HOẠCH</th>
            <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. VẬT TƯ</th>
            <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI LẬP</th>
            <th class="p-2 border border-solid d-theme-border-grey-light italic"></th>
          </tr>
          <tr>
            <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
              <span class="text-warning">Chờ phê duyệt</span>
            </th>
            <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
              <span class="text-danger">Không phê duyệt</span>
            </th>
            <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
              <span class="text-success">Đã phê duyệt</span>
            </th>
            <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
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
          text: 'Bạn có chắc muốn xóa Phiếu Định Mức Lao Động - Vật Tư này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete() {
        this.$vs.notify({
          color: 'danger',
          title: 'Xóa Phiếu Định Mức Lao Động - Vật Tư',
          text: 'Xóa Phiếu Định Mức Lao Động - Vật Tư thất bại.'
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

      &:nth-child(1) {
        min-width: 100px;
      }

      &:nth-child(2) {
        /*min-width: 150px;*/
      }

      /*&:nth-child(2) {*/
      /*  min-width: 190px;*/
      /*}*/
    }
  }
</style>
