<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import themeConfig from '@/../themeConfig.js'
  import { mapActions } from 'vuex';

  export default {
    watch: {
      '$store.state.theme' (val) {
        this.toggleClassInBody(val);
      }
    },
    created () {
      this.getUserProfile().catch(() => {
        this.$router.push('/pages/login');
      })
    },
    methods: {
      ...mapActions([
        'getUserProfile'
      ]),
      toggleClassInBody (className) {
        if (className == 'dark') {
          if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
          document.body.classList.add('theme-dark');
        } else if (className == 'semi-dark') {
          if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
          document.body.classList.add('theme-semi-dark');
        } else {
          if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
          if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
        }
      },
      handleWindowResize (event) {
        this.$store.dispatch('updateWindowWidth', event.currentTarget.innerWidth);
      },
    },
    mounted () {
      this.toggleClassInBody(themeConfig.theme)
      this.$nextTick(() => {
        window.addEventListener('resize', this.handleWindowResize);
      });
      this.$store.dispatch('updateWindowWidth', window.innerWidth);
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleWindowResize);
    },
  }

</script>
