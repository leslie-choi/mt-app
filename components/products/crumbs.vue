<template>
  <div class="m-crumbs">
    <!-- 面包屑导航 城市加关键词 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path: '/'}">
        {{ $store.state.geo.position.city.replace('市','') }}美团
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">
          {{ $store.state.geo.position.city.replace('市','') }}{{ decodeURIComponent(keyword) }}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>
