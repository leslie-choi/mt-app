<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic" />
      </el-col>
      <el-col :span="6">
        <div class="m-life-login"
             v-if="!user">
          <h4><img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
                 alt=""></h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p>
            <nuxt-link to="/register">
              <el-button round
                         size="medium">注册</el-button>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/login">
              <el-button round
                         size="medium">立即登录</el-button>
            </nuxt-link>
          </p>
        </div>
        <div class="m-life-login"
             v-if="user">
          <h4><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587431588516&di=2f7d05ec4dcd7b6984c4180f24f4b955&imgtype=0&src=http%3A%2F%2Fimg.bq233.com%2Fkanqq%2Fpic%2Fupload%2F2018%2F0730%2F1532912905616893.jpg"
                 alt=""></h4>
          <p>
            <nuxt-link to="/order">
              <el-button round
                         size="medium">我的订单</el-button>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/account">
              <el-button round
                         size="medium">账户设置</el-button>
            </nuxt-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel" />
      </el-col>
      <el-col :span="7">
        <div class="m-life-music" />
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop" />
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
               alt="下载APP">
          <p>团美APP手机版</p>
          <h4><span class="red">1元起</span><em class="gary">吃喝玩乐</em></h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from './slider.vue'
export default {
  components: {
    Slider
  },
  data () {
    return {
      user: ''
    }
  },
  async mounted () {
    const { status, data: { user } } = await this.$axios.get('/users/getUser')
    if (status == 200) {
      this.user = user
      console.log(this.user)
    }
  }
}
</script>


<style lang="scss">
@import "@/assets/css/index/life.scss";
.m-life {
  img {
    width: 100px !important;
    height: 100px !important;
  }
}
</style>
