<template>
  <div>
    <el-col class="order-aside">
      <h3 style="color:#13D1BE;margin-bottom:15px;">我的美团</h3>
      <dl @click="showOrder">
        <dt>我的订单</dt>
        <dd>全部订单<i class="el-icon-arrow-right" /></dd>
        <dd>待付款<i class="el-icon-arrow-right" /></dd>
        <dd>待使用<i class="el-icon-arrow-right" /></dd>
      </dl>
      <dl @click="showCollect">
        <dt>我的收藏</dt>
        <dd>收藏的商家<i class="el-icon-arrow-right" /></dd>
        <dd>收藏的团购<i class="el-icon-arrow-right" /></dd>
      </dl>
      <dl @click="showTicket">
        <dt>抵用券</dt>
        <dd>可用券<i class="el-icon-arrow-right" /></dd>
        <dd>失效券<i class="el-icon-arrow-right" /></dd>
      </dl>
      <dl @click="userSetting">
        <dt>个人信息</dt>
        <dd>账户设置<i class="el-icon-arrow-right" /></dd>
      </dl>
    </el-col>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    showOrder () {
      console.log('显示订单')
    },
    showCollect () {
      console.log('显示收藏')
    },
    showTicket () {
      console.log('显示优惠券')
    },
    userSetting () {
      console.log('用户设置')
    }
  }
}
</script>
<style lang="scss" scoped>
.order-aside {
  background: #fff;
  // border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-sizing: border-box;
  padding-bottom: 20px;
  font-size: 16px;
  color: #222;
  padding: 30px 20px 0 30px;

  dd {
    cursor: pointer;
    font-size: 14px;
    color: #666;
    margin: 15px 0;

    > i {
      float: right;
      margin-top: 3px;
    }
  }
  dd:hover {
    color: #13d1be;
  }
}
</style>