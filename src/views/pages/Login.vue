<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <form v-on:submit.prevent="login">
                <div class="p-8">
                  <div class="vx-card__title mb-8">
                    <h4 class="mb-4">Phương Án Số</h4>
                    <p>Hãy đăng nhập để sử dụng hệ thống.</p>
                  </div>
                  <vs-input
                    name="email"
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Tên đăng nhập"
                    v-model="userName"
                    v-on:keyup.enter="login"
                    class="w-full no-icon-border"/>

                  <vs-input
                    type="password"
                    name="password"
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Mật khẩu"
                    v-model="password"
                    class="w-full mt-6 no-icon-border"/>

                  <vs-alert
                    v-if="showError"
                    class="mt-3"
                    :active.sync="showError"
                    color="danger"
                    closable icon-pack="feather"
                    close-icon="icon-x">
                    {{loginError}}
                  </vs-alert>

                  <div class="flex flex-wrap justify-between my-5">
                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Ghi nhớ đăng nhập</vs-checkbox>
                    <router-link to="#">Quên mật khẩu?</router-link>
                  </div>
                  <vs-button @click="login">Đăng Nhập</vs-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        userName: '',
        password: '',
        checkbox_remember_me: false,
        showError: false
      }
    },
    computed: {
      ...mapGetters([
        'AUTHScreenData'
      ]),
      loginError: {
        get () {
          return this.AUTHScreenData.loginError
        }
      }
    },
    methods: {
      ...mapActions([
        'authLogin',
        'getUserProfile'
      ]),
      login () {
        this.authLogin({
          userName: this.userName,
          password: this.password
        })
          .then(() => {
            this.getUserProfile();
            this.$router.push('/cvct');
          })
          .catch(() => {
            this.showError = true;
          })
      }
    }
  }
</script>

<style lang="scss">
  #page-login {
    .social-login {
      .bg-facebook {
        background-color: #1551b1;
      }

      .bg-twitter {
        background-color: #00aaff;
      }

      .bg-google {
        background-color: #4285F4;
      }

      .bg-github {
        background-color: #333;
      }
    }
  }
</style>
