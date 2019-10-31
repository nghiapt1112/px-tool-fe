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
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('tenSanPham', $event.target.value)"
              :value="PCNTPData.tenSanPham"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('noiDung', $event.target.value)"
              :value="PCNTPData.noiDung"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số PA:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soPa', $event.target.value)"
              :value="PCNTPData.soPa"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Đơn vị thực hiện:</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('donViThucHien', $event.target.value)"
              :value="PCNTPData.donViThucHien"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tổ:</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('to', $event.target.value)"
              :value="PCNTPData.to"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Đơn vị đặt hàng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('donViDatHang', $event.target.value)"
              :value="PCNTPData.donViDatHang"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số lượng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soLuong', $event.target.value)"
              :value="PCNTPData.soLuong"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">ĐVT:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('dvt', $event.target.value)"
              :value="PCNTPData.dvt"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số nghiệm thu được:</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soNghiemThuDuoc', $event.target.value)"
              :value="PCNTPData.soNghiemThuDuoc"/>
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
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Nội dung thực hiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Kết quả</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Người làm</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Nghiệm thu</th>
        </tr>
        </tbody>

        <tbody>
        <tr
          v-for="(tr, indextr) in PCNTPData.noiDungThucHiens"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center relative">
            {{indextr + 1}}
            <div
              @click="deleteDetail(indextr)"
              class="custom-btn-delete bg-danger"
            >x
            </div>
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              :value="tr.noiDung"
              @change="changeDetailItem(indextr, 'noiDung', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.ketQua"
              @change="changeDetailItem(indextr, 'ketQua', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-right">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.nguoiLam"
              @change="changeDetailItem(indextr, 'nguoiLam', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.nghiemThu"
              @change="changeDetailItem(indextr, 'nghiemThu', $event.target.value)"/>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="p-2 border border-solid d-theme-border-grey-light">
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
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Ngày 12 tháng 12 năm 2019</td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Ngày 12 tháng 12 năm 2019
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI GIAO VIỆC</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI THỰC HIỆN</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TP.KCS</th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr class="row--chu-ky">
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PCNTPData.nguoiGiaoViecXacNhan"
              @input="changeData('nguoiGiaoViecXacNhan', $event)"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.nguoiGiaoViecXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PCNTPData.nguoiThucHienXacNhan"
              @input="changeData('nguoiThucHienXacNhan', $event)"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.nguoiThucHienXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PCNTPData.tpkcsXacNhan"
              @input="changeData('tpkcsXacNhan', $event)"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.tpkcsXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
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
      icon="icon-trash"></vs-button>
    <vs-button class="mr-4 mt-3">Lưu</vs-button>
    <vs-button class="mt-3" type="border" color="warning">Reset</vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      'v-select': vSelect,
    },
    computed: {
      ...mapGetters([
        'PCNTPData',
        'PCNTPComboboxData',
        'RequestId',
        'AppActiveUser'
      ]),
    },
    mounted () {
      this.RequestId && this.pcntpGetById(this.RequestId);
    },
    methods: {
      ...mapActions([
        'pcntpUpdateData',
        'pcntpSaveData',
        'pcntpGetById'
      ]),
      changeData (fieldName, value) {
        const data = Object.assign({}, this.PCNTPData);
        data[fieldName] = value;
        this.pcntpUpdateData(data);
      },
      changeDetailItem (index, fieldName, value) {
        const item = Object.assign({}, this.PCNTPData.noiDungThucHiens[index]);
        const phieuDatHang = Object.assign([], this.PCNTPData.noiDungThucHiens);
        item[fieldName] = value;
        phieuDatHang[index] = item;
        this.changeData('noiDungThucHiens', phieuDatHang);
      },
      addDetail () {
        const list = Object.assign([], this.PCNTPData.noiDungThucHiens);
        list.push({})
        this.changeData('noiDungThucHiens', list);
      },
      deleteDetail (index) {
        const list = Object.assign([], this.PCNTPData.noiDungThucHiens);
        list.splice(index, 1);
        this.changeData('noiDungThucHiens', list);
      },
      onSubmit () {
        const data = Object.assign({}, this.PCNTPData);
        this.pcntpSaveData(data).then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Lưu Phiếu Công Nhận Thành Phẩm',
            text: `Lưu Phiếu Công Nhận Thành Phẩm thành công.`
          })
        }).catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Lưu Phiếu Công Nhận Thành Phẩm',
            text: `Lưu Phiếu Công Nhận Thành Phẩm thất bại. ${e}`
          })
        })
      },
      openDeleteConfirm () {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Công Nhận Thành Phẩm này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete () {
        this.$vs.notify({
          color: 'danger',
          title: 'Xóa Phiếu Công Nhận Thành Phẩm',
          text: 'Xóa Phiếu Công Nhận Thành Phẩm thất bại.'
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
        min-width: 150px;
      }
    }
  }

  .row--chu-ky {
    height: 135px;

    th, td {
      vertical-align: top;
    }

    .chu-ky {
      height: 100px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
