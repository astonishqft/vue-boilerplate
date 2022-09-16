<template>
  <a-dropdown>
    <a class="ant-dropdown-link">
      <a-icon type="global" title="$t('navBar.lang)"/>
    </a>
    <a-menu slot="overlay" @click="changeLang">
      <a-menu-item v-for="lang in locales" :key="lang">
        {{ languageIcons[lang] }}{{ languageLabels[lang] }}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import i18nMixin from '@/store/i18n-mixin'

export default {
  name: 'SelectLang',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-drop-down'
    }
  },
  mixins: [i18nMixin],
  methods: {
    changeLang ({ key }) {
      this.setLang(key)
    }
  },
  data () {
    return {
      locales: ['zh-CN', 'en-US'],
      languageLabels: {
        'zh-CN': '简体中文',
        'en-US': 'English'
      },
      languageIcons: {
        'zh-CN': '🇨🇳',
        'en-US': '🇺🇸'
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
