<template>
  <div class="user-info">
    <h2>个人信息</h2>
    <el-card>
      <div slot="header"
           class="clearfix">
        <span>账户设置</span>
      </div>
      <p>用户名：{{this.userInfo.username}}</p>
      <p>邮箱：{{this.userInfo.email}}</p>
      <p>生日：{{this.userInfo.birthday}}</p>
      <p>手机号：{{this.userInfo.telephone}}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        user: '',
        email: '',
        birthday: '',
        telephone: ''
      }
    }
  },
  computed: {

  },
  created () {

  },
  async mounted () {
    const { status, data: res } = await this.$axios.get('/users/getUser')
    if (status == 200) {
      this.userInfo = res
    }
    console.log(res)
  },
  methods: {

  }
}
</script>
<style lang="scss">
.user-info {
  p {
    margin-bottom: 15px;
  }
}
</style>