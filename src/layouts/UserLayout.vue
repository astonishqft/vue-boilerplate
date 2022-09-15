<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="user-layout-lang">
        <select-lang />
      </div>
      <div class="user-layout-content">
        <div class="top">
          <div class="desc">
            {{ $t('layouts.userLayout.title') }}
          </div>
        </div>

        <router-view />

        <div class="footer">
          <div class="links">
            <a href="_self">帮助</a>
            <a href="_self">隐私</a>
            <a href="_self">条款</a>
          </div>
          <div class="copyright">
            Copyright &copy; 2018 vueComponent
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectLang from '@/components/SelectLang.vue'
export default {
  name: 'UserLayout',
  components: {
    SelectLang
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  #userLayout.user-layout-wrapper {
    height: 100%;
    .container {
      height: 100%;
      min-height: 100%;
      background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
      background-size: 100%;
      position: relative;
      .user-layout-lang {
        height: 40px;
        line-height: 44px;
        width: 100%;
        text-align: right;
      }
      .user-layout-content {
        padding: 32px 0 24px;
        .top {
          text-align: center;
        }
        .main {
          min-width: 260px;
          width: 368px;
          margin: 0 auto;
        }
        .footer {
          // position: absolute;
          width: 100%;
          bottom: 0;
          padding: 0 16px;
          margin: 48px 0 24px;
          text-align: center;

          .links {
            margin-bottom: 8px;
            font-size: 14px;
            a {
              color: rgba(0, 0, 0, 0.45);
              transition: all 0.3s;
              &:not(:last-child) {
                margin-right: 40px;
              }
            }
          }
          .copyright {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
