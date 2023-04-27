<template>
    <div class="AdminPoor-container">
        <div class="footer">
            <el-tabs type="border-card">
                <el-tab-pane label="待办事项">
                    <div class="aleartTable">
                        <div class="table">
                            <el-table ref="filterTable" :data="this.teachers" style="width: 100%">
                                <el-table-column label="操作" width="120">
                                    <el-button @click="dialogVisibleA = true">处理</el-button>
                                </el-table-column>
                                <el-table-column label="处理内容" width="120">
                                    贫困生审核信息
                                </el-table-column>
                                <el-table-column prop="state" label="当前环节" width="120">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.state === '0' ">审核中...</span>
                                        <span v-else>审核通过</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="teacherName" label="发送人" width="120">
                                </el-table-column>
                                <el-table-column prop="sex" label="辅导员性别" width="120">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.sex === '0' "></span>
                                        <span v-else>男</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="institution" label="所属学院" width="160">

                                </el-table-column>
                                <el-table-column prop="phone" label="联系方式" width="120">
                                    123456789
                                </el-table-column>
                            </el-table>

                        </div>
                        <el-dialog title="提交信息" :visible.sync="dialogVisibleA" width="80%" :before-close="handleClose">
                            <el-button @click="updatedButton()" type="primary">点击审核通过</el-button>
                            <div class="dialog-table">
                                <template>
                                    <el-table :data="rows" height="550" border style="width: 100%">
                                        <el-table-column prop="studentNumReflect" label="学号" width="120">
                                        </el-table-column>
                                        <el-table-column prop="studentName" label="姓名" width="120">
                                        </el-table-column>
                                        <el-table-column prop="sex" label="性别" width="80">
                                            <template slot-scope="scope">
                                                <span v-if="scope.row.sex === '0' ">男</span>
                                                <span v-else>女</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="college" label="所属院系" width="180">
                                        </el-table-column>
                                        <el-table-column prop="classes" label="行政班级" width="120">
                                        </el-table-column>
                                        <el-table-column prop="phone" label="联系方式" width="120">
                                        </el-table-column>
                                        <el-table-column prop="isPoorStudent" label="是否贫困生" width="120">
                                            <template slot-scope="scope">
                                                <span v-if="scope.row.isPoorStudent === '0'">是</span>
                                                <span v-else>否</span>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </div>
                            <span slot="footer" class="dialog-footer">

                                <el-button @click="dialogVisibleA = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisibleA = false">确 定</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="办结事项">
                    <div class="aleartTable">
                        <div class="table">
                            <el-table ref="filterTable" :data="this.overTeachers" style="width: 100%">
                                <el-table-column label="处理内容" width="120">
                                    贫困生审核信息
                                </el-table-column>
                                <el-table-column prop="state" label="当前环节" width="120">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.state === '0' ">审核中...</span>
                                        <span v-else>审核通过</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="teacherName" label="发送人" width="120">
                                </el-table-column>
                                <el-table-column prop="sex" label="辅导员性别" width="120">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.sex === '0' "></span>
                                        <span v-else>男</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="institution" label="所属学院" width="160">

                                </el-table-column>
                                <el-table-column prop="phone" label="联系方式" width="120">
                                    123456789
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="table">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="所属学院">
                    <el-select v-model="selectedValue" placeholder="请选择学院">
                        <el-option label="地理信息与旅游学院" value="地理信息与旅游学院"></el-option>
                        <el-option label="计算机与信息工程学院（大学计算机教学部）" value="计算机与信息工程学院（大学计算机教学部）"></el-option>
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
            </el-form>
            <div class="myButton"><el-button type="primary" @click="onSubmit">查看</el-button></div>
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
                    12345678910
                </el-table-column>
                <el-table-column label="审核信息" width="120">
                    <el-button @click="dialogVisibleB = true" type="primary">查看</el-button>
                </el-table-column>
            </el-table>
            <el-dialog title="提交信息" :visible.sync="dialogVisibleB" width="80%" :before-close="handleClose">
                <div class="dialog-table">
                    <template>
                        <el-table :data="rows" height="550" border style="width: 100%">
                            <el-table-column prop="studentNumReflect" label="学号" width="120">
                            </el-table-column>
                            <el-table-column prop="studentName" label="姓名" width="120">
                            </el-table-column>
                            <el-table-column prop="sex" label="性别" width="80">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.sex === '0' ">男</span>
                                    <span v-else>女</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="college" label="所属院系" width="180">
                            </el-table-column>
                            <el-table-column prop="classes" label="行政班级" width="120">
                            </el-table-column>
                            <el-table-column prop="phone" label="联系方式" width="120">
                            </el-table-column>
                            <el-table-column prop="isPoorStudent" label="是否贫困生" width="120">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.isPoorStudent === '0'">是</span>
                                    <span v-else>否</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
                <span slot="footer" class="dialog-footer">

                    <el-button @click="dialogVisibleB = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisibleB = false">确 定</el-button>
                </span>
            </el-dialog>

            <!-- 分页 -->
            <!-- <el-pagination class="paginationClass" :total="total" :current-page.sync="queryParams.pageNum"
                :page-size.sync="queryParams.pageSize" @current-change="getStudentInfo" @size-change="getStudentInfo" /> -->
        </div>

    </div>
</template>

<script>
    export default {
        name: 'AdminPoor',

        data() {
            return {
                dialogVisibleA: false,
                dialogVisibleB: false,
                teachers: [],
                overTeachers: [],
                rows: [],
                test: {
                    classes: ""
                },
                // 所选学院
                selectedValue: '',
                form: {
                    name: '徐天天',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    sex: 'male',
                    selectedValue: '计算机与信息工程学院',
                    teachNum: '203001',
                    position: ['辅导员'],
                    tel: '18133445530'
                },
                teacherArr: [{
                    teacherNum: '203001',
                    teacherName: '徐天天',
                    teacherSex: '男',
                    department: '计算机与信息工程学院',
                    position: '辅导员',
                    tel: '18133445530',
                }],
                studentInfo: {
                    "classes": "网工201"
                },
                teacherInfo: {
                    department: ""
                },
                total: 0,
                isShow: false,
                tableData: [

                ],
                queryParams: {
                    pageNum: 1,
                    pageSize: 10
                },
                form: {},
                title: undefined,
                formLabelWidth: "120px",
                rules: {
                    isAidLoan: [{
                        required: true,
                        message: "请选择是否贫困生",
                        trigger: "blur"
                    }, ],
                },
                sexOptin: [{
                    value: '0',
                    label: '男'
                }, {
                    value: '1',
                    label: '女'
                }],
                loanOptin: [{
                    value: '0',
                    label: '是贫困生'
                }, {
                    value: '1',
                    label: '非贫困生'
                }],
                total: 0,
                isShow: false,
                title: undefined,
            };
        },

        mounted() {
            // this.getStudentInfo()
            this.test.classes = this.$store.state.classes[0].name;
            console.log("------");
            console.log(this.test.classes);
            this.getStudent()
            this.getTeachers()
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
            getTeachers() {
                this.teachers = this.$store.state.teachers;
                console.log(this.$store.state.teachers);
                console.log(this.teachers);
            },
            getTeacherInfo() {
                this.$axios.post('http://127.0.0.1:8082/systemCore/webView/consum?pageNum=' +
                    this.queryParams.pageNum + "&pageSize=" + this.queryParams.pageSize, this.teacherInfo).then((
                    res) => {
                    this.tableData = res.data.rows
                    this.total = res.data.total
                    // this.total = res.data.total
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
            },
            updatedButton(row) {
                this.$store.state.teachers[0].state = 1;
                this.$store.state.classes[0].isDisabled = false;
                this.$store.state.classes[0].active = 3;
                this.$store.state.classes[0].state = 1;
                this.overTeachers = this.teachers;
                this.teachers = null;
                alert('审核成功')
            },
            submitForm() {
                this.$confirm('此操作将修改信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '更新成功!'
                    });
                    console.log('form', this.form)
                    this.updataPoorStatus()
                    this.isShow = false
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消更新'
                    });
                });
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            // 取消对话框
            cancel() {
                this.getStudentInfo();
                this.isShow = false;
            },
            // 获取异常学生信息
            getStudent() {
                this.$axios.post(this.myHttp + "/systemCore/webView/consum?pageNum=1&pageSize=10", this.test).then((
                    res) => {
                    console.log(res.data.rows);
                    this.rows = res.data.rows;
                })
            },
        },
    };
</script>

<style scoped>
    .footer {
        margin-top: 20px;
    }
    
    .table {
        position: relative;
    }
    .myButton{
        z-index: 9;
        position: absolute;
        left: 300px;
        top: 0px;
    }
</style>