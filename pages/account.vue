<template>
  <div>
    <el-col :span="4"
            class="navbar">
      <Aside />
    </el-col>
    <el-col :span="19"
            class="table">
      <Setting />
    </el-col>
  </div>
</template>

<script>
import Setting from '@/components/account/setting.vue'
import Aside from '@/components/order/aside.vue'

export default {
  components: {
    Aside,
    Setting
  },
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

  }
}
</script>
<style scoped>
</style>