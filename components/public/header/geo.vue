<template>
  <div class="m-geo">
    <i class="el-icon-location">{{$store.state.geo.position.city}}</i>
    <nuxt-link class="changeCity"
               to="/changeCity">切换城市</nuxt-link>
    [广州] 深圳 北京]
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () {
    console.log(this.$store.state)
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/public/header/topbar.scss";
a {
  color: #41b883;
  text-decoration: none;
}
</style>