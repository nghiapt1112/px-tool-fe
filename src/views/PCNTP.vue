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
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('laoDongTienLuong', $event.target.value)"
              :value="PCNTPData.laoDongTienLuong"
            />
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">Giờ X:</td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('gioX', $event.target.value)"
              :value="PCNTPData.gioX"
            />
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">Đồng:</td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('dong', $event.target.value)"
              :value="PCNTPData.dong"
            />
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
          <th class="p-2 border border-solid d-theme-border-grey-light">Ý Kiến TP.KCS</th>
        </tr>
        <tr class="row--chu-ky">
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PCNTPData.nguoiGiaoViecDisable"
              :value="PCNTPData.nguoiGiaoViecXacNhan"
              @input="changeData('nguoiGiaoViecXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.nguoiGiaoViecXacNhan" class="chu-ky" :src="PCNTPData.nguoiGiaoViecDisable ? PCNTPData.nguoiGiaoViecSignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.nguoiGiaoViecXacNhan">{{PCNTPData.nguoiGiaoViecDisable ? PCNTPData.nguoiGiaoViecFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.nguoiGiaoViecDisable"
              v-if="!PCNTPData.nguoiGiaoViecXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.yKienNguoiGiaoViec"
              @change="changeData('yKienNguoiGiaoViec', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PCNTPData.nguoiThucHienDisable"
              :value="PCNTPData.nguoiThucHienXacNhan"
              @input="changeData('nguoiThucHienXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.nguoiThucHienXacNhan" class="chu-ky" :src="PCNTPData.nguoiThucHienDisable ? PCNTPData.nguoiThucHienSignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.nguoiThucHienXacNhan">{{PCNTPData.nguoiThucHienDisable ? PCNTPData.nguoiThucHienFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.nguoiThucHienDisable"
              v-if="!PCNTPData.nguoiThucHienXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.yKienNguoiThucHien"
              @change="changeData('yKienNguoiThucHien', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PCNTPData.tpkcsDisable"
              :value="PCNTPData.tpkcsXacNhan"
              @input="changeData('tpkcsXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.tpkcsXacNhan" class="chu-ky" :src="PCNTPData.tpkcsDisable ? PCNTPData.tpkcsSignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.tpkcsXacNhan">{{PCNTPData.tpkcsDisable ? PCNTPData.tpkcsFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.tpkcsDisable"
              v-if="!PCNTPData.tpkcsXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.yKienTPKCS"
              @change="changeData('yKienTPKCS', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            <vs-textarea
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.yKienTpkcsXacNhan"
              @change="changeData('yKienTpkcsXacNhan', $event.target.value)"/>
          </th>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :reduce="t => t.id"
              :value="PCNTPData.noiNhan"
              @input="changeData('noiNhan', $event)"
              @search:blur="isNoiNhanShowDropdownList = false"
              @search:focus="isNoiNhanShowDropdownList = true"
              :options="PCNTPComboboxData.chuyen"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr :class="{'last-row' : isNoiNhanShowDropdownList}">
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <vs-button
      class="mr-4 float-right mt-3"
      color="danger"
      icon-pack="feather"
      icon="icon-trash"></vs-button>
    <vs-button class="mr-4 mt-3" @click="onSubmit">Lưu</vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      'v-select': vSelect,
    },
    data () {
      return {
        isNoiNhanShowDropdownList: false
      }
    },
    computed: {
      ...mapGetters([
        'PCNTPData',
        'PCNTPComboboxData',
        'AppActiveUser'
      ]),
    },
    mounted () {
      const { query: { id } } = this.$route;
      id && this.pcntpGetById(id).then(() => {
        this.getNoiNhan();
      });
      !id && this.resetData() && this.getNoiNhan();
    },
    methods: {
      ...mapActions([
        'pcntpUpdateData',
        'pcntpSaveData',
        'pcntpGetById',
        'pcntpGetNoiNhanById'
      ]),
      getNoiNhan () {
        const {
          requestId,
          nguoiGiaoViecXacNhan: nguoiGiaoViec,
          nguoiThucHienXacNhan: nguoiThucHien,
          tpkcsXacNhan: tpKCS,
        } = this.PCNTPData;
        const params = {
          requestId,
          nguoiGiaoViec,
          nguoiThucHien,
          tpKCS,
        };
        this.pcntpGetNoiNhanById(params);
      },
      resetData () {
        const data = {
          noiDungThucHiens: [],
        };
        this.pcntpUpdateData(data);
        return true;
      },
      changeData (fieldName, value) {
        const data = Object.assign({}, this.PCNTPData);
        data[fieldName] = value;
        this.pcntpUpdateData(data);
      },
      changeDetailItem (index, fieldName, value) {
        const item = Object.assign({}, this.PCNTPData.noiDungThucHiens[index]);
        const noiDungThucHien = Object.assign([], this.PCNTPData.noiDungThucHiens);
        item[fieldName] = value;
        noiDungThucHien[index] = item;
        this.changeData('noiDungThucHiens', noiDungThucHien);
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
          });
          this.$router.push(`/cvct`);
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
</style>
