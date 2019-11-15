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
              :value="PAData.toSo"/>
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
              :value="PAData.maSo"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            Số tờ
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('soTo', $event.target.value)"
              :value="PAData.soTo"/>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center italic">
            {{PAData.ngayThangNamPheDuyet || ' Ngày ... tháng ... năm ...'}}
          </td>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Sản phẩm (công việc):
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('sanPham', $event.target.value)"
              :value="PAData.sanPham"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            PĐH
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('pdh', $event.target.value)"
              :value="PAData.pdh"/>
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
              :value="PAData.noiDung"/>
          </th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr class="row--chu-ky">
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PAData.giamDocXacNhan"
              @input="changeData('giamDocXacNhan', $event)"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.giamDocXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PAData.giamDocXacNhan">{{AppActiveUser.name}}</span>
          </th>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Nguồn kinh phí:
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('nguonKinhPhi', $event.target.value)"
              :value="PAData.nguonKinhPhi"/>
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
          v-for="(tr, indextr) in PAData.dinhMucLaoDongs"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center relative">
            {{indextr + 1}}
            <div
              @click="deleteDinhMucLaoDong(indextr)"
              class="custom-btn-delete bg-danger"
            >x
            </div>
          </td>
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              :value="tr.noiDungCongViec"
              @change="changeDingMucLaoDong(indextr, 'noiDungCongViec', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.bacCV"
              @change="changeDingMucLaoDong(indextr, 'bacCV', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :value="tr.dm"
              @change="changeDingMucLaoDong(indextr, 'dm', $event.target.value)"/>
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              :value="tr.ghiChu"
              @change="changeDingMucLaoDong(indextr, 'ghiChu', $event.target.value)"/>
          </td>
        </tr>
        <tr>
          <td colspan="14" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-button
              color="success"
              size="small"
              icon-pack="feather"
              icon="icon-plus"
              @click="addDinhMucLaoDong"
            ></vs-button>
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
          v-for="(tr, indextr) in PAData.dinhMucVatTus"
          :key="indextr"
        >
          <td class="p-2 border border-solid d-theme-border-grey-light text-center relative">
            {{indextr + 1}}
            <div
              @click="deleteDinhMucVatTu(indextr)"
              class="custom-btn-delete bg-danger"
            >x
            </div>
          </td>
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
              style="width: 100px"
              size="small"
              class="inputx"
              :value="tr.khoDonGia"
              @change="changeDetailItem(indextr, 'khoDonGia', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100px"
              size="small"
              class="inputx"
              :value="tr.khoSoLuong"
              @change="changeDetailItem(indextr, 'khoSoLuong', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <div style="width: 100px">{{tr.khoThanhTien.toLocaleString()}}</div>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100px"
              size="small"
              class="inputx"
              :value="tr.mnDonGia"
              @change="changeDetailItem(indextr, 'mnDonGia', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100px"
              size="small"
              class="inputx"
              :value="tr.mnSoLuong"
              @change="changeDetailItem(indextr, 'mnSoLuong', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <div style="width: 100px">{{tr.mnThanhTien.toLocaleString()}}</div>
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
              @click="addDinhMucVatTu"
            ></vs-button>
          </td>
        </tr>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Cộng</th>
          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center bg-warning">
            {{PAData.tongDMVTKho ? PAData.tongDMVTKho.toLocaleString() : 0}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center bg-warning">
            {{PAData.tongDMVTMuaNgoai ? PAData.tongDMVTMuaNgoai.toLocaleString() : 0}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
        </tr>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">Tiền lương (tiền công)
          </th>
          <td colspan="12" class="p-2 border border-solid d-theme-border-grey-light text-center bg-warning"></td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light italic">Nơi nhận</td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light italic">
            <v-select
              size="small"
              label="name"
              :reduce="t => t.name"
              @input="changeData('noiNhan', $event)"
              :options="PAComboboxData.chuyen"></v-select>
          </td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PAData.ngayThangNamTPKTHK || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PAData.ngayThangNamTPKEHOACH || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PAData.ngayThangNamtpVatTu || ' Ngày ... tháng ... năm ...'}}
          </td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light italic">
            {{PAData.ngayThangNamNguoiLap || ' Ngày ... tháng ... năm ...'}}
          </td>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light italic"></th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. KTHK</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. KẾ HOẠCH</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. VẬT TƯ</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI LẬP</th>
        </tr>
        <tr class="row--chu-ky">
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              type="file"
              class="w-full"
              label="Hình ảnh đính kèm"
              multiple
              @change="selectFiles($event)"
            />
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PAData.truongPhongKTHKXacNhan"
              @input="changeData('truongPhongKTHKXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.truongPhongKTHKXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PAData.truongPhongKTHKXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              v-if="!PAData.truongPhongKTHKXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              @change="changeData('yKienTruongPhongKTHK', $event.target.value)"/>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PAData.truongPhongKeHoachXacNhan"
              @input="changeData('truongPhongKeHoachXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.truongPhongKeHoachXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PAData.truongPhongKeHoachXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              v-if="!PAData.truongPhongKeHoachXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              @change="changeData('yKienTruongPhongKeHoach', $event.target.value); getNoiNhan()"/>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PAData.truongPhongVatTuXacNhan"
              @input="changeData('truongPhongVatTuXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.truongPhongVatTuXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PAData.truongPhongVatTuXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              v-if="!PAData.truongPhongVatTuXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              @change="changeData('yKienTruongPhongVatTu', $event.target.value)"/>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PAData.nguoiLapXacNhan"
              @input="changeData('nguoiLapXacNhan', $event); getNoiNhan() "
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.nguoiLapXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PAData.nguoiLapXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              v-if="!PAData.nguoiLapXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              @change="changeData('yKienNguoiLap', $event.target.value)"/>
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
        'PAData',
        'PAComboboxData',
        'AppActiveUser'
      ]),
    },
    mounted () {
      const { query: { id } } = this.$route;
      id && this.paGetById(id).then(() => {
        this.getNoiNhan();
      });
      !id && this.getNoiNhan();
    },
    methods: {
      ...mapActions([
        'paUpdateData',
        'paSaveData',
        'paGetById',
        'paGetNoiNhanById',
        'commonUploadFiles'
      ]),
      getNoiNhan () {
        const {
          requestId,
          truongPhongKTHKXacNhan: tpKTHK,
          truongPhongKeHoachXacNhan: tpKeHoach,
          truongPhongVatTuXacNhan: tpVatTu,
          nguoiLapXacNhan: nguoiLap,
        } = this.PAData;
        const params = {
          requestId,
          tpKTHK,
          tpKeHoach,
          tpVatTu,
          nguoiLap
        };
        this.paGetNoiNhanById(params);
      },
      selectFiles (e) {
        const files = e.target.files;
        const data = Object.assign({}, this.PAData);
        data['filesSelected'] = files;
        this.paUpdateData(data);
      },
      changeData (fieldName, value) {
        const data = Object.assign({}, this.PAData);
        data[fieldName] = value;
        this.paUpdateData(data);
      },
      changeDetailItem (index, fieldName, value) {
        const item = Object.assign({}, this.PAData.dinhMucVatTus[index]);
        const dmvt = Object.assign([], this.PAData.dinhMucVatTus);
        item[fieldName] = value;
        dmvt[index] = item;
        this.changeData('dinhMucVatTus', dmvt);
      },
      changeDingMucLaoDong (index, fieldName, value) {
        const item = Object.assign({}, this.PAData.dinhMucLaoDongs[index]);
        const dmld = Object.assign([], this.PAData.dinhMucLaoDongs);
        item[fieldName] = value;
        dmld[index] = item;
        this.changeData('dinhMucLaoDongs', dmld);
      },
      addDinhMucLaoDong () {
        const list = Object.assign([], this.PAData.dinhMucLaoDongs);
        list.push({})
        this.changeData('dinhMucLaoDongs', list);
      },
      deleteDinhMucLaoDong (index) {
        const list = Object.assign([], this.PAData.dinhMucLaoDongs);
        list.splice(index, 1);
        this.changeData('dinhMucLaoDongs', list);
      },
      addDinhMucVatTu () {
        const list = Object.assign([], this.PAData.dinhMucVatTus);
        list.push({})
        this.changeData('dinhMucVatTus', list);
      },
      deleteDinhMucVatTu (index) {
        const list = Object.assign([], this.PAData.dinhMucVatTus);
        list.splice(index, 1);
        this.changeData('dinhMucVatTus', list);
      },
      onSubmit () {
        const data = Object.assign({}, this.PAData);
        this.paSaveData(data).then((res) => {
          const { filesSelected, requestId } = this.PAData;
          if (filesSelected) {
            // Upload
            filesSelected && this.commonUploadFiles({
              requestId,
              requestType: 'PHUONG_AN',
              files: filesSelected
            }).then(() => {
              this.$vs.notify({
                color: 'success',
                title: 'Lưu Phương Án',
                text: `Lưu Phương Án thành công.`
              });
              this.$router.push(`/cvct`);
            }).catch(e => {
              console.log('e', e);
            });
          } else {
            this.$vs.notify({
              color: 'success',
              title: 'Lưu Phương Án',
              text: `Lưu Phương Án thành công.`
            });
            this.$router.push(`/cvct`);
          }

        }).catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Lưu Phương Án',
            text: `Lưu Phương Án thất bại. ${e}`
          })
        })
      },
      openDeleteConfirm () {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa Phiếu Định Mức Lao Động - Vật Tư này?',
          accept: this.acceptDelete
        })
      },
      acceptDelete () {
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
    min-width: 1268px;

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
