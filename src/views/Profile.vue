<template>
  <div class="vx-col w-full mb-base">
    <vx-card title="Cập nhật thông tin cá nhân">
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input
            type="file"
            class="w-1/2"
            label="Chữ ký"
            accept="image/*"
            @change="selectFile($event)"
          />
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input
            class="w-1/2"
            label="Tên dưới chữ ký"
            :placeholder="AppActiveUser.name"
            v-model="fullName"
          />
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-button
            @click="submitProfile"
            class="mr-3 mb-2">Lưu
          </vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        showError: false,
        fullName: null,
        imgBase64: null
      }
    },
    computed: {
      ...mapGetters([
        'AppActiveUser'
      ])
    },
    mounted () {
    },
    methods: {
      ...mapActions([
        'updateProfile'
      ]),
      selectFile (e) {
        const files = e.target.files;
        if (files && files.length) {
          const reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = () => {
            this.file = reader.result;
          };
          reader.onerror = error => console.log(error);
        }
      },
      submitProfile () {
        const payload = {
          fullName: this.fullName || this.AppActiveUser.email,
          imgBase64: this.imgBase64 || this.AppActiveUser.chuKy,
          email: this.AppActiveUser.email,
          userId: this.AppActiveUser.userId
        }
        this.updateProfile(payload)
          .then(() => {
            this.$vs.notify({
              color: 'success',
              title: 'Thông tin cá nhân',
              text: `Cập nhật thành công.`
            });
          })
          .catch(e => {
            this.$vs.notify({
              color: 'danger',
              title: 'Thông tin cá nhân',
              text: `Cập nhật thất bại. ${e}`
            })
          })
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
