<template>
  <vx-card title="Văn bản đến">
    <div class="flex mb-4">
      <div class="w-1/4 mr-5 filter-folder-area">
        <VuePerfectScrollbar class="scroll-area">
          <VBDThuMucFilters
            @filter="changeFolder($event)"
            :folderId="searchCondition.folderId"
            :folders="VBDComboboxData.thuMuc"/>
        </VuePerfectScrollbar>
      </div>
      <div class="w-3/4">
        <div class="filter-container">
          <div class="vx-row mb-6">
            <div class="vx-col w-1/2">
              <label class="vs-input--label">Ngày tạo</label>
              <datepicker placeholder="Ngày Tạo" input-class="input-date" :language="vi"
                          v-model="searchCondition.date"></datepicker>
            </div>
            <div class="vx-col w-1/2">
              <vs-input class="w-full" label="Số văn bản" v-model="searchCondition.soVB"/>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-1/2">
              <label class="vs-input--label">Loại văn bản</label>
              <v-select
                v-model="searchCondition.loaiVb"
                label="name"
                :reduce="t => t.id"
                :options="listLoaiVanBan"
              ></v-select>
            </div>
            <div class="vx-col w-1/2">
              <vs-button class="mt-5" @click="search()">Tìm kiếm</vs-button>
            </div>
          </div>
        </div>
        <div class="cvct-table--container">
          <table class="works__table--content border-collapse">
            <tr>
              <th class="p-2 border border-solid d-theme-border-grey-light">Số VB</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">Nội dung</th>
              <th class="p-1 border border-solid d-theme-border-grey-light">Ngày tạo</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">Chức năng</th>
            </tr>

            <tbody>
            <tr :key="indextr" v-for="(tr, indextr) in VBDListReceive.details">
              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ tr.soPa }}
              </td>
              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ tr.noiDung }}
              </td>
              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ tr.ngayGui }}
              </td>
              <td class="p-2 border border-solid d-theme-border-grey-light">
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
  import {en, vi} from "vuejs-datepicker/dist/locale";

  export default {
    components: {
      VuePerfectScrollbar,
      VBDThuMucFilters,
      vSelect,
      Datepicker
    },
    data () {
      return {
        vi: vi,
        en: en,
        searchCondition: {
          date: null,
          soVB: null,
          loaiVb: null,
          folderId: null,
        },
        page: 1,
        activePrompt: false,
        folderId: null,
        vbdId: null,
        settings: {
          maxScrollbarLength: 60,
          wheelSpeed: 0.30,
        },
        listLoaiVanBan: [
          {id: 'KIEM_HONG', name: 'Kiểm hỏng'},
          {id: 'DAT_HANG', name: 'Đặt hàng'},
          {id: 'PHUONG_AN', name: 'Phương án'},
          {id: 'CONG_NHAN_THANH_PHAM', name: 'Công nhận thành phẩm'},
          {id: 'VAN_BAN_DEN', name: 'Văn bản đến'},
          {id: 'VAN_THU_BAO_MAT', name: 'Văn thư bảo mật'},
        ]
      }
    },
    created () {
      const { query: { folderId } } = this.$route;
      const folderIdValue = folderId === 'all' ? 0 : folderId;
      this.$set(this.searchCondition, 'folderId', folderIdValue);
    },
    mounted () {
      const { query: { folderId } } = this.$route;
      !folderId && history.pushState('', '', `?folderId=all`);
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
      clearSearch () {
        this.$set(this.searchCondition, 'date', null);
        this.$set(this.searchCondition, 'soVB', null);
        this.$set(this.searchCondition, 'loaiVb', null);
      },
      changeFolder (folderId) {
        const folderIdValue = folderId === 'all' ? 0 : folderId;
        history.pushState('', '', `?folderId=${folderId}`);
        this.$set(this.searchCondition, 'folderId', folderIdValue);
        this.clearSearch();
        this.search();
      },
      search () {
        this.onChangePage();
      },
      onChangePage () {
        const { date } = this.searchCondition;
        if (date) {
          date.setHours(0,0,0,0);
        }
        const params = {
          ...this.searchCondition,
          page: this.page,
          size: 15,
          date: date ? date.getTime() : null,
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
            this.search();
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
    font-size: 1em;
    overflow: auto;
  }

  .works__table--content {
    width: 100%;

    td, th {
      &:nth-child(1) {
        width: 100px;
      }
      &:nth-child(3) {
        width: 200px;
      }
      &:nth-child(4) {
        width: 250px;
      }
    }
  }

  .filter-folder-area {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    padding-right: 20px;
  }

  .scroll-area {
    position: relative;
    height: 100%;
  }

  /deep/ .input-date {
    width: 100%;
  }
</style>
