<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="todo__filters-container">
    <!-- all -->
    <div class="px-6 py-4">
      <div class="flex cursor-pointer"
           :class="{'text-primary': folderId == 'all'}"
           @click="applyTodoFilter('all')">
        <feather-icon icon="MailIcon"
                      :svgClasses="[{'text-primary stroke-current': folderId == 'all'}, 'h-6 w-6']"></feather-icon>
        <span class="text-lg ml-3">Tẩt cả thư mục</span>
      </div>
    </div>
    <vs-divider style="margin: 20px 0"></vs-divider>
    <!-- starred -->
    <div class="px-6 py-4">
      <h5>Danh sách thư mục</h5>

      <template v-for="filter in folders">
        <div class="flex mt-6 cursor-pointer" :class="{'text-primary': folderId == filter.folderId}"
             @click="applyTodoFilter(filter.folderId)" :key="filter.folderId">
          <feather-icon icon="FolderIcon"
                        :svgClasses="[{'text-primary stroke-current': folderId == filter.folderId}, 'h-6 w-6']"></feather-icon>
          <span class="text-lg ml-3">{{ filter.name }}</span>
        </div>
      </template>

    </div>

  </div>
</template>

<script>

  export default {
    props: {
      folders: {
        type: Array
      },
      folderId: {
        type: [Number, String]
      }
    },
    methods: {
      applyTodoFilter (thuMucId) {
        this.$emit('filter', thuMucId);
      },
    },
  }
</script>
