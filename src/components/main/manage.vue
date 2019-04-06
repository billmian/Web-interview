<template>
  <div>
    <c-breadcrumb :items="breadcrumb"></c-breadcrumb>
    <div>
      <el-row type="flex" :gutter="10">
        <el-col :span="2">
          <span class="textspan">用户</span>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="请输入用户" v-model="searchInput" ></el-input>
        </el-col>
        <el-col :span="2">
          <el-button>查询</el-button>
        </el-col>
        <el-col :span="2">
          <el-button >添加</el-button>
        </el-col>
      </el-row>
      <div style="margin-top: 20px;">
        <el-table >
          <el-table-column type="index" ></el-table-column>
          <el-table-column prop="name" ></el-table-column>
          <el-table-column  fixed="right"  width="200">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import CBreadcrumb from '../../components/Breadcrumb'
export default {
  name: 'campus-manage',
  data () {
    return {
      breadcrumb: [
        { label: '用户' },
        { label: '修改用户信息' }
      ],
      searchInput: '',
      campusData: [],
      campusDataLoading: true,
      addCampusDialogVisible: false,
      addCampusForm: {
        name: '',
        isLoading: false
      },
      addSchoolDialogVisible: false,
      addSchoolForm: {
        campusId: '',
        name: '',
        isLoading: false
      },
      delCampusDialogVisible: false,
      delCampusId: '',
      formLabelWidth: '120px',
      formRules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { max: 60, message: '长度不能超过 60 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    campusService.getRegions(this.$store.state.account.userId).then(data => {
      this.campusDataLoading = false
      this.campusData = data
    }, err => {
      this.$notify.error({
        title: '错误',
        message: err.message
      })
      this.campusDataLoading = false
    })
  },
  methods: {
    openAddSchoolDialog (currentCampusInfo) {
      this.addSchoolForm.campusId = currentCampusInfo.id
      this.addSchoolForm.name = ''
      this.addSchoolForm.isLoading = false
      this.addSchoolDialogVisible = true
    },
    onSubmitAddSchool () {
      this.$refs.addSchoolForm.validate(valid => {
        if (valid) {
          this.addSchoolForm.isLoading = true
          let args = [
            this.$store.state.account.userId,
            this.addSchoolForm.campusId,
            this.addSchoolForm.name
          ]
          campusService.addSchool(args).then(res => {
            this.addSchoolDialogVisible = false
            this.$message({
              message: '服务中心添加成功',
              type: 'success'
            })
            this.addSchoolForm.isLoading = false
          }, err => {
            this.$message.error(err.message)
            this.addSchoolForm.isLoading = false
          })
        } else {
          return false
        }
      })
    },
    openDeleteCampusDialog (currentCampusInfo) {
      this.delCampusDialogVisible = true
    },
    openAddCampusDialog () {
      this.addCampusForm.name = ''
      this.addCampusForm.isLoading = false
      this.addCampusDialogVisible = true
    },
    onSubmitAddCampus () {
      this.$refs.addCampusForm.validate(valid => {
        if (valid) {
          this.addCampusForm.isLoading = true
          let args = [
            this.$store.state.account.userId,
            this.addCampusForm.name
          ]
          campusService.addRegion(args).then(data => {
            this.addCampusDialogVisible = false
            let campus = new CampusVO()
            campus.id = data
            campus.name = this.addCampusForm.name
            this.campusData.push(campus)
          }, err => {
            this.$message.error(err.message)
            this.addCampusForm.isLoading = false
          })
        } else {
          return false
        }
      })
    }
  },
  components: {
    CBreadcrumb
  }
}
</script>

<style scoped>
</style>