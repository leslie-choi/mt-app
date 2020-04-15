 <template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3"
              class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
             alt="美团">
      </el-col>
      <el-col class="center"
              :span="15">
        <div class="wrapper">
          <el-input placeholder="搜索商家或者地点"
                    v-model="search"
                    @focus="focus"
                    @input="input"
                    @blur="blur" />
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace"
              style="overflow:hidden;"
              v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)"
                :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
              <!-- <a :href="'/products'">{{ item.name }}</a> -->
            </dd>
          </dl>
          <dl class="searchList"
              v-if="isSearchList">
            <dd v-for="(item,idx) in searchList"
                :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
              <!-- <a :href="'/products'">{{ item.name }}</a> -->
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)"
             :key="idx"
             :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}
          </a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/"
                       class=" bottomMenu takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"
                       class="bottomMenu movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"
                       class="bottomMenu hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"
                       class="bottomMenu apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"
                       class="bottomMenu business">商家入驻/公寓</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6"
              class="right">
        <ul class="security">
          <li><i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li><i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li><i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  components: {},
  props: {},
  data () {
    return {
      search: '',
      isFocus: false,
      hotPlace: [],
      searchList: []
    };
  },
  watch: {},
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.search
    },
    isSearchList: function () {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus: function () {
      this.isFocus = true
    },
    blur: function () {
      let self = this;
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    input: _.debounce(async function () {
      let self = this
      console.log(self.$store.state.geo.position.city)
      // console.log(self.$store.state.geo.position.city)
      // let city = '广州'
      let city = self.$store.state.geo.position.city.replace('市', '')
      self.searchList = []
      let { status, data: { top } } = await self.$axios.get('/search/top', {
        params: {
          input: self.search,
          city
        }
      })
      self.searchList = top.slice(0, 10)
    }, 300)
  },
  created () { },
  mounted () {

  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/public/header/search.scss";
</style>