<template>
  <div>
    <mytable :title="tltle">
      <!-- <el-table-column prop="name"
                       label="姓名"
                       slot="name"
                       width="120">
      </el-table-column> -->
    </mytable>
  </div>
</template>

<script>
import mytable from '@/components/public/myTable.vue'
export default {
  components: {
    mytable
  },
  props: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎'
      }, {
        date: '2016-05-04',
        name: '王小虎'
      }, {
        date: '2016-05-01',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }],
      title: '233'
    }
  },
  layout: 'test',
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>
