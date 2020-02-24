<template>
  <vx-card title="Phiếu Công Nhận Thành Phẩm">
    <template slot="actions">
      <vs-button
        v-show="PCNTPData.requestId"
        @click="download()"
        icon-pack="feather"
        icon="icon-download">Tải về
      </vs-button>
    </template>
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"><strong>Nhà máy A41</strong></td>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            PHIẾU CÔNG NHẬN THÀNH PHẨM
          </th>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Tên sản phẩm:</th>
          <td colspan="6" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('tenSanPham', $event.target.value)"
              :value="PCNTPData.tenSanPham"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung:</th>
          <td colspan="6" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('noiDung', $event.target.value)"
              :value="PCNTPData.noiDung"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">
            Số PA
          </th>
          <td colspan="6" class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pa?id=' + PCNTPData.paId">{{PCNTPData.soPa}}</a>
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
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light">
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
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('dvt', $event.target.value)"
              :value="PCNTPData.dvt"/>
          </td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Số nghiệm thu được:</th>
          <td colspan="6" class="p-2 border border-solid d-theme-border-grey-light">
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
          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light">&nbsp;</td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Nội dung thực hiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Kết quả</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Người làm</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Nghiệm thu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Xác Nhận</th>
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
              style="width: 100%"
              size="small"
              class="inputx"
              :value="tr.nguoiLam"
              @change="changeDetailItem(indextr, 'nguoiLam', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :disabled="PCNTPData.nghiemThuDisable"
              :reduce="t => t.id"
              :value="tr.nghiemThu"
              @input="changeDetailItem(indextr, 'nghiemThu', $event)"
              :options="PCNTPComboboxData.nguoiLam"></v-select>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <div class="chu-ky-row-container">
              <vs-checkbox
                icon-pack="feather"
                icon="icon-check"
                class="input-inline"
                v-show="AppActiveUser.userId == tr.nghiemThu"
                :value="tr.xacNhan"
                @input="changeDetailItem(indextr, 'xacNhan', $event)"
              >Đồng Ý
              </vs-checkbox>
              <img
                v-if="tr.xacNhan"
                class="chu-ky-row"
                :src="tr.signImg || AppActiveUser.chuKy">
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light">
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
              disabled="true"
              size="small"
              class="inputx"
              @change="changeData('dong', $event.target.value)"
              :value="(Number(PCNTPData.laoDongTienLuong) * (PCNTPData.gioX)).toLocaleString()"
            />
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>

        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">{{PCNTPData.ngayThangNamTPKCS || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI GIAO VIỆC</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TP.KCS</th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <td class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        <tr class="row--chu-ky">
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
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
            <img v-if="PCNTPData.tpkcsXacNhan" class="chu-ky"
                 :src="PCNTPData.tpkcsDisable ? PCNTPData.tpkcsSignImg : AppActiveUser.chuKy">
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
            <!--            <vs-textarea-->
            <!--              class="mt-3"-->
            <!--              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"-->
            <!--              :value="PCNTPData.yKienTpkcsXacNhan"-->
            <!--              @change="changeData('yKienTpkcsXacNhan', $event.target.value)"/>-->
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">{{PCNTPData.toTruong1Alias}}</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">{{PCNTPData.toTruong2Alias}}</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">{{PCNTPData.toTruong3Alias}}</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">{{PCNTPData.toTruong4Alias}}</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">{{PCNTPData.toTruong5Alias}}</th>
        </tr>
        <tr class="row--chu-ky">
          <th class="p-2 border border-solid d-theme-border-grey-light"></th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PCNTPData.toTruong1Disable"
              v-show="showFields(PCNTPData.toTruong1Id, 'CHU_KY')"
              :value="PCNTPData.toTruong1XacNhan"
              @input="changeData('toTruong1XacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.toTruong1XacNhan" class="chu-ky"
                 v-show="showFields(PCNTPData.toTruong1Id, 'CHU_KY')"
                 :src="PCNTPData.toTruong1Disable ? PCNTPData.toTruong1SignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.toTruong1XacNhan">{{PCNTPData.toTruong1Disable ? PCNTPData.toTruong1fullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.toTruong1Disable"
              v-if="!PCNTPData.toTruong1XacNhan"
              v-show="showFields(PCNTPData.toTruong1Id, 'CHU_KY')"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.ykienToTruong1"
              @change="changeData('ykienToTruong1', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              v-show="showFields(PCNTPData.toTruong2Id, 'CHU_KY')"
              :disabled="PCNTPData.toTruong2Disable"
              :value="PCNTPData.toTruong2XacNhan"
              @input="changeData('toTruong2XacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.toTruong2XacNhan" class="chu-ky"
                 v-show="showFields(PCNTPData.toTruong2Id, 'CHU_KY')"
                 :src="PCNTPData.toTruong2Disable ? PCNTPData.toTruong2SignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.toTruong2XacNhan">{{PCNTPData.toTruong2Disable ? PCNTPData.toTruong2fullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.toTruong2Disable"
              v-if="!PCNTPData.toTruong2XacNhan"
              v-show="showFields(PCNTPData.toTruong2Id, 'CHU_KY')"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.ykienToTruong2"
              @change="changeData('ykienToTruong2', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              v-show="showFields(PCNTPData.toTruong3Id, 'CHU_KY')"
              :disabled="PCNTPData.toTruong3Disable"
              :value="PCNTPData.toTruong3XacNhan"
              @input="changeData('toTruong3XacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.toTruong3XacNhan" class="chu-ky"
                 v-show="showFields(PCNTPData.toTruong3Id, 'CHU_KY')"
                 :src="PCNTPData.toTruong3Disable ? PCNTPData.toTruong3SignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.toTruong3XacNhan">{{PCNTPData.toTruong3Disable ? PCNTPData.toTruong3fullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.toTruong3Disable"
              v-if="!PCNTPData.toTruong3XacNhan"
              v-show="showFields(PCNTPData.toTruong3Id, 'CHU_KY')"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.ykienToTruong3"
              @change="changeData('ykienToTruong3', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              v-show="showFields(PCNTPData.toTruong4Id, 'CHU_KY')"
              :disabled="PCNTPData.toTruong4Disable"
              :value="PCNTPData.toTruong4XacNhan"
              @input="changeData('toTruong4XacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.toTruong4XacNhan" class="chu-ky"
                 v-show="showFields(PCNTPData.toTruong4Id, 'CHU_KY')"
                 :src="PCNTPData.toTruong4Disable ? PCNTPData.toTruong4SignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.toTruong4XacNhan">{{PCNTPData.toTruong4Disable ? PCNTPData.toTruong4fullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.toTruong4Disable"
              v-if="!PCNTPData.toTruong4XacNhan"
              v-show="showFields(PCNTPData.toTruong4Id, 'CHU_KY')"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.ykienToTruong4"
              @change="changeData('ykienToTruong4', $event.target.value)"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PCNTPData.toTruong5Disable"
              v-show="showFields(PCNTPData.toTruong5Id, 'CHU_KY')"
              :value="PCNTPData.toTruong5XacNhan"
              @input="changeData('toTruong5XacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PCNTPData.toTruong5XacNhan" class="chu-ky"
                 v-show="showFields(PCNTPData.toTruong5Id, 'CHU_KY')"
                 :src="PCNTPData.toTruong5Disable ? PCNTPData.toTruong5SignImg : AppActiveUser.chuKy">
            <span v-if="PCNTPData.toTruong5XacNhan">{{PCNTPData.toTruong5Disable ? PCNTPData.toTruong5fullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PCNTPData.toTruong5Disable"
              v-if="!PCNTPData.toTruong5XacNhan"
              v-show="showFields(PCNTPData.toTruong5Id, 'CHU_KY')"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PCNTPData.ykienToTruong5"
              @change="changeData('ykienToTruong5', $event.target.value)"/>
          </th>
        </tr>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">Chuyển tiếp</th>
          <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light">
            <multiselect
              class="multiselect"
              tagPlaceholder=""
              placeholder=""
              selectedLabel="Đã chọn"
              selectLabel="Click để chọn"
              deselectLabel="Click để bỏ chọn"
              :limitText="limitText"
              :max="5"
              :close-on-select="false"
              :preserve-search="true"
              :options="PCNTPComboboxData.chuyen.map(i=>i.id)"
              :custom-label="opt => PCNTPComboboxData.chuyen.find(obj=> obj.id == opt).name"
              :multiple="true"
              :value="PCNTPData.cusToTruongIds"
              @input="changeData('cusToTruongIds', $event)"
              :taggable="true"></multiselect>
          </td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr :class="{'last-row' : isNoiNhanShowDropdownList}">
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--    <vs-button-->
    <!--      class="mr-4 float-right mt-3"-->
    <!--      color="danger"-->
    <!--      icon-pack="feather"-->
    <!--      icon="icon-trash"></vs-button>-->
    <vs-button class="mr-4 mt-3" @click="onSubmit" v-show="showFields(-1, 'SAVE', AppActiveUser)">Lưu</vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'
  import {mapActions, mapGetters} from 'vuex';
  import Multiselect from 'vue-multiselect';

  export default {
    components: {
      'v-select': vSelect,
      Multiselect,
    },
    data() {
      return {
        isNoiNhanShowDropdownList: false,
      }
    },
    computed: {
      ...mapGetters([
        'PCNTPData',
        'PCNTPComboboxData',
        'AppActiveUser'
      ]),
    },
    mounted() {
      const {query: {id}} = this.$route;
      id && this.pcntpGetById(id).then(() => {
        this.getNoiNhan();
      });
      !id && this.resetData() && this.getNoiNhan();
      this.pcntpGetNguoiLam();
    },
    methods: {
      ...mapActions([
        'pcntpUpdateData',
        'pcntpSaveData',
        'pcntpGetById',
        'pcntpGetNoiNhanById',
        'commonDownloadFileByType',
        'pcntpGetNguoiLam'
      ]),
      download() {
        this.commonDownloadFileByType({
          requestId: this.PCNTPData.requestId,
          requestType: 'CONG_NHAN_THANH_PHAM'
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
          nguoiGiaoViecXacNhan: nguoiGiaoViec,
          nguoiThucHienXacNhan: nguoiThucHien,
          tpkcsXacNhan: tpKCS,
          type = 'CONG_NHAN_THANH_PHAM'
        } = this.PCNTPData;
        const params = {
          requestId,
          nguoiGiaoViec,
          nguoiThucHien,
          tpKCS,
          type
        };
        this.pcntpGetNoiNhanById(params);
      },
      showFields(userId, fieldName, currentUser) {
        // save CNTP bắt buộc phải có id
        const {query: {id}} = this.$route;
        if (!id) {
          return false;
        }
        // Only granted user have permission to save
        if (fieldName == 'SAVE' && (
          (currentUser.type == 'GENERAL' && currentUser.level == '3') // giam doc
          || currentUser.type == 'TO_TRUONG'  // to truong
          || currentUser.type == 'NV_KCS'  // NV_KCS
          || currentUser.type == 'TP_KCS'  // TP.KCS
        )) {
          return true;
        }
        if (fieldName == 'CHU_KY' && userId) { // show field chu ky , neu da assign cho 1 to truong
          return true;
        }
        return false;
      },
      resetData() {
        const data = {
          noiDungThucHiens: [],
        };
        this.pcntpUpdateData(data);
        return true;
      },
      changeData(fieldName, value) {
        const data = Object.assign({}, this.PCNTPData);
        data[fieldName] = value;
        this.pcntpUpdateData(data);
      },
      changeDetailItem(index, fieldName, value) {
        const item = Object.assign({}, this.PCNTPData.noiDungThucHiens[index]);
        const noiDungThucHien = Object.assign([], this.PCNTPData.noiDungThucHiens);
        item[fieldName] = value;
        noiDungThucHien[index] = item;
        this.changeData('noiDungThucHiens', noiDungThucHien);
      },
      addDetail() {
        const list = Object.assign([], this.PCNTPData.noiDungThucHiens);
        list.push({})
        this.changeData('noiDungThucHiens', list);
      },
      deleteDetail(index) {
        const list = Object.assign([], this.PCNTPData.noiDungThucHiens);
        list.splice(index, 1);
        this.changeData('noiDungThucHiens', list);
      },
      onSubmit() {
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
            time: '7000',
            title: 'Lưu Phiếu Công Nhận Thành Phẩm',
            text: `${e}`
          })
        })
      },
      openDeleteConfirm() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Công Nhận Thành Phẩm này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete() {
        this.$vs.notify({
          color: 'danger',
          title: 'Xóa Phiếu Công Nhận Thành Phẩm',
          text: 'Xóa Phiếu Công Nhận Thành Phẩm thất bại.'
        })
      },
      limitText(count) {
        return `Chỉ được chọn tối đa ${count} tổ trưởng`;
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
    td, th {
      &:nth-child(1) {
        min-width: 150px;
      }

      &:nth-child(5) {
        min-width: 250px;
      }

      &:last-child {
        min-width: 200px;
      }
    }
  }

  .chu-ky-row-container {
    display: flex;
    flex-direction: row;
  }

  .chu-ky-row {
    height: 22px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
