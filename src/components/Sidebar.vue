/**
 * 侧栏导航组件
 */

<template>
  <div class="container-side">
    <el-menu :default-active="defaultActive" :router="true" @select="onSelected">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>用户</template>
        <el-menu-item index="/main/manage">修改用户信息</el-menu-item>
        <el-menu-item index="/classroom-manage">添加用户</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-star-off"></i>访问人员</template>
        <el-menu-item index="/role-manage">查询访问人员</el-menu-item>
        <el-menu-item index="/teacher-manage">拒绝人员访问</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-edit"></i>论坛</template>
        <el-menu-item index="/role-manage">论坛管理</el-menu-item>
        <el-menu-item index="/teacher-manage">讨论管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>数据库</template>
        <el-menu-item index="/role-manage">数据管理</el-menu-item>
        <el-menu-item index="/teacher-manage">数据库管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    let active = window.sessionStorage.defaultActive || '/campus-manage'
    return {
      defaultActive: active
    }
  },
  methods: {
    onSelected (index) {
      window.sessionStorage.defaultActive = index
    }
  }
}
</script>

<style scoped>
.container-side {
  background-color:white;
  display:block;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  height:100%;
}
</style>