<template>
  <el-row>
    <el-col>
      <el-tabs v-model="tab" style="padding-top: 15px">
        <el-tab-pane label="Test" name="Test"><my-test /></el-tab-pane>
        <el-tab-pane label="Table" name="Table"><my-table /></el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-col>


  </el-row>

</template>

<script>
import MyTest from "@/components/MyTest";
import MyTable from "@/components/MyTable";

export default {
  name: 'HelloWorld',
  components: {
    MyTest,
    MyTable
  },
  data() {
    return {
      tab: 'Test',
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
