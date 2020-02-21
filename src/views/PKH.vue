<template>
  <vx-card title="Phiếu Kiểm Hỏng">
    <template slot="actions">
      <vs-button
        v-show="PKHData.requestId"
        @click="download()"
        icon-pack="feather"
        icon="icon-download">Tải về
      </vs-button>
    </template>
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
              type="number"
              size="small"
              class="inputx"
              @change="changeData('toSo', $event.target.value)"
              :value="PKHData.toSo"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Phân xưởng:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PKHData.phanXuong"
              :reduce="t => t.id"
              @input="changeData('phanXuong', $event); getToSanXuat()"
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
              type="number"
              size="small"
              class="inputx"
              @change="changeData('soTo', $event.target.value)"
              :value="PKHData.soTo"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tổ sx:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              :disabled="!PKHData.phanXuong"
              size="small"
              label="name"
              :value="PKHData.toSX"
              :reduce="t => t.id"
              @input="changeData('toSX', $event)"
              :options="PKHComboboxData.to_san_xuat"></v-select>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Công đoạn:</th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('congDoan', $event.target.value)"
              :value="PKHData.congDoan"/>
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
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tên phụ kiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên linh kiện, chi tiết kiểm hỏng
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ký hiệu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">SL</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Đơn vị tính</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Dạng hư hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Phương pháp khắc phục</th>
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
              type="number"
              size="small"
              class="inputx"
              style="width: 85px"
              :value="tr.sl"
              @change="changeDetailItem(indextr, 'sl', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-right">
            <vs-input
              size="small"
              class="inputx"
              :value="tr.dvt"
              @change="changeDetailItem(indextr, 'dvt', $event.target.value)"/>
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
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light">
            <multiselect
              class="multiselect"
              tagPlaceholder=""
              placeholder=""
              selectedLabel="Đã chọn"
              selectLabel="Click để chọn"
              deselectLabel="Click để bỏ chọn"
              :close-on-select="false"
              :preserve-search="true"
              :options="PKHComboboxData.cusNoiNhan.map(i=>i.id)"
              :custom-label="opt => PKHComboboxData.cusNoiNhan.find(obj=> obj.id == opt).name"
              :multiple="true"
              :value="PKHData.cusReceivers"
              @input="changeData('cusReceivers', $event)"
              :taggable="true"></multiselect>
          </td>
        </tr>
        <!--        <tr>-->
        <!--          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>-->
        <!--          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light">-->
        <!--            <vs-textarea-->
        <!--              class="mb-0"-->
        <!--              rows="4"-->
        <!--              :value="PKHData.cusNoiDung"-->
        <!--              @change="changeData('cusNoiDung', $event.target.value)"/>-->
        <!--          </td>-->
        <!--          <th colspan="5" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>-->
        <!--        </tr>-->
        </tbody>
        <tbody>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></th>
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
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">QUẢN ĐỐC</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TRỢ LÝ KT</th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TỔ TRƯỞNG</th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
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
            <img v-if="PKHData.quanDocXacNhan" class="chu-ky"
                 :src="PKHData.quanDocDisable ? PKHData.quanDocSignImg : AppActiveUser.chuKy">
            <span v-if="PKHData.quanDocXacNhan">{{PKHData.quanDocDisable ? PKHData.quanDocfullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PKHData.quanDocDisable"
              v-if="!PKHData.quanDocXacNhan"
              class="mt-3"
              rows="4"
              placeholder="Nhập ý kiến khi không đồng ý"
              :value="PKHData.yKienQuanDoc"
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
            <img v-if="PKHData.troLyKTXacNhan" class="chu-ky"
                 :src="PKHData.troLyKTDisable ? PKHData.troLyKTSignImg : AppActiveUser.chuKy">
            <span
              v-if="PKHData.troLyKTXacNhan">{{PKHData.troLyKTDisable ? PKHData.troLyfullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PKHData.troLyKTDisable"
              v-if="!PKHData.troLyKTXacNhan"
              class="mt-3"
              rows="4"
              placeholder="Nhập ý kiến khi không đồng ý"
              :value="PKHData.yKienTroLyKT"
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
            <img v-if="PKHData.toTruongXacNhan" class="chu-ky"
                 :src="PKHData.toTruongDisable ? PKHData.toTruongSignImg : AppActiveUser.chuKy">
            <span v-if="PKHData.toTruongXacNhan">{{PKHData.toTruongDisable ? PKHData.toTruongfullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PKHData.toTruongDisable"
              v-if="!PKHData.toTruongXacNhan"
              class="mt-3"
              rows="4"
              placeholder="Nhập ý kiến khi không đồng ý"
              :value="PKHData.yKienToTruong"
              @change="changeData('yKienToTruong', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">Chuyển tiếp</th>
          <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :reduce="t => t.id"
              :value="PKHData.noiNhan"
              @input="changeData('noiNhan', $event)"
              @search:blur="isNoiNhanShowDropdownList = false"
              @search:focus="isNoiNhanShowDropdownList = true"
              :options="PKHComboboxData.chuyen"></v-select>
          </td>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr :class="{'last-row' : isNoiNhanShowDropdownList}">
          <td colspan="10" class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <vs-button
      class="mr-4 float-right mt-3"
      color="danger"
      icon-pack="feather"
      icon="icon-trash"
      @click="openDeleteConfirm()"></vs-button>
    <vs-button class="mr-4 mt-3" @click="onSubmit" v-show="showFields(PKHData, AppActiveUser)">Chuyển</vs-button>

    <vs-popup class="holamundo" title="Có lỗi xảy ra" :active.sync="showError">
      <p class="text-danger">{{pkhError}}</p>
    </vs-popup>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select';
  import Multiselect from 'vue-multiselect';
  import {mapActions, mapGetters} from 'vuex';

  export default {
    components: {
      'v-select': vSelect,
      Multiselect,
    },
    data() {
      return {
        showError: false,
        isNoiNhanShowDropdownList: false
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
        get() {
          return this.PKHScreenData.error
        }
      }
    },
    mounted() {
      const {query: {id}} = this.$route;
      id && this.pkhGetById(id).then(() => {
        this.getNoiNhan();
        this.getToSanXuat();
      });
      !id && this.resetData() && this.getNoiNhan();
      this.pkhGetPhanXuong({requestId: id});
      this.pkhGetCusNoiNhan({requestType: 'KIEM_HONG'});
      this.pkhGetNguoiThucHien({requestType: 'KIEM_HONG'});
    },
    methods: {
      ...mapActions([
        'pkhUpdateData',
        'pkhSaveData',
        'pkhGetById',
        'pkhGetNoiNhanById',
        'pkhGetPhanXuong',
        'pkhGetToSanXuatByPXId',
        'commonDownloadFileByType',
        'pkhGetCusNoiNhan',
        'pkhGetNguoiThucHien',
        'deleteKH'
      ]),
      download() {
        this.commonDownloadFileByType({
          requestId: this.PKHData.requestId,
          requestType: 'KIEM_HONG'
        }).then()
          .catch((e) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Tải file',
              text: `Tải file thất bại. ${e}`
            })
          })
      },
      getNoiNhan() {
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
      getToSanXuat() {
        if (this.PKHData.toSX) {
          this.pkhGetToSanXuatByPXId({tsxId: this.PKHData.toSX})
        } else {
          this.pkhGetToSanXuatByPXId({pxId: this.PKHData.phanXuong})
        }
      },
      resetData() {
        const data = {
          kiemHongDetails: []
        };
        this.pkhUpdateData(data);
        return true;
      },
      changeData(fieldName, value) {
        const data = Object.assign({}, this.PKHData);
        data[fieldName] = value;
        this.pkhUpdateData(data);
      },
      changeDetailItem(index, fieldName, value) {
        const item = Object.assign({}, this.PKHData.kiemHongDetails[index]);
        const kiemHong = Object.assign([], this.PKHData.kiemHongDetails);
        item[fieldName] = value;
        kiemHong[index] = item;
        this.changeData('kiemHongDetails', kiemHong);
      },
      addDetail() {
        const kiemHong = Object.assign([], this.PKHData.kiemHongDetails);
        kiemHong.push({})
        this.changeData('kiemHongDetails', kiemHong);
      },
      deleteDetail(index) {
        const kiemHong = Object.assign([], this.PKHData.kiemHongDetails);
        kiemHong.splice(index, 1);
        this.changeData('kiemHongDetails', kiemHong);
      },
      onSubmit() {
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
      openDeleteConfirm() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Kiểm Hỏng này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete() {
        const {query: {id}} = this.$route;
        this.deleteKH(id)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Xóa Kiểm hỏng',
              text: `Xóa kiểm hỏng thành công.`
            });
            this.$router.push(`/cvct`);
          })
          .catch((e) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Xóa Kiểm hỏng',
              text: `Xóa Kiểm hỏng thất bại. ${e}`
            })
          })
      },
      showFields(data, user) {
        const {query: {id}} = this.$route;
        if (!id && (user.type == 'GENERAL' && user.level == 5)) { // user =  to_truong
          return true;
        }
        if (data.currentStatus != 'KIEM_HONG') { // da xong kiem hong
          return false;
        } else {
          if ((user.type == 'TL_KY_THUAT' && user.level == 4)
            || (user.type == 'GENERAL' && user.level == 3)
            || (user.type == 'GENERAL' && user.level == 5)) { // dang kiem hong thi dung user ms co quyen save
            return true;
          }
        }
        return false;
      }
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

    td, th {
      &:nth-child(1), &:nth-child(5) {
        min-width: 90px;
      }

      &:nth-child(2), &:nth-child(3) {
        min-width: 200px;
      }

      &:last-child {
        min-width: 150px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
