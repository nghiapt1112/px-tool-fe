<template>
  <vx-card title="Văn bản đến">
    <div class="flex mb-4">
      <div class="w-1/4 mr-5">
        <VuePerfectScrollbar class="scroll-area">
          <VBDThuMucFilters/>
        </VuePerfectScrollbar>
      </div>
      <div class="w-3/4">
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
                <vs-button class="mr-4" size="small" type="border" @click="activePrompt = true">Phân loại</vs-button>
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
      @vs-cancel="val=''"
      @vs-accept="acceptAlert"
      @vs-close="close"
      :vs-active.sync="activePrompt">
      <div class="con-exemple-prompt">
        <span>Chọn thư mục để gom</span>
        <v-select
          class="mt-3 w-full"
          size="small"
          label="name"
          :reduce="t => t.id"
          :options="VBDComboboxData.chuyen"
        ></v-select>
      </div>
    </vs-prompt>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import VBDThuMucFilters from './components/VBDThuMucFilters'
  import vSelect from 'vue-select'

  export default {
    components: {
      VuePerfectScrollbar,
      VBDThuMucFilters,
      vSelect
    },
    data () {
      return {
        page: 1,
        activePrompt: false,
        val: '',
        settings: {
          maxScrollbarLength: 60,
          wheelSpeed: 0.30,
        },
      }
    },
    computed: {
      ...mapGetters([
        'VBDListReceive',
        'VBDComboboxData'
      ])
    },
    methods: {
      ...mapActions([
        'vbdGetListReceive'
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
      acceptAlert () {
      },
      close () {
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
</style>
