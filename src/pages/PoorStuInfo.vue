<template>
    <!-- 学生管理 -->
    <div class="poorStuInfo-container">
        <!-- 搜索框 -->
        <div class="selectByClass">
            <el-select v-model="selectValue" clearable placeholder="请选择班级">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div class="search">
                <!-- 查找 -->
                <el-button @click="findByClass" type="primary" icon="el-icon-search">查找</el-button>
            </div>


            <!-- 添加学生 -->
            <div class="addStudent">
                <el-input placeholder="请输入学号" v-model="stuNum" clearable style="margin-right: 30px;">
                </el-input>
                <el-button @click="handleAdd" type="primary">添加</el-button>
            </div>
        </div>
        <!-- 表格 -->
        <div class="table">
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="studentNumReflect" label="学号" width="120">
                </el-table-column>
                <el-table-column prop="studentName" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="80">
                    <template slot-scope="scope">{{ scope.row.sex === '0' ? '男' : '女' }}</template>
                </el-table-column>
                <el-table-column prop="college" label="所属院系" width="180">
                </el-table-column>
                <el-table-column prop="classes" label="行政班级" width="120">
                </el-table-column>
                <!-- <el-table-column prop="position" label="职位" width="120">
                </el-table-column> -->
                <el-table-column prop="phone" label="联系方式" width="120">
                </el-table-column>
                <!-- <el-table-column prop="isPool" label="贫困生认定" width="120">
                </el-table-column> -->
                <el-table-column prop="isAidLoan" label="是否有助学金贷款" width="150">
                    <!-- <template slot-scope="scope">
                        <el-button @click="toGrantLoanInfo" v-if="scope.row.isGrantLoan === '有' " size="mini"
                            type="primary" icon="el-icon-edit">
                            查看贷款信息
                        </el-button>
                    </template> -->
                    <template slot-scope="scope">{{ scope.row.isAidLoan === '0' ? '无' : '有' }}</template>
                </el-table-column>
                <el-table-column prop="edit" label="操作">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="handleCheck(scope.row)" size="mini" type="primary"
                            icon="el-icon-edit">
                            查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div class="block">
            <!-- <span class="demonstration">完整功能</span> -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage.currentPage1" :page-sizes="[10, 20, 30, 40]" :page-size="10"
                layout="total, sizes, prev, pager, next, jumper" :total="62">
            </el-pagination>
        </div>
        <!-- 路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'PoorStuInfo',
        data() {
            return {
                rows: [],
                test: {
                    classes:""
                },
                // 根据学号添加学生
                stuNum: null,
                stuRow: {},
                tempArr: [{
                    stuNum: '2020211002',
                    stuName: '贾成程',
                    sex: '男',
                    department: '计算机与信息工程学院',
                    stuClass: '计科202',
                    tel: '123456789',
                    isPool: '非贫困生',
                    position: '纪律委员',
                }],
                students: [{
                    className: '计科201',
                    studentData: [{
                        stuNum: '2020211001',
                        stuName: '武思源',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科201',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '班长',
                    }]
                }, {
                    className: '计科202',
                    studentData: [{
                        stuNum: '2020211003',
                        stuName: '陈久佳',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '困难',
                        position: '学习委员',
                        isGrantLoan: '有'
                    }, {
                        stuNum: '2020211007',
                        stuName: '许鹏',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '一般困难',
                        position: '无',
                        isGrantLoan: '有'
                    }]
                }, ],
                // 选中的班级
                selectValue: '',
                currentPage: {
                    currentPage1: 1,
                    currentPage2: 2,
                    currentPage3: 3,
                    currentPage4: 4
                },
                tableData: [],
                options: [{
                    value: '计科201',
                    label: '计科201'
                }, {
                    value: '计科202',
                    label: '计科202'
                }, {
                    value: '网工201',
                    label: '网工201'
                }, {
                    value: '网工202',
                    label: '网工202'
                }, ],
            };
        },
        mounted() {

        },
        methods: {
            // 根据学号添加学生

            // 分页
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (row.isAidLoan === '1') {
                    return 'warning-row';
                } 
                // else if (row.isAidLoan === '0') {
                //     return 'success-row';
                // }
                return '';
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            // 获取该行数据
            handleCheck(row) {
                alert("查看")
                console.log(row);
                this.toPoorSelfInfo()
            },
            // 通过班级查找学生
            findByClass() {
                // this.students.forEach(student => {
                //     if (this.selectValue === student.className) {
                //         this.tableData = student.studentData
                //     }
                // });
                this.test.classes = this.selectValue
                this.getStudent()
            },
            // 添加贫困生
            handleAdd() {
                var students = this.$store.state.students
                var myStudent = {}
                // 选中班级
                if (this.selectValue && this.tableData) {
                    // 判断学号格式
                    if (this.stuNum.length === 10) {
                        console.log(this.stuNum.length);
                        // 根据班级查找学生列表
                        students.forEach(student => {
                            // 查询成功
                            if (this.selectValue === student.className) {
                                // 班级列表
                                myStudent = student
                                // 根据学号查询学生
                                myStudent.studentData.forEach(stu => {
                                    // 判断学号是否相等
                                    if (stu.stuNum === this.stuNum) {
                                        console.log(stu);
                                        // this.tableData
                                        this.tableData.push(stu)
                                    }
                                })
                            }
                        });
                        // if(flag){
                        //     alert("查无此人")
                        //     return
                        // }
                    } else {
                        alert("学号格式错误，请重新输入")
                        this.stuNum = null
                    }
                } else {
                    alert("请选择班级")
                    this.stuNum = null
                }
                // console.log(students);
                // console.log(this.selectValue);
            },
            // 路由跳转：贷款信息
            toGrantLoanInfo() {
                const name = "toGrantLoanInfo"
                this.$router.push({
                    name: name
                })
            },
            toPoorSelfInfo() {
                const name = "toPoorSelfInfo"
                this.$router.push({
                    name: name
                })
            },
            // 获取助学金贷款学生信息
            getStudent() {
                this.$axios.post(this.myHttp + "/systemCore/webView/consum?pageNum=1&pageSize=10", this.test).then((
                    res) => {
                    console.log(res.data.rows);
                    this.tableData = res.data.rows;
                })
            },

        },
    };
</script>

<style scoped>
    .poorStuInfo-container {
        box-sizing: border-box;
        height: 60%;
        /* border: 1px solid silver; */
        /* background-color: #f0f2f5; */
        /* border: 2px solid skyblue; */
    }

    .poorStuInfo-container .selectByClass {
        position: relative;
        margin-bottom: 20px;
    }

    .poorStuInfo-container .selectByClass .search {
        position: absolute;
        top: 0px;
        left: 250px;
    }

    .poorStuInfo-container .selectByClass .addStudent {
        padding: 0px 20px;
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 0px;
        left: 350px;
    }

    .poorStuInfo-container .selectByClass .addStudent input {
        margin-right: 20px;
    }

    .poorStuInfo-container .table {
        border: 1px solid silver;
    }

    .poorStuInfo-container .block {
        margin-top: 20px;
    }
</style>