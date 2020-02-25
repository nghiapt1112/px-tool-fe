<template>
  <vx-card title="Thống Kê Tiến Độ Sản Phẩm">
    <div class="filter-container">
      <div class="vx-row mb-4">
        <div class="vx-col w-1/4">
          <label class="filter-folder-area">Từ ngày</label>
          <datepicker placeholder="Từ ngày" input-class="input-date" :language="vi"
                      v-model="searchCondition.fromDate"></datepicker>
        </div>
        <div class="vx-col w-1/4">
          <label class="filter-folder-area">Đến ngày</label>
          <datepicker placeholder="Đến ngày" input-class="input-date" :language="vi"
                      v-model="searchCondition.toDate"
          ></datepicker>
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-3/4 mr-5 filter-folder-area">
        Sản phẩm:
        <div style="display: flex; flex-direction: row; align-items: center">
          <v-select
            style="width: 100%"
            size="small"
            label="ten"
            :reduce="t => t.mdId"
            v-model="mdsd"
            :options="TKTDSPComboboxData.mdsd"></v-select>
          <div class="ml-4" style="width: 250px">Tiến độ: {{TKTDSPData.tienDo}}%</div>
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-3/4 mr-5 filter-folder-area">
        Tổ Trưởng:
        <div style="display: flex; flex-direction: row; align-items: center">
          <v-select
            style="width: 100%"
            size="small"
            label="name"
            :reduce="t => t.id"
            v-model="toTruong"
            :options="TKTDSPToTruongCbbData.users"></v-select>
          <div class="ml-4" style="width: 250px"></div>
        </div>
      </div>
    </div>
    <div class="flex w-1/2">
      <vs-button class="mb-5" @click="search()">Tìm kiếm</vs-button>
    </div>
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên phụ kiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên linh kiện, chi tiết kiểm hỏng </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ký hiệu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">SL</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Dạng hư hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tổ kiểm hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày kiểm hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Phương pháp khắc phục</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển phòng vật tư</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số phiếu đặt hàng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển KT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số PA</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày ra PA</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển KH</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày phê duyệt</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số phiếu CNTP</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày hoàn thành của tổ</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Xác nhận hoàn thành</th>
        </tr>
        </tbody>
        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in TKTDSPData.details">
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-checkbox
              v-show="tr.currentStatus == 'PHUONG_AN' && !tr.soPA"
              icon-pack="feather"
              icon="icon-check"
              class="input-inline"
              v-model="paIds[indextr]"
            ></vs-checkbox>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ indextr + 1 }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.tenPhuKien }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.tenLinhKien }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.kyHieu }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.sl }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.dangHuHong }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{tr.toTruongFullName}}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayKiemHong }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.phuongPhapKhacPhuc }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenPhongVatTu }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pdh?id=' + tr.pdhId">{{ tr.soPhieuDatHang }}</a>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenKT }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pa?id=' + tr.requestId">{{ tr.soPA }}</a>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayRaPA }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenKH }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayPheDuyet }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pcntp?id=' + tr.soCNTP" >{{ tr.soCNTP }}</a>
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayHoanThanh }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.xacNhanHoanThanh }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="vx-row no-gutter justify-state mt-5">
      <div class="vx-col lg:w-1/2"></div>
      <div class="vx-col">
        <vs-pagination
          :total="TKTDSPData.total"
          @change="getList()"
          v-model="page"
        ></vs-pagination>
      </div>
    </div>
    <div class="vx-row no-gutter">
      <div class="vx-col lg:w-1/6">
        <vs-button :disabled="permissionTaoPA(AppActiveUser.type)" @click="onCreatePA">Tạo Phương Án</vs-button>
      </div>
      <div class="vx-col lg:w-1/6">
        <vs-button v-show="showFields(AppActiveUser, 'EXPORT_TK')" @click="onThongKe">Xuất file thống kê</vs-button>
      </div>
      <div class="vx-col lg:w-1/6 btn-error">
        <vs-button v-show="showFields(AppActiveUser, 'DEL')" @click="onXoaData">Xóa dữ liệu</vs-button>
      </div>
    </div>
  </vx-card>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import vSelect from 'vue-select'
  import Datepicker from "vuejs-datepicker";
  import {en, vi} from 'vuejs-datepicker/dist/locale'

  export default {
    components: {
      'v-select': vSelect,
      Datepicker
    },
    data() {
      return {
        vi: vi,
        en: en,
        searchCondition: {
          fromDate: new Date(2020, 1, 1),
          toDate: new Date()
        },
        mdsd: null,
        toTruong: null,
        showError: false,
        page: 1,
        paIds: []
      }
    },
    computed: {
      ...mapGetters([
        'TKTDSPData',
        'TKTDSPComboboxData',
        'TKTDSPToTruongCbbData',
        'AppActiveUser'
      ]),
      enableTaoPA: {
        get() {
          return this.paIds.includes(true);
        }
      }
    },
    mounted() {
      this.tktdspGetListMDSD();
      this.userGetToTruong();
    },
    methods: {
      ...mapActions([
        'tktdspGetListMDSD',
        'tktdspGetList',
        'paGetPAIdByDetailsIds',
        'userGetToTruong',
        'exportDataThongKe',
        'deleteData'
      ]),
      permissionTaoPA(type) {
        return !(this.paIds.includes(true) && type == 'TL_KY_THUAT');
      },
      getList() {
        const params = {
          page: this.page,
          size: 15,
          spId: this.mdsd
        };
        this.tktdspGetList(params);
      },
      onCreatePA() {
        const detailIds = [];
        this.paIds.forEach((val, key) => {
          val && detailIds.push(this.TKTDSPData.details[key].detailId || -1);
        });
        if (detailIds.length) {
          this.paGetPAIdByDetailsIds({detailIds})
            .then(res => {
              const {data: {paId}} = res;
              paId && this.$router.push(`/pa?id=${paId}`);
            })
            .catch(e => {
              this.$vs.notify({
                color: 'danger',
                title: 'Thống Kê Tiến Độ Sản Phẩm',
                text: `Không lấy được thông tin phương án. ${e}`
              })
            })
        }
      },
      search() {
        if (!this.searchCondition.fromDate) {
          this.searchCondition.fromDate = new Date();
        }
        if (!this.searchCondition.toDate) {
          this.searchCondition.toDate = new Date();
        }
        this.searchCondition.fromDate.setHours(0,0,0,0);
        this.searchCondition.toDate.setHours(23,59,59,0);
        console.log(this.toTruong);
        const params = {
          page: this.page,
          size: 30,
          spId: this.mdsd,
          fromDate: this.searchCondition.fromDate.getTime(),
          toDate: this.searchCondition.toDate.getTime(),
          toTruongId: this.toTruong
        };
        this.tktdspGetList(params);
      },
      showFields(user, fieldName) {
        if (user.type == 'ADMIN') {
          return true;
        }
        return false;
      },
      onThongKe() {
        if (!this.searchCondition.fromDate) {
          this.searchCondition.fromDate = new Date();
        }
        if (!this.searchCondition.toDate) {
          this.searchCondition.toDate = new Date();
        }
        this.searchCondition.fromDate.setHours(0,0,0,0);
        this.searchCondition.toDate.setHours(23,59,59,0);
        const params = {
          fromDate: this.searchCondition.fromDate.getTime(),
          toDate: this.searchCondition.toDate.getTime(),
        };
        console.log('thongke', params);
        // this.tktdspGetList(params);
        this.exportDataThongKe(params);
      },
      onXoaData() {
        if (!this.searchCondition.fromDate) {
          this.searchCondition.fromDate = new Date();
        }
        if (!this.searchCondition.toDate) {
          this.searchCondition.toDate = new Date();
        }
        this.searchCondition.fromDate.setHours(0,0,0,0);
        this.searchCondition.toDate.setHours(23,59,59,0);
        const params = {
          fromDate: this.searchCondition.fromDate.getTime(),
          toDate: this.searchCondition.toDate.getTime(),
        };
        console.log('delete data', params);
        // this.tktdspGetList(params);
        this.deleteData(params);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table--container {
    font-size: 1em;
    overflow: auto;
  }

  .invoice__table--content {
    min-width: 1268px;

    td, th {
      &:nth-child(1) {
        text-align: center;
      }

      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(8),
      &:nth-child(10),
      &:nth-child(12){
        min-width: 200px;
        width: 250px;
      }

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(9),
      &:nth-child(11),
      &:nth-child(13),
      &:nth-child(15),
      &:nth-child(16),
      &:nth-child(17),
      &:nth-child(19),
      &:nth-child(20) {
        width: 100px;
      }

      &:nth-child(14),
      &:nth-child(18)
      {
        min-width: 200px;
        width: 200px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
