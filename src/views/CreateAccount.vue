<template>
  <div class="vx-col w-full mb-base">
    <vx-card :title="isCreate ? 'Thêm mới người dùng' : 'Thông tin người dùng'">
      <div class="vx-row mb-6">
        <div class="vx-col w-1/2">
          <vs-input
            class="w-full"
            label="Tên tài khoản đăng nhập"
            @change="changeData('email', $event.target.value)"
            :value="NDData.email"/>
        </div>
        <div class="vx-col w-1/2">
          <label class="vs-input--label">Level</label>
          <v-select
            size="small"
            label="authority"
            @input="changeData('level', $event)"
            :reduce="t => t.roleId"
            :options="NDComboboxData.level"
            :value="NDData.level"
          ></v-select>
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-1/2">
          <vs-input
            class="w-full"
            label="Họ và tên"
            @change="changeData('fullName', $event.target.value)"
            :value="NDData.fullName"/>
        </div>
        <div class="vx-col w-1/2">
          <label class="vs-input--label">Phân quyền hệ thống</label>
          <v-select
            size="small"
            label="name"
            @input="changeData('phanXuong', $event)"
            :reduce="t => t.phongBanId"
            :options="NDComboboxData.phongBan"
            :value="NDData.phanXuong"
          ></v-select>
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-1/2">
          <vs-input
            class="w-full"
            type="password"
            autocomplete="new-password"
            label="Mật khẩu"
            v-model="password"/>
        </div>
        <div class="vx-col w-1/2">
          <vs-input
            class="w-full"
            type="text"
            autocomplete="new-password"
            label="Tên định danh chức vụ"
            v-model="NDData.alias"/>
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input
            type="file"
            class="w-1/2"
            label="Chữ ký"
            accept="image/*"
            @change="selectFile($event)"
          />
          <!-- <label class="vs-input--label">Chữ ký</label>
          <input
          ref="fileInput"
          style="display: none"
          type="file"
          multiple
          @change="selectFile($event)">
          <vx-input-group class="w-1/2">
            <template slot="prepend">
              <div class="prepend-text btn-addon">
                <vs-button @click="$refs.fileInput.click()" color="primary">Chọn tệp</vs-button>
              </div>
            </template>
            <vs-input
              size="small"
              readonly="true"
              placeholder="Chọn tệp đính kèm"
            />
          </vx-input-group> -->
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button @click="onSubmit()" v-show="showFields(NDData)" class="mr-3 mb-2">Lưu</vs-button>
          <vs-button @click="openDeleteConfirm()" v-show="showFields(NDData)" class="mr-3 mb-2" color="danger">Xóa</vs-button>
        </div>
      </div>
    </vx-card>
  </div>
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
        userId: null,
        showError: false,
        isCreate: false,
        imgBase64: null,
        password: null,
        alias: null
      }
    },
    computed: {
      ...mapGetters([
        'NDData',
        'NDComboboxData',
        'AppActiveUser'
      ]),
    },
    async mounted () {
          const { query: { id } } = this.$route;
          this.isCreate = !id;
          this.userId = id;
          await this.ndGetLevel();
          await this.ndGetPhongBan();
          id && this.ndGetById(id);
        },
    methods: {
      ...mapActions([
        'ndGetLevel',
        'ndGetPhongBan',
        'ndUpdateData',
        'ndSaveData',
        'ndDeleteUser',
        'ndGetById'
      ]),
      resetData () {
        const data = {
          filesSelected: [],
        };
        this.ndUpdateData(data);
        return true;
      },
      changeData (fieldName, value) {
        const data = Object.assign({}, this.NDData);
        data[fieldName] = value;
        this.ndUpdateData(data);
      },
      selectFile (e) {
        const files = e.target.files;
        if (files && files.length) {
          const reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = () => {
            this.imgBase64 = reader.result;
          };
          reader.onerror = error => console.log(error);
        }
      },
      onSubmit () {
        const data = Object.assign({}, this.NDData);
        data.imgBase64 = this.imgBase64 || this.NDData.signImg;
        data.password = this.password || null;
        this.ndSaveData(data)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Lưu Người Dùng',
              text: `Lưu thành công.`
            });
            this.$router.push(`/nd`);
          })
          .catch((e) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Lưu Người Dùng',
              text: `Lưu thất bại. ${e}`
            })
          })
      },
      openDeleteConfirm () {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Xác nhận xóa`,
          text: 'Bạn có chắc muốn xóa ?',
          acceptText: 'Đồng ý',
          cancelText: 'Đóng',
          accept: this.acceptDelete
        })
      },
      acceptDelete () {
        this.ndDeleteUser(this.userId)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Xóa Người Dùng',
              text: `Xóa Người Dùng thành công.`
            });
            this.$router.push(`/nd`);
          })
          .catch((e) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Xóa Người Dùng',
              text: `Xóa Người Dùng thất bại. ${e}`
            })
          })
      },
      showFields(userDetail){
        if (userDetail.email=='admin' || !userDetail.level || !userDetail.phanXuong) {
          return false;
        }
        return true;
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

    td {
      &:nth-child(1), &:nth-child(5) {
        min-width: 100px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
