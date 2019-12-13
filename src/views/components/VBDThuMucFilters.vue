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
      <div class="flex cursor-pointer" :class="{'text-primary': todoFilter == 'all'}" @click="applyTodoFilter('all')">
        <feather-icon icon="MailIcon"
                      :svgClasses="[{'text-primary stroke-current': todoFilter == 'all'}, 'h-6 w-6']"></feather-icon>
        <span class="text-lg ml-3">All</span>
      </div>
    </div>

    <vs-divider style="margin: 20px 0"></vs-divider>

    <!-- starred -->
    <div class="px-6 py-4">
      <h5>Filters</h5>

      <template v-for="filter in todoFilters">
        <div class="flex mt-6 cursor-pointer" :class="{'text-primary': todoFilter == filter.filter}"
             @click="applyTodoFilter(filter.filter)" :key="filter.filter">
          <feather-icon :icon="filter.icon"
                        :svgClasses="[{'text-primary stroke-current': todoFilter == filter.filter}, 'h-6 w-6']"></feather-icon>
          <span class="text-lg ml-3">{{ filter.filterName }}</span>
        </div>
      </template>

    </div>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        todoFilter: null,
        todoFilters: [
          { filterName: 'Starred', filter: 'starred', icon: 'FolderIcon' },
          { filterName: 'Important', filter: 'important', icon: 'FolderIcon' },
          { filterName: 'Done', filter: 'done', icon: 'FolderIcon' },
          { filterName: 'Trashed', filter: 'trashed', icon: 'FolderIcon' },
        ]
      }
    },
    methods: {
      applyTodoFilter (thuMucId) {
        this.$emit('filter', thuMucId);
      },
    },
  }
</script>
