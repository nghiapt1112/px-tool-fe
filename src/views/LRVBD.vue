<template>
  <vx-card title="Văn bản đến">
    <div class="flex mb-4">
      <div class="w-1/4 mr-5">
        <VuePerfectScrollbar class="scroll-area">
          <VBDThuMucFilters :folders="VBDComboboxData.thuMuc"/>
        </VuePerfectScrollbar>
      </div>
      <div class="w-3/4">
        <div class="filter-container">
          <div class="vx-row mb-6">
            <div class="vx-col w-1/2">
              <label class="vs-input--label">Ngày tạo</label>
              <datepicker placeholder="Select Date" input-class="input-date"></datepicker>
            </div>
            <div class="vx-col w-1/2">
              <vs-input class="w-full" label="Số văn bản"/>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-1/2">
              <label class="vs-input--label">Loại văn bản</label>
              <v-select
                :options="listLoaiVanBan"
              ></v-select>
            </div>
            <div class="vx-col w-1/2">
              <vs-button class="mt-5">Tìm kiếm</vs-button>
            </div>
          </div>
        </div>
        <div class="cvct-table--container">
          <table class="works__table--content border-collapse">
            <tr>
              <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">Chức năng</th>
            </tr>

            <tbody>
            <tr :key="indextr" v-for="(tr, indextr) in VBDListReceive.details">
              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ tr.noiDung }}
              </td>
              <td class="p-2 border border-solid d-theme-border-grey-light text-center">
                <vs-button class="mr-4" size="small" @click="onDetailClick(tr.vbdId)">Chi tiết</vs-button>
                <vs-button class="mr-4" size="small" type="border" @click="startPhanLoai(tr.vbdId)">Phân loại
                </vs-button>
              </td>

            </tr>
            </tbody>
          </table>
        </div>
        <div class="vx-row no-gutter justify-end mt-5">
          <div class="vx-col">
            <vs-pagination
              :total="VBDListReceive.total"
              @change="onChangePage()"
              v-model="page"
            ></vs-pagination>
          </div>
        </div>
      </div>
    </div>
    <vs-prompt
      @vs-cancel="folderId = null"
      @vs-accept="acceptAlert"
      @vs-close="close"
      :vs-active.sync="activePrompt">
      <div class="con-exemple-prompt">
        <span>Chọn thư mục để gom</span>
        <v-select
          class="mt-3 w-full"
          size="small"
          label="name"
          v-model="folderId"
          :reduce="t => t.folderId"
          :options="VBDComboboxData.thuMuc"
        ></v-select>
      </div>
    </vs-prompt>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import VBDThuMucFilters from './components/VBDThuMucFilters';
  import Datepicker from 'vuejs-datepicker';
  import vSelect from 'vue-select';

  export default {
    components: {
      VuePerfectScrollbar,
      VBDThuMucFilters,
      vSelect,
      Datepicker
    },
    data () {
      return {
        page: 1,
        activePrompt: false,
        folderId: null,
        vbdId: null,
        settings: {
          maxScrollbarLength: 60,
          wheelSpeed: 0.30,
        },
        listLoaiVanBan: [
          'KIEM_HONG',
          'DAT_HANG',
          'PHUONG_AN',
          'CONG_NHAN_THANH_PHAM',
          'VAN_BAN_DEN',
          'VAN_THU_BAO_MAT',
        ]
      }
    },
    mounted () {
      this.vbdGetThuMuc();
    },
    computed: {
      ...mapGetters([
        'VBDListReceive',
        'VBDComboboxData'
      ])
    },
    methods: {
      ...mapActions([
        'vbdGetListReceive',
        'vbdGetThuMuc',
        'vbdMoveThuMuc'
      ]),
      onChangePage () {
        const params = {
          page: this.page,
          size: 15
        }
        this.vbdGetListReceive(params);
      },
      onDetailClick (id) {
        this.$router.push(`/vbd/edit?id=${id}`);
      },
      startPhanLoai (vbdId) {
        this.vbdId = vbdId;
        this.activePrompt = true;
      },
      acceptAlert () {
        const data = {
          vbdId: this.vbdId,
          folderId: this.folderId
        }
        this.vbdMoveThuMuc(data)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Phân loại văn bản đến',
              text: 'Phân loại thành công.'
            })
            this.activePrompt = false;
            this.folderId = null;
            this.onChangePage();
          })
          .catch(e => {
            this.$vs.notify({
              color: 'danger',
              title: 'Phân loại văn bản đến',
              text: `phân loại thất bại. ${e}`
            })
          })
      },
      close () {
        this.folderId = null;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cvct-table--container {
    font-size: .8em;
    overflow: auto;
  }

  .works__table--content {
    width: 100%;

    td, th {
      &:nth-child(3) {
        width: 200px;
      }
    }
  }

  .scroll-area {
    position: relative;
    height: 620px;
  }

  /deep/ .input-date {
    width: 100%;
  }
</style>
