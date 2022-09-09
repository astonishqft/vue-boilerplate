<template>
  <div id="userLayout">
    <div>头部</div>
    <router-view />

    <div>
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>

</style>
