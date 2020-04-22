<template>
  <div class="page-order">
    <el-row>
      <el-col :span="4"
              class="navbar">
        <Aside />
      </el-col>
      <el-col :span="19"
              class="table">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="全部订单"
                       name="all">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="待付款"
                       name="unpay">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="待使用"
                       name="unuse">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="待评价"
                       name="unreplay">
            <list :cur="cur" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Aside from '@/components/order/aside.vue'
import List from '@/components/order/list.vue'
export default {
  components: {
    List,
    Aside
  },
  props: {},
  data () {
    return {
      activeName: 'all',
      list: [],
      cur: []
    }
  },
  watch: {
    activeName: function (val) {
      this.cur = this.list.filter(item => {
        if (val === 'unpay') {
          return item.status === 0
        } else if (val === 'all') {
          return true
        } else {
          return false
        }
      })
    },
    list: function () {
      let val = this.name
      // this.cur = this.list.filter(item => {
      //   if (val === 'unpay') {
      //     return item.status === 0
      //   } else if (val === 'all') {
      //     return true
      //   } else {
      //     return false
      //   }
      // })
      this.cur = this.list
    },
    cur: function () {
      let val = this.name
      // this.cur = this.list.filter(item => {
      //   if (val === 'unpay') {
      //     return item.status === 0
      //   } else if (val === 'all') {
      //     return true
      //   } else {
      //     return false
      //   }
      // })
      this.cur = this.list
    }
  },
  computed: {},
  methods: {
    handleClick: function (tab) {
      this.activeName = tab.name
    },
    filterList: function () {
      this.list.filter(itme => {
        if (val === 'unpay') {
          return item.status === 0
        } else if (val === 'all') {
          return true
        } else {
          return false
        }
      })
    }
  },
  async asyncData (ctx) {
    let { status, data: { code, list } } = await ctx.$axios.post('/order/getOrders')
    // 
    console.log('获取订单')
    if (status == 200 && code == 0 && list.length) {
      return {
        list: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : '/logo.png',
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status == 0 ? '待付款' : '已付款'
          }
        }),
        cur: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : '/logo.png',
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status == 0 ? '待付款' : '已付款'
          }
        })
      }
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/order/index.scss";
</style>
