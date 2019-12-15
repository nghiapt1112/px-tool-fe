<template>
  <vx-card title="Danh sách người dùng">
    <vs-button class="mb-4" @click="$router.push(`nd/new`)">Thêm mới</vs-button>
    <div class="cvct-table--container">
      <table class="works__table--content border-collapse">
        <tr>
          <th class="p-2 border border-solid d-theme-border-grey-light">STT</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">ID</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Account</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Họ và tên</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Phòng ban</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Level</th>
          <th class="p-2 border border-solid d-theme-border-grey-light">Chức năng</th>
        </tr>

        <tbody>
        <tr :key="indextr" v-for="(tr, indextr) in NDList.details">
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ indextr + 1 }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.userId }}
          </td>
          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.email }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.fullName }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.phanXuong }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light">
            {{ tr.level }}
          </td>

          <td class="p-2 border border-solid d-theme-border-grey-light text-center">
            <vs-button class="mr-4" size="small" @click="onDetailClick(tr)">Chi tiết</vs-button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
    <div class="vx-row no-gutter justify-end mt-5">
      <div class="vx-col">
        <vs-pagination
          :total="NDList.total"
          @change="onChangePage()"
          v-model="page"
        ></vs-pagination>
      </div>
    </div>
  </vx-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        page: 1
      }
    },
    computed: {
      ...mapGetters([
        'NDList',
      ])
    },
    methods: {
      ...mapActions([
        'ndGetList'
      ]),
      onChangePage () {
        const params = {
          page: this.page,
          size: 15
        }
        this.ndGetList(params);
      },
      onDetailClick (user) {
        const { userId } = user;
        this.$router.push(`/nd/edit?id=${userId}`);
      },
      openDeleteConfirm (id) {
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
        this.vbdDeleteById(id)
          .then(() => {
            this.ndGetList();
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

    td {
      &:nth-child(1) {
        width: 50px;
      }

      &:nth-child(6) {
        width: 100px;
      }
    }
  }
</style>
