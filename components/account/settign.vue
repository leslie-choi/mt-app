<template>
  <div class="user-info">
    <h1>个人信息</h1>
    <el-card>
      <div slot="header"
           class="clearfix">
        <span>账户设置</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo:{
        name: '',
        keyword: '',
        birthday: ''
      }
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped>
</style>