<template>
  <vx-card title="Danh mục dùng chung">
    <vs-tabs>
      <vs-tab v-if="AppActiveUser.type == 'ADMIN'" label="Mục đích sử dụng">
        <vs-button :disabled="showAddNewMDSD" class="mb-4 mt-4" @click="showAddNewMDSD = true">Thêm mới</vs-button>
        <div class="cvct-table--container">
          <table class="works__table--content border-collapse">
            <tr>
              <th class="p-2 border border-solid d-theme-border-grey-light">STT</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">ID</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">Tên Mục Đích Sử Dụng</th>
              <th class="p-2 border border-solid d-theme-border-grey-light"></th>
            </tr>

            <tbody>
            <tr v-if="showAddNewMDSD">
              <td class="p-2 border border-solid d-theme-border-grey-light" colspan="3">
                <vs-input
                  placeholder="Nhập tên mục đích sử dụng"
                  style="width: 100%"
                  size="small"
                  class="inputx"
                  v-model="ten"
                />
              </td>
              <td class="p-2 border border-solid d-theme-border-grey-light text-center">
                <vs-button class="mr-4"
                           size="small"
                           @click="addNewMDSD()">Thêm
                </vs-button>
                <vs-button class="mr-4"
                           size="small"
                           @click="cancelAddNewMDSD()"
                           color="danger">Hủy
                </vs-button>
              </td>
            </tr>
            <tr :key="indextr" v-for="(tr, indextr) in DMDCData.mdsd">
              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ indextr + 1 }}
              </td>

              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ tr.mdId }}
              </td>

              <td class="p-2 border border-solid d-theme-border-grey-light">
                <span v-if="!editMarkArrayMDSD[indextr]">{{ tr.ten }}</span>
                <vs-input
                  style="width: 100%"
                  v-if="editMarkArrayMDSD[indextr]"
                  size="small"
                  class="inputx"
                  @change="editValueArrayMDSD[indextr].ten = $event.target.value"
                  :value="editValueArrayMDSD[indextr].ten"/>
              </td>

              <td class="p-2 border border-solid d-theme-border-grey-light text-center">
                <vs-button v-show="!editMarkArrayMDSD[indextr]"
                           class="mr-4"
                           size="small"
                           @click="markEditMDSD(tr, indextr, true)"
                >
                  Chỉnh sửa
                </vs-button>
                <vs-button v-show="!editMarkArrayMDSD[indextr]"
                           class="mr-4"
                           size="small"
                           color="danger"
                           @click="confirmDeleteMDSD(tr.mdId)"
                >
                  Xóa
                </vs-button>
                <vs-button v-show="editMarkArrayMDSD[indextr]"
                           class="mr-4"
                           size="small"
                           @click="saveDataMDSD(indextr)">Lưu
                </vs-button>
                <vs-button v-show="editMarkArrayMDSD[indextr]"
                           class="mr-4"
                           size="small"
                           @click="markEditMDSD(tr, indextr, false)"
                           type="border"
                           color="danger">Hủy
                </vs-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </vs-tab>
      <vs-tab label="Thư mục Văn Bản Đến">
        <div class="cvct-table--container">
          <table class="works__table--content border-collapse">
            <tr>
              <th class="p-2 border border-solid d-theme-border-grey-light">STT</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">ID</th>
              <th class="p-2 border border-solid d-theme-border-grey-light">Tên Thư Mục</th>
              <th class="p-2 border border-solid d-theme-border-grey-light"></th>
            </tr>

            <tbody>
            <tr v-if="showAddNewThuMuc">
              <td class="p-2 border border-solid d-theme-border-grey-light" colspan="3">
                <vs-input
                  placeholder="Nhập tên thư mục"
                  style="width: 100%"
                  size="small"
                  class="inputx"
                  v-model="tenThuMuc"
                />
              </td>
              <td class="p-2 border border-solid d-theme-border-grey-light text-center">
                <vs-button class="mr-4"
                           size="small"
                           @click="addNewThuMuc()">Thêm
                </vs-button>
                <vs-button class="mr-4"
                           size="small"
                           @click="addNewThuMuc()"
                           color="danger">Hủy
                </vs-button>
              </td>
            </tr>
            <tr :key="indextr" v-for="(tr, indextr) in DMDCData.thuMuc">
              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ indextr + 1 }}
              </td>

              <td class="p-2 border border-solid d-theme-border-grey-light">
                {{ tr.folderId }}
              </td>

              <td class="p-2 border border-solid d-theme-border-grey-light">
                <span v-if="!editMarkArrayThuMuc[indextr]">{{ tr.name }}</span>
                <vs-input
                  style="width: 100%"
                  v-if="editMarkArrayThuMuc[indextr]"
                  size="small"
                  class="inputx"
                  @change="editValueArrayThuMuc[indextr].name = $event.target.value"
                  :value="editValueArrayThuMuc[indextr].name"/>
              </td>

              <td class="p-2 border border-solid d-theme-border-grey-light text-center">
                <vs-button v-show="!editMarkArrayThuMuc[indextr]"
                           class="mr-4"
                           size="small"
                           @click="markEditThuMuc(tr, indextr, true)"
                >
                  Chỉnh sửa
                </vs-button>
                <vs-button v-show="editMarkArrayThuMuc[indextr]"
                           class="mr-4"
                           size="small"
                           @click="saveDataThuMuc(indextr)">Lưu
                </vs-button>
                <vs-button v-show="editMarkArrayThuMuc[indextr]"
                           class="mr-4"
                           size="small"
                           @click="markEditThuMuc(tr, indextr, false)"
                           color="danger">Hủy
                </vs-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </vs-tab>
    </vs-tabs>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        showAddNewMDSD: false,
        editMarkArrayMDSD: [],
        editValueArrayMDSD: [],
        ten: '',
        showAddNewThuMuc: false,
        editMarkArrayThuMuc: [],
        editValueArrayThuMuc: [],
        name: ''
      }
    },
    computed: {
      ...mapGetters([
        'DMDCData',
        'AppActiveUser'
      ])
    },
    mounted () {
      this.dmdcGetListMDSD();
      this.dmdcGetListThuMuc();
    },
    methods: {
      ...mapActions([
        'dmdcGetListMDSD',
        'dmdcUpdateMDSD',
        'dmdcGetListThuMuc',
        'dmdcUpdateThuMuc',
        'dmdcDeleteMDSD'
      ]),
      saveDataMDSD (index) {
        const data = Object.assign({}, this.editValueArrayMDSD[index]);
        this.dmdcUpdateMDSD(data)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Chỉnh sửa bản ghi',
              text: 'Chỉnh sửa thành công.'
            })
            this.dmdcGetListMDSD();
            this.markEditMDSD(null, index, false);
          })
          .catch(e => {
            this.$vs.notify({
              color: 'danger',
              title: 'Chỉnh sửa bản ghi',
              text: `Chỉnh sửa bản ghi thất bại. ${e}`
            })
          })
      },
      markEditMDSD (data, index, isEdit) {
        this.$set(this.editMarkArrayMDSD, index, isEdit);
        isEdit && this.$set(this.editValueArrayMDSD, index, Object.assign({}, data));
        !isEdit && this.$set(this.editValueArrayMDSD, index, {});
      },
      addNewMDSD () {
        this.dmdcUpdateMDSD({ ten: this.ten })
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Thêm mới bản ghi',
              text: 'Thêm thành công.'
            })
            this.dmdcGetListMDSD();
            this.cancelAddNewMDSD();
          })
          .catch(e => {
            this.$vs.notify({
              color: 'danger',
              title: 'Thêm bản ghi',
              text: `Thêm bản ghi thất bại. ${e}`
            })
          })
      },
      cancelAddNewMDSD () {
        this.showAddNewMDSD = false;
        this.ten = '';
      },
      saveDataThuMuc (index) {
        const data = Object.assign({}, this.editValueArrayThuMuc[index]);
        this.dmdcUpdateThuMuc(data)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Chỉnh sửa bản ghi',
              text: 'Chỉnh sửa thành công.'
            })
            this.dmdcGetListThuMuc();
            this.markEditThuMuc(null, index, false);
          })
          .catch(e => {
            this.$vs.notify({
              color: 'danger',
              title: 'Chỉnh sửa bản ghi',
              text: `Chỉnh sửa bản ghi thất bại. ${e}`
            })
          })
      },
      markEditThuMuc (data, index, isEdit) {
        this.$set(this.editMarkArrayThuMuc, index, isEdit);
        isEdit && this.$set(this.editValueArrayThuMuc, index, Object.assign({}, data));
        !isEdit && this.$set(this.editValueArrayThuMuc, index, {});
      },
      addNewThuMuc () {
        this.dmdcUpdateThuMuc({ name: this.name })
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Thêm mới bản ghi',
              text: 'Thêm thành công.'
            })
            this.dmdcGetListThuMuc();
            this.addNewThuMuc();
          })
          .catch(e => {
            this.$vs.notify({
              color: 'danger',
              title: 'Thêm bản ghi',
              text: `Thêm bản ghi thất bại. ${e}`
            })
          })
      },
      addNewThuMuc () {
        this.showAddNewThuMuc = false;
        this.name = '';
      },
      confirmDeleteMDSD (id) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa bản ghi này?',
          acceptText: 'Đồng ý',
          cancelText: 'Đóng',
          accept: () => {
            this.acceptDelete(id);
          }
        })
      },
      acceptDelete (id) {
        this.dmdcDeleteMDSD(id)
          .then(() => {
            this.dmdcGetListMDSD();
            this.$vs.notify({
              color: 'success',
              title: 'Xóa Bản Ghi',
              text: 'Xóa bản ghi thành công.'
            })
          }).catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Xóa Bản Ghi',
            text: `Xóa bản ghi thất bại. ${e}`
          })
        })
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
      &:nth-child(1) {
        width: 50px;
      }

      &:nth-child(2) {
        width: 100px;
      }

      &:nth-child(4) {
        width: 200px;
      }
    }
  }
</style>
