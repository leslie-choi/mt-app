<template>
  <div class="my-table">
    <h1>列表</h1>
    <!-- <el-table border
              style="width: 100%">
      <el-table-column fixed
                       prop="date"
                       label="日期"
                       width="150">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="120">
      </el-table-column>
      <el-table-column prop="province"
                       label="省份"
                       width="120">
      </el-table-column>
      <el-table-column prop="city"
                       label="市区"
                       width="120">
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"
                     type="text"
                     size="small">查看</el-button>
          <el-button type="text"
                     size="small">编辑</el-button>
        </template>
      </el-table-column>

      <slot name="index"></slot>
      <slot name="date"></slot>
      <slot name="province"></slot>
      <slot name="city"></slot>

    </el-table> -->
    <!-- {{title}} -->
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row);
    }
  },
  props: {
    title: String
  },
  data () {
    return {

    }
  }
}
</script>
