<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Kiểm hỏng">
          <vx-card
            title="KEY-01"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Đặt hàng">
          <vx-card
            class="mb-3"
            title="KEY-02"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-03"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-04"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-05"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            title="KEY-06"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Phương án">
          <vx-card
            class="mb-3"
            title="KEY-07"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-08"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-09"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-10"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-warning"></div>Chờ duyệt</span></p>
          </vx-card>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card title="Thành Phẩm">
          <vx-card
            class="mb-3"
            title="KEY-11"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-success"></div>Đã duyệt</span></p>
          </vx-card>

          <vx-card
            class="mb-3"
            title="KEY-12"
            title-color="primary"
            subtitle="Tóm tắt nội dung">
            <p class="mb-3">Trạng thái: <span class="flex items-center px-2 py-1 rounded"><div
              class="h-3 w-3 rounded-full mr-2 bg-danger"></div>Hủy</span></p>
          </vx-card>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    async mounted () {
      const grant = await this.requestPermission()
      console.log(grant)
    },
    methods: {
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
