<template>
  <vx-card title="Phiếu Kiểm Hỏng">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center" colspan="3"><strong>Nhà máy
            A41</strong></td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tên VKTBKT:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PKHData.tenVKTBKT"
              :reduce="t => t.name"
              @input="changeData('tenVKTBKT', $event)"
              :options="PKHComboboxData.ten_vktbkt"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số hiệu:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soHieu', $event.target.value)"
              :value="PKHData.soHieu"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tờ số:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('toSo', $event.target.value)"
              :value="PKHData.toSo"/>
          </td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Phẩn xưởng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PKHData.phanXuong"
              :reduce="t => t.name"
              @input="changeData('phanXuong', $event)"
              :options="PKHComboboxData.phan_xuong"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nguồn vào:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('nguonVao', $event.target.value)"
              :value="PKHData.nguonVao"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số XX:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soXX', $event.target.value)"
              :value="PKHData.soXX"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số tờ:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soTo', $event.target.value)"
              :value="PKHData.soTo"/>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tổ sx:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PKHData.toSX"
              :reduce="t => t.name"
              @input="changeData('toSX', $event)"
              :options="PKHComboboxData.to_san_xuat"></v-select>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">Công đoạn: <span class="text-uppercase">{{this.PKHData.congDoan}}</span>
          </td>
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
          v-for="(tr, indextr) in PKHData.kiemHongDetails"
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
              size="small"
              class="inputx"
              :value="tr.tenPhuKien"
              @change="changeDetailItem(indextr, 'tenPhuKien', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.tenLinhKien"
              @change="changeDetailItem(indextr, 'tenLinhKien', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.kyHieu"
              @change="changeDetailItem(indextr, 'kyHieu', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-right">
            <vs-input
              size="small"
              class="inputx"
              style="width: 85px"
              :value="tr.sl"
              @change="changeDetailItem(indextr, 'sl', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.dangHuHong"
              @change="changeDetailItem(indextr, 'dangHuHong', $event.target.value)"/>
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
              :value="tr.nguoiKiemHong"
              @change="changeDetailItem(indextr, 'nguoiKiemHong', $event.target.value)"/>
          </td>
        </tr>
        <tr>
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light">
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
          <th class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :reduce="t => t.id"
              @input="changeData('noiNhan', $event)"
              :options="PKHComboboxData.chuyen"></v-select>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PKHData.ngayThangNamQuanDoc || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PKHData.ngayThangNamTroLyKT || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PKHData.ngayThangNamToTruong || ' Ngày ... tháng ... năm ...'}}
          </td>
        </tr>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">QUẢN ĐỐC</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TRỢ LÝ KT</th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TỔ TRƯỞNG</th>
        </tr>
        <tr class="row--chu-ky">
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PKHData.quanDocDisable"
              :value="PKHData.quanDocXacNhan"
              @input="changeData('quanDocXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PKHData.quanDocXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PKHData.quanDocXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PKHData.quanDocDisable"
              v-if="!PKHData.quanDocXacNhan"
              class="mt-3"
              rows="4"
              placeholder="Nhập ý kiến khi không đồng ý"
              @change="changeData('yKienQuanDoc', $event.target.value)"/>
          </th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PKHData.troLyKTDisable"
              :value="PKHData.troLyKTXacNhan"
              @input="changeData('troLyKTXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PKHData.troLyKTXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PKHData.troLyKTXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PKHData.troLyKTDisable"
              v-if="!PKHData.troLyKTXacNhan"
              class="mt-3"
              rows="4"
              placeholder="Nhập ý kiến khi không đồng ý"
              @change="changeData('yKienTroLyKT', $event.target.value)"/>
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PKHData.toTruongDisable"
              :value="PKHData.toTruongXacNhan"
              @input="changeData('toTruongXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PKHData.toTruongXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PKHData.toTruongXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PKHData.toTruongDisable"
              v-if="!PKHData.toTruongXacNhan"
              class="mt-3"
              rows="4"
              placeholder="Nhập ý kiến khi không đồng ý"
              @change="changeData('yKienToTruong', $event.target.value)"/>
          </th>
        </tr>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
          </th>
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

    <vs-popup class="holamundo" title="Có lỗi xảy ra" :active.sync="showError">
      <p class="text-danger">{{pkhError}}</p>
    </vs-popup>
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
        showError: false,
      }
    },
    computed: {
      ...mapGetters([
        'PKHScreenData',
        'PKHData',
        'PKHComboboxData',
        'AppActiveUser'
      ]),
      pkhError: {
        get () {
          return this.PKHScreenData.error
        }
      }
    },
    mounted () {
      const { query: { id } } = this.$route;
      id && this.pkhGetById(id).then(() => {
        this.getNoiNhan();
      });
      !id && this.resetData() && this.getNoiNhan();
    },
    methods: {
      ...mapActions([
        'pkhUpdateData',
        'pkhSaveData',
        'pkhGetById',
        'pkhGetNoiNhanById'
      ]),
      getNoiNhan () {
        const {
          requestId,
          quanDocXacNhan: quanDoc,
          troLyKTXacNhan: troLyKT,
          toTruongXacNhan: toTruong,
        } = this.PKHData;
        const params = {
          requestId,
          quanDoc,
          troLyKT,
          toTruong,
        };
        this.pkhGetNoiNhanById(params);
      },
      resetData () {
        const data = {
          kiemHongDetails: []
        };
        this.pkhUpdateData(data);
        return true;
      },
      changeData (fieldName, value) {
        const data = Object.assign({}, this.PKHData);
        data[fieldName] = value;
        this.pkhUpdateData(data);
      },
      changeDetailItem (index, fieldName, value) {
        const item = Object.assign({}, this.PKHData.kiemHongDetails[index]);
        const kiemHong = Object.assign([], this.PKHData.kiemHongDetails);
        item[fieldName] = value;
        kiemHong[index] = item;
        this.changeData('kiemHongDetails', kiemHong);
      },
      addDetail () {
        const kiemHong = Object.assign([], this.PKHData.kiemHongDetails);
        kiemHong.push({})
        this.changeData('kiemHongDetails', kiemHong);
      },
      deleteDetail (index) {
        const kiemHong = Object.assign([], this.PKHData.kiemHongDetails);
        kiemHong.splice(index, 1);
        this.changeData('kiemHongDetails', kiemHong);
      },
      onSubmit () {
        const data = Object.assign({}, this.PKHData);
        this.pkhSaveData(data).then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Lưu Phiếu Kiểm Hỏng',
            text: `Lưu Phiếu Kiểm Hỏng thành công.`
          });
          this.$router.push(`/cvct`);
        }).catch(() => {
          this.showError = true;
        })
      },
      openDeleteConfirm () {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Kiểm Hỏng này?',
          accept: this.acceptDelete
        })
      },
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
      &:nth-child(1), &:nth-child(5) {
        min-width: 100px;
      }

      &:nth-child(2), &:nth-child(3) {
        min-width: 200px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
