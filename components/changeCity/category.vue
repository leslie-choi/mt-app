<template>
  <div class="change-city">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list"
          :key="item.index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="item in block"
        :key="item.title"
        class="m-category-section">
      <dt :id="'city-'+item.title">{{item.title}}</dt>
      <dd class="u-city">
        <span v-for="c in item.city"
              :key="c"
              @click="change(c)">{{c}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pyjs from 'js-pinyin'
export default {
  components: {},
  props: {},
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    async getCities () {
      let self = this
      let blocks = []
      let { status, data: city } = await self.$axios.get('/geo/city')
      if (status === 200) {
        let p
        let c
        let d = {}
        // 将城市转换为拼音
        city.city.forEach(item => {
          p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
          c = p.charCodeAt(0)
          if (c > 96 && c < 123) {
            if (!d[p]) {
              d[p] = []
            }
            d[p].push(item.name)
          }
        })
        for (let [k, v] of Object.entries(d)) {
          blocks.push({
            title: k.toUpperCase(),
            city: v
          })
          blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
          self.block = blocks
        }
      }
      // console.log(status, city)
    },
    async change (c) {
      this.$store.dispatch('geo/setPosition', c)
      console.log(this.$store.state.geo.position, c)
      this.$router.push('/')
    }
  },
  created () { },
  mounted () {
    this.getCities()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/changeCity/category.scss";
.u-city {
  cursor: pointer;
}
</style>
