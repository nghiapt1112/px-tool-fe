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
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import VBDThuMucFilters from './components/VBDThuMucFilters'

  export default {
    components: {
      VuePerfectScrollbar,
      VBDThuMucFilters
    },
    data () {
      return {
        page: 1,
        settings: {
          maxScrollbarLength: 60,
          wheelSpeed: 0.30,
        },
      }
    },
    computed: {
      ...mapGetters([
        'VBDListReceive',
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
