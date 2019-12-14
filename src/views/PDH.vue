<template>
  <vx-card title="Phiếu Đặt Hàng">
    <template slot="actions">
      <vs-button
        v-show="PDHData.requestId"
        @click="download()"
        icon-pack="feather"
        icon="icon-download">Tải về
      </vs-button>
    </template>
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
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('donViYeuCau', $event.target.value)"
              :value="PDHData.donViYeuCau"/>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Phân xưởng</th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('phanXuong', $event.target.value)"
              :value="PDHData.phanXuong"/>
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
          <td class="p-2 border border-solid d-theme-border-grey-light text-center relative">
            {{indextr + 1}}
            <div
              @click="deleteDetail(indextr)"
              class="custom-btn-delete bg-danger"
            >x
            </div>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 135px"
              size="small"
              class="inputx"
              :value="tr.tenPhuKien"
              @change="changeDetailItem(indextr, 'tenPhuKien', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 135px"
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
              label="ten"
              :value="tr.mucDichSuDung"
              :reduce="t => t.mdId"
              @input="changeDetailItemMDSD(indextr, 'mucDichSuDung', $event)"
              :options="optionsMDSD">
              <template slot="option" slot-scope="option">
                <span :style="{color: option.mdId == -1 ? 'red' : ''}">{{option.ten}}</span>
              </template>
            </v-select>
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
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Nơi nhận</th>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light">
            <multiselect
              class="multiselect"
              tagPlaceholder=""
              placeholder=""
              selectedLabel="Đã chọn"
              selectLabel="Click để chọn"
              deselectLabel="Click để bỏ chọn"
              :close-on-select="false"
              :preserve-search="true"
              :options="PDHComboboxData.cusNoiNhan.map(i=>i.id)"
              :custom-label="opt => PDHComboboxData.cusNoiNhan.find(obj=> obj.id == opt).name"
              :multiple="true"
              :value="PDHData.cusReceivers"
              @input="changeData('cusReceivers', $event)"
              :taggable="true"></multiselect>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light">Người thực hiện</th>
          <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light">
            <multiselect
              class="multiselect"
              tagPlaceholder=""
              placeholder=""
              selectedLabel="Đã chọn"
              selectLabel="Click để chọn"
              deselectLabel="Click để bỏ chọn"
              :close-on-select="false"
              :preserve-search="true"
              :options="PDHComboboxData.nguoiThucHien.map(i=>i.id)"
              :custom-label="opt => PDHComboboxData.nguoiThucHien.find(obj=> obj.id == opt).name"
              :multiple="true"
              :value="PDHData.nguoiThucHien"
              @input="changeData('nguoiThucHien', $event)"
              :taggable="true"></multiselect>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PDHData.ngayThangNamTPKTHK || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PDHData.ngayThangNamTPVatTu || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PDHData.ngayThangNamNguoiDatHang || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic"></td>
        </tr>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TP. KTHK</th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. VẬT TƯ</th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI ĐẶT HÀNG</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr class="row--chu-ky">
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PDHData.tpkthkDisable"
              :value="PDHData.tpkthkXacNhan"
              @input="changeData('tpkthkXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PDHData.tpkthkXacNhan" class="chu-ky"
                 :src="PDHData.tpkthkDisable ? PDHData.tpkthkSignImg : AppActiveUser.chuKy">
            <span
              v-if="PDHData.tpkthkXacNhan">{{PDHData.tpkthkDisable ? PDHData.tpkthkFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PDHData.tpkthkDisable"
              v-if="!PDHData.tpkthkXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PDHData.yKienTPKTHK"
              @change="changeData('yKienTPKTHK', $event.target.value)"/>
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              :disabled="PDHData.tpvatTuDisable"
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PDHData.tpvatTuXacNhan"
              @input="changeData('tpvatTuXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PDHData.tpvatTuXacNhan" class="chu-ky"
                 :src="PDHData.tpvatTuDisable ? PDHData.tpvatTuSignImg : AppActiveUser.chuKy">
            <span v-if="PDHData.tpvatTuXacNhan">{{PDHData.tpvatTuDisable ? PDHData.tpvatTuFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PDHData.tpvatTuDisable"
              v-if="!PDHData.tpvatTuXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PDHData.yKienTPVatTu"
              @change="changeData('yKienTPVatTu', $event.target.value)"/>
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              :disabled="PDHData.nguoiDatHangDisable"
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PDHData.nguoiDatHangXacNhan"
              @input="changeData('nguoiDatHangXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PDHData.nguoiDatHangXacNhan" class="chu-ky"
                 :src="PDHData.nguoiDatHangDisable ? PDHData.nguoiDatHangSignImg : AppActiveUser.chuKy">
            <span v-if="PDHData.nguoiDatHangXacNhan">{{PDHData.nguoiDatHangDisable ? PDHData.nguoiDatHangFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PDHData.nguoiDatHangDisable"
              v-if="!PDHData.nguoiDatHangXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PDHData.yKienNguoiDatHang"
              @change="changeData('yKienNguoiDatHang', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">Chuyển tiếp</th>
          <td colspan="5" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :value="PDHData.noiNhan"
              :reduce="t => t.id"
              @input="changeData('noiNhan', $event)"
              @search:blur="isNoiNhanShowDropdownList = false"
              @search:focus="isNoiNhanShowDropdownList = true"
              :options="PDHComboboxData.chuyen"></v-select>
          </td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
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
      @click="openDeleteConfirm"></vs-button>
    <vs-button class="mr-4 mt-3" @click="onSubmit">Chuyển</vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'
  import { mapActions, mapGetters } from 'vuex';
  import Multiselect from 'vue-multiselect';

  export default {
    components: {
      'v-select': vSelect,
      Multiselect
    },
    data () {
      return {
        isNoiNhanShowDropdownList: false
      }
    },
    computed: {
      ...mapGetters([
        'PDHData',
        'PDHComboboxData',
        'AppActiveUser'
      ]),
      optionsMDSD: {
        get () {
          const lastItem = { mdId: -1, ten: '+ Thêm mới item' };
          const tmp = [...this.PDHComboboxData.mdsd];
          tmp.push(lastItem);
          return tmp;
        }
      }
    },
    mounted () {
      const { query: { id } } = this.$route;
      this.pdhGetListMDSD();
      id && this.pdhGetById(id).then(() => {
        this.getNoiNhan();
      });
      !id && this.resetData() && this.getNoiNhan();
      this.pdhGetCusNoiNhan({ requestType: 'DAT_HANG' });
      this.pdhGetNguoiThucHien({ requestType: 'DAT_HANG' });
    },
    methods: {
      ...mapActions([
        'pdhUpdateData',
        'pdhSaveData',
        'pdhGetById',
        'pdhGetNoiNhanById',
        'pdhGetListMDSD',
        'pdhAddMDSD',
        'commonDownloadFileByType',
        'pdhGetCusNoiNhan',
        'pdhGetNguoiThucHien',
      ]),
      download () {
        this.commonDownloadFileByType({
          requestId: this.PDHData.requestId,
          requestType: 'DAT_HANG'
        }).then()
          .catch((e) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Tải file',
              text: `Tải file thất bại. ${e}`
            })
          })
      },
      getNoiNhan () {
        const {
          requestId,
          tpkthkXacNhan: tpKTHK,
          tpvatTuXacNhan: tpVatTu,
          nguoiDatHangXacNhan: nguoiDatHang,
        } = this.PDHData;
        const params = {
          requestId,
          tpKTHK,
          tpVatTu,
          nguoiDatHang,
        };
        this.pdhGetNoiNhanById(params);
      },
      resetData () {
        const data = {
          phieuDatHangDetails: []
        };
        this.pdhUpdateData(data);
        return true;
      },
      changeDetailItemMDSD (index, fieldName, value) {
        if (value == -1) {
          const addItem = prompt("Nhập mục đích sử dụng", "Mục đích sử dụng");
          if (addItem) {
            this.pdhAddMDSD({ ten: addItem })
              .then((res) => {
                const { data: { mdId } } = res;
                this.pdhGetListMDSD().then(() => {
                  this.changeDetailItem(index, fieldName, mdId);
                });
                this.$vs.notify({
                  color: 'success',
                  title: 'Mục Đích Sử Dụng',
                  text: `Thêm thành công.`
                });
              })
              .catch(e => {
                this.$vs.notify({
                  color: 'danger',
                  title: 'Mục Đích Sử Dụng',
                  text: `Thêm thất bại. ${e}`
                })
              })
          } else {
            this.changeDetailItem(index, fieldName, null);
          }
        } else {
          this.changeDetailItem(index, fieldName, value);
        }
      },
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
      deleteDetail (index) {
        const phieuDatHang = Object.assign([], this.PDHData.phieuDatHangDetails);
        phieuDatHang.splice(index, 1);
        this.changeData('phieuDatHangDetails', phieuDatHang);
      },
      onSubmit () {
        const data = Object.assign({}, this.PDHData);
        this.pdhSaveData(data).then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Lưu Phiếu Đặt Hàng',
            text: `Lưu Phiếu Đặt Hàng thành công.`
          });
          this.$router.push(`/cvct`);
        }).catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Lưu Phiếu Đặt Hàng',
            text: `Lưu Phiếu Đặt Hàng thất bại. ${e}`
          })
        })
      },
      openDeleteConfirm () {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Đặt Hàng này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete () {
        this.$vs.notify({
          color: 'danger',
          title: 'Xóa Phiếu Đặt Hàng',
          text: 'Xóa Phiếu Đặt Hàng thất bại.'
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

    td, th {
      &:nth-child(1), &:nth-child(6) {
        min-width: 100px;
      }
    }
  }
</style>
