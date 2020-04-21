<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd v-for="item in list"
          @click="changeCity(item)"
          :key="item.id"
          class="hot-city">
        {{item.name === '市辖区' ? item.province : item.name}}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      list: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    async changeCity (item) {
      console.log(item)
      this.$store.dispatch('geo/setPosition', item.name == '市辖区' ? { positioin: '', city: item.province } : { positioin: '', city: item.name })
      // this.$store.dispatch('geo/setPosition', { position: '', city: c })
      this.$router.push('/')
    }
  },
  created () { },
  async mounted () {
    let { status, data: { hots } } = await this.$axios.get('/geo/hotcity')
    if (status === 200) {
      this.list = hots
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/changeCity/hot.scss";
.hot-city {
  cursor: pointer;
}
</style>
