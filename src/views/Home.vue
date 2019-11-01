<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Kiểm hỏng">
          <template v-for="item in kiemHongs">
            <vx-card
              class="mt-3"
              :title="item.ma"
              title-color="primary"
              :subtitle="item.noiDung">
              <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
                class="h-3 w-3 rounded-full mr-2 bg-warning"></div>{{MAP_STATUS[item.status]}}</span></p>
            </vx-card>
          </template>
          <template v-if="!kiemHongs.length">
            <span class="text-warning italic">Chưa có dữ liệu</span>
          </template>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Đặt hàng">
          <template v-for="item in datHangs">
            <vx-card
              class="mt-3"
              :title="item.ma"
              title-color="primary"
              :subtitle="item.noiDung">
              <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
                class="h-3 w-3 rounded-full mr-2 bg-warning"></div>{{MAP_STATUS[item.status]}}</span></p>
            </vx-card>
          </template>
          <template v-if="!datHangs.length">
            <span class="text-warning italic">Chưa có dữ liệu</span>
          </template>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Phương án">
          <template v-for="item in phuongAns">
            <vx-card
              class="mt-3"
              :title="item.ma"
              title-color="primary"
              :subtitle="item.noiDung">
              <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
                class="h-3 w-3 rounded-full mr-2 bg-warning"></div>{{MAP_STATUS[item.status]}}</span></p>
            </vx-card>
          </template>
          <template v-if="!phuongAns.length">
            <span class="text-warning italic">Chưa có dữ liệu</span>
          </template>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Thành Phẩm">
          <template v-for="item in congNhanThanhPhams">
            <vx-card
              class="mt-3"
              :title="item.ma"
              title-color="primary"
              :subtitle="item.noiDung">
              <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
                class="h-3 w-3 rounded-full mr-2 bg-warning"></div>{{MAP_STATUS[item.status]}}</span></p>
            </vx-card>
          </template>
          <template v-if="!congNhanThanhPhams.length">
            <span class="text-warning italic">Chưa có dữ liệu</span>
          </template>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  const MAP_TYPES = {
    'PHUONG_AN': 'Phương án',
    'KIEM_HONG': 'Kiểm hỏng',
    'DAT_HANG': 'Đặt hàng',
    'CONG_NHAN_THANH_PHAM': 'C.N thành phẩm',
  };

  const MAP_STATUS = {
    'DANG_CHO_DUYET': 'Đang chờ duyệt',
    'DA_DUYET': 'Đã duyệt',
    'KHONG_DUYET': 'Không duyệt',
  };

  export default {
    data () {
      return {
        MAP_TYPES,
        MAP_STATUS
      }
    },
    computed: {
      ...mapGetters([
        'DASHBOARDData',
      ]),
      kiemHongs: {
        get () {
          if (this.DASHBOARDData && this.DASHBOARDData.length) {
            const data = this.DASHBOARDData.filter(i => i.type === 'KIEM_HONG');
            return data;
          }
          return [];
        }
      },
      datHangs: {
        get () {
          if (this.DASHBOARDData && this.DASHBOARDData.length) {
            const data = this.DASHBOARDData.filter(i => i.type === 'DAT_HANG');
            return data;
          }
          return [];
        }
      },
      congNhanThanhPhams: {
        get () {
          if (this.DASHBOARDData && this.DASHBOARDData.length) {
            const data = this.DASHBOARDData.filter(i => i.type === 'CONG_NHAN_THANH_PHAM');
            return data;
          }
          return [];
        }
      },
      phuongAns: {
        get () {
          if (this.DASHBOARDData && this.DASHBOARDData.length) {
            const data = this.DASHBOARDData.filter(i => i.type === 'PHUONG_AN');
            return data;
          }
          return [];
        }
      }

    },
    async mounted () {
      const grant = await this.requestPermission();
      this.dashboardGetList();
    },
    methods: {
      ...mapActions([
        'dashboardGetList',
      ]),
      checkNotification () {
        return 'Notification' in window
      },
      checkServiceWorker () {
        return 'serviceWorker' in navigator
      },
      checkPushManager () {
        return 'PushManager' in window
      },
      async requestPermission () {
        return Notification.requestPermission();
      }
    }
  }
</script>
