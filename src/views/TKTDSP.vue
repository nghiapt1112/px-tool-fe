<template>
  <vx-card title="Thống Kê Tiến Độ Sản Phẩm">
    <div class="table--container">
      <table class="invoice__table--content border-collapse">
        <tbody>
        <tr>
          <th colspan="4" class="p-2 border border-solid d-theme-border-grey-light text-center">Sản phẩm:</th>
          <th colspan="3" class="p-2 border border-solid d-theme-border-grey-light text-center">
            <v-select
              size="small"
              label="ten"
              :reduce="t => t.mdId"
              v-model="mdsd"
              @input="getList()"
              :options="TKTDSPComboboxData.mdsd"></v-select>
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tiến độ: {{TKTDSPData.tienDo}}%</th>
          <th colspan="11" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        <tr>
          <th colspan="18" class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center"></th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">TT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên phụ kiện</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Tên linh kiện, chi tiết kiểm hỏng
          </th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ký hiệu</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">SL</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Dạng hư hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày kiểm hỏng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Phương pháp khắc phục</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển phòng vật tư</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số phiếu đặt hàng</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển KT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Số PA</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày ra PA</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày chuyển KH</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày phê duyệt</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Ngày hoàn thành</th>
          <th class="p-2 border border-solid d-theme-border-grey-light text-center">Xác nhận hoàn thành</th>
        </tr>
        </tbody>
        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in TKTDSPData.details">
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <vs-checkbox
              v-show="!tr.soPA"
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
            {{ tr.ngayKiemHong }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.phuongPhapKhacPhuc }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.ngayChuyenPhongVatTu }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            <a class="link-download" target="_blank" :href="'/pdh?id=' + tr.detailId">{{ tr.soPhieuDatHang }}</a>
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
      <div class="vx-col lg:w-1/2">
        <vs-button :disabled="permissionTaoPA(AppActiveUser.type)" @click="onCreatePA">Tạo Phương Án</vs-button>
      </div>
      <div class="vx-col">
        <vs-pagination
          :total="TKTDSPData.total"
          @change="getList()"
          v-model="page"
        ></vs-pagination>
      </div>
    </div>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import vSelect from 'vue-select'

  export default {
    components: {
      'v-select': vSelect,
    },
    data () {
      return {
        mdsd: null,
        showError: false,
        page: 1,
        paIds: []
      }
    },
    computed: {
      ...mapGetters([
        'TKTDSPData',
        'TKTDSPComboboxData',
        'AppActiveUser'
      ]),
      enableTaoPA: {
        get () {
          return this.paIds.includes(true);
        }
      }
    },
    mounted () {
      this.tktdspGetListMDSD();
    },
    methods: {
      ...mapActions([
        'tktdspGetListMDSD',
        'tktdspGetList',
        'paGetPAIdByDetailsIds'
      ]),
      permissionTaoPA(type) {
          return !(this.paIds.includes(true) && type == 'TL_KY_THUAT');
      },
      getList () {
        const params = {
          page: this.page,
          size: 15,
          spId: this.mdsd
        };
        this.tktdspGetList(params);
      },
      onCreatePA () {
        const detailIds = [];
        this.paIds.forEach((val, key) => {
          val && detailIds.push(this.TKTDSPData.details[key].detailId || -1);
        });
        if (detailIds.length) {
          this.paGetPAIdByDetailsIds({ detailIds })
            .then(res => {
              const { data: { paId } } = res;
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
      &:nth-child(1) {
        text-align: center;
        min-width: 50px;
      }

      &:nth-of-type(n+2) {
        min-width: 150px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
