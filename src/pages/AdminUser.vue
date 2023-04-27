<template>
    <div class="AdminUser-container">
        <div class="table">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="所属学院">
                    <el-select v-model="selectedValue" placeholder="请选择学院">
                        <el-option label="地理信息与旅游学院" value="地理信息与旅游学院"></el-option>
                        <el-option label="计算机与信息工程学院" value="计算机与信息工程学院"></el-option>
                        <el-option label="机械与电气工程学院" value="机械与电气工程学院"></el-option>
                        <el-option label="材料与化学工程学院" value="材料与化学工程学院"></el-option>
                        <el-option label="生物与食品工程学院" value="生物与食品工程学院"></el-option>
                        <el-option label="土木与建筑工程学院" value="土木与建筑工程学院"></el-option>
                        <el-option label="数学与金融学院" value="数学与金融学院"></el-option>
                        <el-option label="经济与管理学院" value="经济与管理学院"></el-option>
                        <el-option label="文学与传媒学院" value="文学与传媒学院"></el-option>
                        <el-option label="外国语学院" value="外国语学院"></el-option>
                        <el-option label="教育科学学院" value="教育科学学院"></el-option>
                        <el-option label="体育学院" value="体育学院"></el-option>
                        <el-option label="音乐学院" value="音乐学院"></el-option>
                        <el-option label="美术与设计学院" value="美术与设计学院"></el-option>
                    </el-select>
                </el-form-item>
                <el-button type="primary" @click="onSubmit">查看</el-button>
                </el-form-item>
            </el-form>
            <el-table ref="filterTable" :data="tableData" style="width: 100%">
                <el-table-column prop="department" label="所属学院" width="220">
                </el-table-column>
                <el-table-column prop="teacherNum" label="辅导员工号" width="120">
                </el-table-column>
                <el-table-column prop="name" label="辅导员姓名" width="120">
                </el-table-column>
                <el-table-column prop="major" label="专业" width="120">
                </el-table-column>
                <el-table-column prop="grades" label="班级" width="120">
                </el-table-column>

                <el-table-column prop="sex" label="辅导员性别" width="120">
                    <!-- <template slot-scope="scope">
                        <span v-if="scope.row.sex === '0' ">男</span>
                        <span v-else>女</span>
                    </template> -->
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" width="120">
                    12345678888
                </el-table-column>
                <el-table-column label="信息管理" width="120">
                    <el-button type="primary">查看</el-button>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <!-- <el-pagination class="paginationClass" :total="total" :current-page.sync="queryParams.pageNum"
                :page-size.sync="queryParams.pageSize" @current-change="getStudentInfo" @size-change="getStudentInfo" /> -->

            <!-- 分页 -->
            <!-- <el-pagination class="paginationClass" :total="total" :current-page.sync="queryParams.pageNum"
                :page-size.sync="queryParams.pageSize" @current-change="getStudentInfo" @size-change="getStudentInfo" /> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdminUser',

        data() {
            return {
                form:[],
                teacherArr: [{
                    teacherNum: '203001',
                    teacherName: '徐天天',
                    teacherSex: '男',
                    department: '计算机与信息工程学院',
                    position: '辅导员',
                    tel: '18133445530',
                }],
                selectedValue: '',
                teacherInfo: {
                    "classes": "网工201"
                },
                tableData: [

                ],
                queryParams: {
                    pageNum: 1,
                    pageSize: 5
                },
            };
        },

        mounted() {

        },

        methods: {
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            getTeacherInfo() {
                this.$axios.post('http://127.0.0.1:8082/systemCore/webView/consum?pageNum=' +
                    this.queryParams.pageNum + "&pageSize=" + this.queryParams.pageSize, this.teacherInfo).then((
                    res) => {
                    this.tableData = res.data.rows
                    this.total = res.data.total
                })
            },
            testAxios() {
                this.$axios.get('http://127.0.0.1:8082/systemCore/webView/allClassesInfo').then((res) => {})
            },
            updataPoorStatus() {
                this.$axios.put('http://127.0.0.1:8082/systemCore/webView/updatePoorStudent', this.form).then((
                    res) => {})
            },
            onSubmit() {
                // var myTable = new Array(10);
                this.teacherInfo.department = this.selectedValue
                this.$axios.post('http://127.0.0.1:8082/systemCore/webView/teacherInfo?pageNum=' +
                    this.queryParams.pageNum + "&pageSize=" + this.queryParams.pageSize, this.teacherInfo).then((
                    res) => {
                    // for (var i = 0; i < 10; i++) {
                    //     myTable[i] = res.data.rows[i]
                    // }
                    // this.tableData = myTable
                    this.tableData = res.data.rows
                })
            }
        },
    };
</script>

<style scoped>

</style>