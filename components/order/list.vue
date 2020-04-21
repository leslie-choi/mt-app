<template>
  <div class="m-order">
    <ul>
      <li v-if="cur.length">
        <el-row v-for="item in cur"
                :key="item.index">
          <el-col :span="4">
            <img :src="item.img"
                 aitem.countlt="">
          </el-col>
          <el-col :span="10">
            <h4>{{item.name}}</h4>
            <p>数量： {{item.count}}</p>
          </el-col>

          <el-col :span="4">
            总价：￥{{item.total}}
          </el-col>
          <el-col :span="6">
            {{item.statusText}}
          </el-col>
        </el-row>
      </li>
      <li v-else
          class="empty">没有订单</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cur: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
img {
  width: 90px;
  height: 90px;
}
.m-order {
  .empty {
    text-align: center;
    padding: 30px;
  }
}
</style>
