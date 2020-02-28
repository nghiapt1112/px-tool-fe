<template>
  <vx-card title="Phiếu Định Mức Lao Động - Vật Tư">
    <template slot="actions">
      <vs-button
        v-show="PAData.requestId"
        @click="download()"
        icon-pack="feather"
        icon="icon-download">Tải về
      </vs-button>
    </template>
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
              style="width: 150px"
              type="number" min="0"
              size="small"
              class="inputx"
              @change="changeData('toSo', $event.target.value)"
              :disabled="disabledFields(AppActiveUser)"
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
              :disabled="disabledFields(AppActiveUser)"
              :value="PAData.maSo"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            Số tờ
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 150px"
              type="number" min="0"
              size="small"
              class="inputx"
              @change="changeData('soTo', $event.target.value)"
              :disabled="disabledFields(AppActiveUser)"
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
              :disabled="disabledFields(AppActiveUser)"
              :value="PAData.sanPham"/>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">
            PĐH
          </th>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 150px"
              size="small"
              class="inputx"
              @change="changeData('pdh', $event.target.value)"
              :disabled="disabledFields(AppActiveUser)"
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
              :disabled="disabledFields(AppActiveUser)"
              :value="PAData.noiDung"/>
          </th>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr class="row--chu-ky">
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              :disabled="PAData.giamDocDisable"
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :value="PAData.giamDocXacNhan"
              @input="changeData('giamDocXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.giamDocXacNhan" class="chu-ky" :src="AppActiveUser.chuKy">
            <span v-if="PAData.giamDocXacNhan">{{AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PAData.giamDocDisable"
              v-if="!PAData.giamDocXacNhan"
              rows="3"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PAData.yKienGiamDoc"
              @change="changeData('yKienGiamDoc', $event.target.value)"/>
          </th>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">
            Nguồn kinh phí:
          </th>
          <th colspan="6" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-input
              size="small"
              class="inputx"
              @change="changeData('nguonKinhPhi', $event.target.value)"
              :disabled="disabledFields(AppActiveUser)"
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
              :disabled="disabledFields(AppActiveUser, 'DMLD')"
              :value="tr.noiDungCongViec"
              @change="changeDingMucLaoDong(indextr, 'noiDungCongViec', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'DMLD')"
              :value="tr.bacCV"
              @change="changeDingMucLaoDong(indextr, 'bacCV', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 70px"
              type="number" min="0"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'DMH')"
              :value="tr.dm"
              @change="changeDingMucLaoDong(indextr, 'dm', $event.target.value)"/>
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 100%"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'DMLD')"
              :value="tr.ghiChu"
              @change="changeDingMucLaoDong(indextr, 'ghiChu', $event.target.value)"/>
          </td>
        </tr>
        <tr>
          <td class="p-2 border border-solid d-theme-border-grey-light text-left"></td>
          <td colspan="8" class="p-2 border border-solid d-theme-border-grey-light h4 text-left">
            Tổng cộng
          </td>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-left h4">
            {{PAData.tongDMLDDM ? PAData.tongDMLDDM.toLocaleString() : 0}}
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light"></td>
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
              @click="deleteDinhMucVatTu(indextr, AppActiveUser)"
              class="custom-btn-delete bg-danger"
            >x
            </div>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 120px"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'DMVT')"
              :value="tr.tenVatTuKyThuat"
              @change="changeDetailItem(indextr, 'tenVatTuKyThuat', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 120px"
              size="small"
              class="inputx"
              :value="tr.kyMaKyHieu"
              :disabled="disabledFields(AppActiveUser, 'DMVT')"
              @change="changeDetailItem(indextr, 'kyMaKyHieu', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              :value="tr.dvt"
              :disabled="disabledFields(AppActiveUser, 'DMVT')"
              @change="changeDetailItem(indextr, 'dvt', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              class="inputx"
              type="number" min = "0" value="0"
              :value="tr.dm1SP"
              :disabled="disabledFields(AppActiveUser, 'DMVT')"
              @change="changeDetailItem(indextr, 'dm1SP', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              type="number" min = "0" value="0"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'DMVT')"
              :value="tr.soLuongSanPham"
              @change="changeDetailItem(indextr, 'soLuongSanPham', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              style="width: 50px"
              size="small"
              type="number" min = "0" value="0"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'DMVT')"
              :value="tr.tongNhuCau"
              @change="changeDetailItem(indextr, 'tongNhuCau', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              type="number" min = "0" value="0"
              style="width: 100px"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'HDK')"
              :value="tr.khoDonGia"
              @change="changeDetailItem(indextr, 'khoDonGia', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              type="number" min = "0" value="0"
              style="width: 100px"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'HDK')"
              :value="tr.khoSoLuong"
              @change="changeDetailItem(indextr, 'khoSoLuong', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <div style="width: 100px">{{tr.khoThanhTien.toLocaleString()}}</div>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              type="number" min = "0" value="0"
              style="width: 100px"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'MN')"
              :value="tr.mnDonGia"
              @change="changeDetailItem(indextr, 'mnDonGia', $event.target.value)"/>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-input
              type="number" min = "0" value="0"
              style="width: 100px"
              size="small"
              class="inputx"
              :disabled="disabledFields(AppActiveUser, 'MN')"
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
          <th colspan="8" class="p-2 border border-solid d-theme-border-grey-light text-left h4">Cộng</th>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center h4">
            {{PAData.tongDMVTKho ? PAData.tongDMVTKho.toLocaleString() : 0}}
          </td>
          <td colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <td class="p-2 border border-solid d-theme-border-grey-light text-center h4">
            {{PAData.tongDMVTMuaNgoai ? PAData.tongDMVTMuaNgoai.toLocaleString() : 0}}
          </td>

        </tr>
        <tr class="hover:bg-warning">
          <td class="p-2 border border-solid d-theme-border-grey-light text-center"></td>
          <th colspan="8" class="p-2 border border-solid d-theme-border-grey-light text-left h4">Tiền lương (tiền công)
          </th>
          <td colspan="12" class="p-2 border border-solid d-theme-border-grey-light text-center h4 ">
            <vs-input
              style="width: 100%"
              type="number"
              :value="PAData.tienLuong"
              :disabled="disabledFields(AppActiveUser, 'TL')"
              @change="changeData('tienLuong', $event.target.value)"/>

          </td>
        </tr>
        <tr>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light hover:bg-warning">Nơi nhận</th>
          <td colspan="4" class="p-2 border border-solid d-theme-border-grey-light">
            <multiselect
              class="multiselect"
              tagPlaceholder=""
              placeholder=""
              selectedLabel="Đã chọn"
              selectLabel="Click để chọn"
              deselectLabel="Click để bỏ chọn"
              :disabled="disabledFields(AppActiveUser)"
              :close-on-select="false"
              :preserve-search="true"
              :options="PAComboboxData.cusNoiNhan.map(i=>i.id)"
              :custom-label="opt => PAComboboxData.cusNoiNhan.find(obj=> obj.id == opt).name"
              :multiple="true"
              :value="PAData.cusReceivers"
              @input="changeData('cusReceivers', $event)"
              :taggable="true"></multiselect>
          </td>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light hover:bg-warning">Các đơn vị thực hiện</th>
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
              :disabled="disabledFields(AppActiveUser)"
              :options="PAComboboxData.nguoiThucHien.map(i=>i.id)"
              :custom-label="opt => PAComboboxData.nguoiThucHien.find(obj=> obj.id == opt).name"
              :multiple="true"
              :value="PAData.nguoiThucHien"
              @input="changeData('nguoiThucHien', $event)"
              :taggable="true"></multiselect>
          </td>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <!--        <tr>-->
        <!--          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>-->
        <!--          <td colspan="7" class="p-2 border border-solid d-theme-border-grey-light">-->
        <!--            <vs-textarea-->
        <!--              class="mb-0"-->
        <!--              rows="4"-->
        <!--              :disabled="AppActiveUser.type== 'NV_DINH_MUC'"-->
        <!--              :value="PAData.cusNoiDung"-->
        <!--              @change="changeData('cusNoiDung', $event.target.value)"/>-->
        <!--          </td>-->
        <!--          <th colspan="5" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>-->
        <!--        </tr>-->
        </tbody>
        <tbody>
        <tr>
          <td colspan="3" class="p-2 border border-solid d-theme-border-grey-light italic"></td>
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
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">Trưởng Phòng</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. KẾ HOẠCH</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">TP. VẬT TƯ</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">NGƯỜI LẬP</th>
        </tr>
        <tr class="row--chu-ky">
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">
            <input ref="fileInput" style="display: none" type="file" accept="application/pdf" multiple
                   @change="selectFiles($event)">
            <vx-input-group>
              <template slot="prepend">
                <div class="prepend-text btn-addon">
                  <vs-button
                    :disabled="disabledFields(AppActiveUser)"
                    @click="$refs.fileInput.click()"
                    color="primary">Chọn tệp
                  </vs-button>
                </div>
              </template>
              <vs-input
                :disabled="disabledFields(AppActiveUser)"
                size="small"
                readonly="true"
                placeholder="Chọn tệp đính kèm"
                :value="filesTextValue"
              />
            </vx-input-group>
            <a
              v-for="(fileName, indextr) in PAData.files"
              :key="indextr"
              @click="onDownloadFile(fileName)"
              class="link-download mt-2"
            >
              {{fileName}}
            </a>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PAData.truongPhongKTHKDisable"
              :value="PAData.truongPhongKTHKXacNhan"
              @input="changeData('truongPhongKTHKXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.truongPhongKTHKXacNhan" class="chu-ky"
                 :src="PAData.truongPhongKTHKDisable ? PAData.truongPhongKTHKSignImg : AppActiveUser.chuKy">
            <span v-if="PAData.truongPhongKTHKXacNhan">{{PAData.truongPhongKTHKDisable ? PAData.truongPhongKTHKFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PAData.truongPhongKTHKDisable"
              v-if="!PAData.truongPhongKTHKXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PAData.yKienTruongPhongKTHK"
              @change="changeData('yKienTruongPhongKTHK', $event.target.value)"/>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PAData.truongPhongKeHoachDisable"
              :value="PAData.truongPhongKeHoachXacNhan"
              @input="changeData('truongPhongKeHoachXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.truongPhongKeHoachXacNhan" class="chu-ky"
                 :src="PAData.truongPhongKeHoachDisable ? PAData.truongPhongKeHoachSignImg : AppActiveUser.chuKy">
            <span v-if="PAData.truongPhongKeHoachXacNhan">{{PAData.truongPhongKeHoachDisable ? PAData.truongPhongKeHoachFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PAData.truongPhongKeHoachDisable"
              v-if="!PAData.truongPhongKeHoachXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PAData.yKienTruongPhongKeHoach"
              @change="changeData('yKienTruongPhongKeHoach', $event.target.value); getNoiNhan()"/>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PAData.truongPhongVatTuDisable"
              :value="PAData.truongPhongVatTuXacNhan"
              @input="changeData('truongPhongVatTuXacNhan', $event); getNoiNhan()"
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.truongPhongVatTuXacNhan" class="chu-ky"
                 :src="PAData.truongPhongVatTuDisable ? PAData.truongPhongVatTuSignImg : AppActiveUser.chuKy">
            <span v-if="PAData.truongPhongVatTuXacNhan">{{PAData.truongPhongVatTuDisable ? PAData.truongPhongVatTuFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PAData.truongPhongVatTuDisable"
              v-if="!PAData.truongPhongVatTuXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PAData.yKienTruongPhongVatTu"
              @change="changeData('yKienTruongPhongVatTu', $event.target.value)"/>
          </th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-checkbox
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              :disabled="PAData.nguoiLapDisable"
              :value="PAData.nguoiLapXacNhan"
              @input="changeData('nguoiLapXacNhan', $event); getNoiNhan() "
            >Đồng Ý
            </vs-checkbox>
            <img v-if="PAData.nguoiLapXacNhan" class="chu-ky"
                 :src="PAData.nguoiLapDisable ? PAData.nguoiLapSignImg : AppActiveUser.chuKy">
            <span v-if="PAData.nguoiLapXacNhan">{{PAData.nguoiLapDisable ? PAData.nguoiLapFullName : AppActiveUser.name}}</span>
            <vs-textarea
              :disabled="PAData.nguoiLapDisable"
              v-if="!PAData.nguoiLapXacNhan"
              rows="4"
              class="mt-3"
              placeholder="Nhập ý kiến cho trường hợp Không nhất trí"
              :value="PAData.yKienNguoiLap"
              @change="changeData('yKienNguoiLap', $event.target.value)"/>
          </th>
        </tr>
        <tr>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light">Chuyển tiếp</th>
          <td colspan="9" class="p-2 border border-solid d-theme-border-grey-light">
            <v-select
              size="small"
              label="name"
              :reduce="t => t.id"
              :value="PAData.noiNhan"
              @input="changeData('noiNhan', $event)"
              @search:blur="isNoiNhanShowDropdownList = false"
              @search:focus="isNoiNhanShowDropdownList = true"
              :options="PAComboboxData.chuyen"></v-select>
          </td>
          <th colspan="2" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr :class="{'last-row' : isNoiNhanShowDropdownList}">
          <td colspan="14" class="p-2 border border-solid d-theme-border-grey-light"></td>
        </tr>
        </tbody>
      </table>
    </div>
<!--    <vs-button-->
<!--      class="mr-4 float-right mt-3"-->
<!--      color="danger"-->
<!--      icon-pack="feather"-->
<!--      icon="icon-trash"-->
<!--      :disabled="true"-->
<!--      @click="openDeleteConfirm"></vs-button>-->
    <vs-button class="mr-4 mt-3" :disabled="PAData.disableAll" @click="onSubmit"
               v-show="permissionToSave(AppActiveUser)">Chuyển
    </vs-button>
  </vx-card>
</template>

<script>
  import vSelect from 'vue-select'
  import {mapActions, mapGetters} from 'vuex';
  import Multiselect from 'vue-multiselect';

  export default {
    components: {
      'v-select': vSelect,
      Multiselect
    },
    data() {
      return {
        isNoiNhanShowDropdownList: false
      }
    },
    computed: {
      ...mapGetters([
        'PAData',
        'PAComboboxData',
        'AppActiveUser'
      ]),
      filesTextValue: {
        get() {
          const {filesSelected} = this.PAData;
          if (filesSelected && filesSelected.length) {
            const filesName = filesSelected.map(f => f.name).join(', ');
            return `${filesSelected.length} file được chọn (${filesName})`;
          }
          return null;
        }
      }
    },
    mounted() {
      const {query: {id}} = this.$route;
      id && this.paGetById(id).then(() => {
        this.getNoiNhan();
      });
      !id && this.resetData() && this.getNoiNhan();
      this.paGetCusNoiNhan({requestType: 'PHUONG_AN'});
      this.paGetNguoiThucHien({requestType: 'PHUONG_AN'});
    },
    methods: {
      ...mapActions([
        'paUpdateData',
        'paSaveData',
        'paGetById',
        'paGetNoiNhanById',
        'commonUploadFiles',
        'commonDownloadFile',
        'commonDownloadFileByType',
        'paGetCusNoiNhan',
        'paGetNguoiThucHien',
      ]),
      download() {
        this.commonDownloadFileByType({
          requestId: this.PAData.requestId,
          requestType: 'PHUONG_AN'
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
          truongPhongKTHKXacNhan: tpKTHK,
          truongPhongKeHoachXacNhan: tpKeHoach,
          truongPhongVatTuXacNhan: tpVatTu,
          nguoiLapXacNhan: nguoiLap,
          giamDocXacNhan: giamDoc,
          type = 'PHUONG_AN'
        } = this.PAData;
        const params = {
          requestId,
          tpKTHK,
          tpKeHoach,
          tpVatTu,
          nguoiLap,
          giamDoc,
          type
        };
        this.paGetNoiNhanById(params);
      },
      selectFiles(e) {
        const files = e.target.files;
        const data = Object.assign({}, this.PAData);
        data['filesSelected'] = [...files];
        this.paUpdateData(data);
      },
      resetData() {
        const data = {
          dinhMucVatTus: [],
          dinhMucLaoDongs: []
        };
        this.paUpdateData(data);
        return true;
      },
      changeData(fieldName, value) {
        const data = Object.assign({}, this.PAData);
        data[fieldName] = value;
        this.paUpdateData(data);
      },
      changeDetailItem(index, fieldName, value) {
        const item = Object.assign({}, this.PAData.dinhMucVatTus[index]);
        const dmvt = Object.assign([], this.PAData.dinhMucVatTus);
        item[fieldName] = value;
        dmvt[index] = item;
        this.changeData('dinhMucVatTus', dmvt);
      },
      changeDingMucLaoDong(index, fieldName, value) {
        const item = Object.assign({}, this.PAData.dinhMucLaoDongs[index]);
        const dmld = Object.assign([], this.PAData.dinhMucLaoDongs);
        item[fieldName] = value;
        dmld[index] = item;
        this.changeData('dinhMucLaoDongs', dmld);
      },
      addDinhMucLaoDong() {
        const list = Object.assign([], this.PAData.dinhMucLaoDongs);
        list.push({})
        this.changeData('dinhMucLaoDongs', list);
      },
      deleteDinhMucLaoDong(index) {
        const list = Object.assign([], this.PAData.dinhMucLaoDongs);
        list.splice(index, 1);
        this.changeData('dinhMucLaoDongs', list);
      },
      addDinhMucVatTu() {
        const list = Object.assign([], this.PAData.dinhMucVatTus);
        list.push({})
        this.changeData('dinhMucVatTus', list);
      },
      deleteDinhMucVatTu(index, user) {
        if (user.type == 'NV_DINH_MUC') {
          return;
        }
        const list = Object.assign([], this.PAData.dinhMucVatTus);
        list.splice(index, 1);
        this.changeData('dinhMucVatTus', list);
      },
      onSubmit() {
        const data = Object.assign({}, this.PAData);
        this.paSaveData(data).then(() => {
          const {filesSelected, requestId} = this.PAData;
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
            time: '7000',
            color: 'danger',
            title: 'Lưu Phương Án',
            text: `Lưu Phương Án thất bại. ${e}`
          })
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
      onDownloadFile(fileName) {
        this.commonDownloadFile({fileName});
      },
      disabledFields(user, fieldName) {
        if (user.type == 'TL_KY_THUAT' || user.type == 'TP_VAT_TU' || user.type == 'TRUONG_PHONG') {
          return false;
        }
        // nhan vien tiep lieu
        if (user.type == 'NV_VAT_TU' && user.userId == '54') {
          if (fieldName == 'HDK' || fieldName == 'MN') { // huy dong kho, mua ngoai
            return false;
          }
        }
        // nhan vien dinh muc
        if (user.type == 'NV_DINH_MUC' || (user.type == 'GENERAL' && user.phanXuong == 'PHONG_KE_HOACH')) {
          if (fieldName == 'DMH' || fieldName == 'TL') {
            return false;
          }
        }
        return true;
      },
      permissionToSave(user) {
        // Tạo PA bắt buộc phải có id
        const {query: {id}} = this.$route;
        if (!id) {
          return false;
        }
        if (user.type == 'TL_KY_THUAT' || user.type == 'TRUONG_PHONG' || user.type == 'NV_VAT_TU' || user.type == 'TP_VAT_TU' || user.type == 'NV_DINH_MUC' || user.type == 'GENERAL' || user.type=='TP_KE_HOACH') {
          return true;
        }
        return false;
      },
      isEmpty(str) {
        return str == undefined || str == '';
      }
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

    td, th {
      &:nth-child(1) {
        min-width: 100px;
      }

      &:last-child {
        width: 150px;
      }
    }
  }
</style>
