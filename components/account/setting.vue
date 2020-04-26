<template>
  <div class="user-info">
    <h2>个人信息</h2>
    <el-card>
      <div slot="header"
           class="clearfix">
        <span>账户设置</span>
        <el-button size="mini"
                   style="float:right;margin-right:20px;"
                   type="primary"
                   @click="setAccount">修改</el-button>
      </div>
      <p>用户名：{{this.userInfo.username}}</p>
      <p>邮箱：{{this.userInfo.email}}</p>
      <p>生日：{{this.userInfo.birthday}}</p>
      <p>手机号：{{this.userInfo.telephone}}</p>
    </el-card>
    <el-dialog :visible.sync="settingVisible"
               width="25%"
               title="修改个人信息">
      <el-form :model="ruleForm"
               label-width="100px"
               inline>
        <el-form-item label="用户名："
                      prop="username">
          <el-input v-model="ruleForm.username"
                    prefix-icon="iconfont el-icon-user"
                    :placeholder="this.userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱："
                      prop="email">
          <el-input v-model="ruleForm.email"
                    prefix-icon="iconfont el-icon-message"
                    :placeholder="this.userInfo.email" />
        </el-form-item>
        <el-form-item label="生日："
                      prop="birthday">
          <el-date-picker v-model="ruleForm.birthday"
                          type="date"
                          @change="selectDate"
                          placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="手机号："
                      prop="telephone">
          <el-input v-model="ruleForm.telephone"
                    :placeholder="ruleForm.telephone"
                    prefix-icon="icofont el-icon-mobile-phone" />
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="settingVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="confirmChange">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from '@/server/interface/utils/axios'
export default {
  data () {
    return {
      userInfo: {
        _id: '',
        username: '',
        email: '',
        birthday: '',
        telephone: ''
      },
      settingVisible: false,
      ruleForm: {
        username: '',
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
  },
  methods: {
    setAccount () {
      this.settingVisible = true
    },
    selectDate (date) {
      this.ruleForm.birthday = date
    },
    async confirmChange () {
      const obj = {
        _id: this.userInfo._id,
        username: this.ruleForm.username == '' ? this.userInfo.username : this.ruleForm.username,
        email: this.ruleForm.email == '' ? this.userInfo.email : this.ruleForm.email,
        birthday: this.ruleForm.birthday == '' ? '' : this.ruleForm.birthday,
        telephone: this.ruleForm.telephone == '' ? '' : this.ruleForm.telephone
      }
      let res = await this.$axios.post('/users/setting', obj)
      if (res.status !== 200) return this.$message({
        message: '网络错误！',
        type: 'error'
      })
      if (res.data.code == 0) {
        this.settingVisible = false
        return this.$message({
          type: 'success',
          message: res.data.msg
        })
      }
      // const { status2, data: res2 } = await this.$axios.get('/users/getUser')
      // status2 == 200 ? this.userInfo = res : null
    }
  }
}
</script>
<style lang="scss">
.user-info {
  p {
    margin-bottom: 15px;
  }
  .el-input__inner {
    padding: 0 35px;
  }
}
</style>