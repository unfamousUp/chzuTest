<template>
    <div class="PoorAffirm-container">
        <div class="PoorAffirm-bar">
            <el-button plain @click="submitReview()">
                提交审核
            </el-button>
            <el-steps :space="200" :active=this.$store.state.classes[0].active finish-status="success">
                <el-step title="提交成功"></el-step>
                <el-step title="审核中"></el-step>
                <el-step title="审核成功"></el-step>
            </el-steps>
            <el-tabs type="border-card">
                <el-tab-pane label="计科201">
                    <div id="footer-table-left">
                        <el-table ref="filterTable" :data="tableData" style="width: 100%">
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
                            <el-table-column fixed="right" label="操作">
                                <template slot-scope="scope">
                                    <el-button :disabled="$store.state.classes[0].isDisabled"
                                        @click="updatedButton(scope.row)" size="small">修改
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <!-- 分页 -->
                    <el-pagination class="paginationClass" :total="total" :current-page.sync="queryParams.pageNum"
                        :page-size.sync="queryParams.pageSize" @current-change="getStudentInfo"
                        @size-change="getStudentInfo" />

                    <!-- 对话框 -->
                    <el-dialog :title="title" :visible.sync="isShow" width="80%" :before-close="handleClose">
                        <!-- 对话框主体部分 -->
                        <el-form :model="form" ref="form" :rules="rules">
                            <el-form-item label="学号" prop="studentNumReflect" :label-width="formLabelWidth">
                                <el-input v-model="form.studentNumReflect" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="姓名" prop="studentName" :label-width="formLabelWidth">
                                <el-input v-model="form.studentName" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
                                <template>
                                    <el-select v-model="form.sex" placeholder="请选择性别">
                                        <el-option v-for="item in sexOptin" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-form-item>

                            <el-form-item label="学院" prop="college" :label-width="formLabelWidth">
                                <el-input v-model="form.college" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="行政班级" prop="classes" :label-width="formLabelWidth">
                                <el-input v-model="form.classes" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="手机号" prop="phone" :label-width="formLabelWidth">
                                <el-input v-model="form.phone" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="是否贫困生" prop="isPoorStudent" :label-width="formLabelWidth">
                                <template>
                                    <el-select v-model="form.isPoorStudent" placeholder="请选择是否贫困生">
                                        <el-option v-for="item in loanOptin" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-form-item>
                        </el-form>
                        <!--  -->
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="cancel">取 消</el-button>
                            <el-button type="primary" @click="submitForm">确 定</el-button>
                        </span>
                    </el-dialog>


                </el-tab-pane>
                <el-tab-pane label="计科202">
                    <div class="aleartTable">
                        <div class="table">

                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="网工201">
                    <div class="aleartTable">
                        <div class="table">

                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="网工202">
                    <div class="aleartTable">
                        <div class="table">

                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoorAffirm',
        data() {
            return {
                isDisabled: false,
                active: 0,
                studentInfo: {
                    "classes": "计科201"
                },
                total: 0,
                isShow: false,
                tableData: [],
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
            };
        },

        mounted() {
            this.getStudentInfo()
        },
        methods: {
            getStudentInfo() {
                this.$axios.post('http://127.0.0.1:8082/systemCore/webView/consum?pageNum=' +
                    this.queryParams.pageNum + "&pageSize=" + this.queryParams.pageSize, this.studentInfo).then((
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
            updatedButton(row) {
                this.isShow = true
                this.title = "修改"
                this.form = row
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
            // 关闭对话框
            handleClose(done) {
                this.$confirm("确认关闭？")
                    .then((_) => {
                        this.getStudentInfo();
                        done();
                    })
                    .catch((_) => {});
            },
            // 取消对话框
            cancel() {
                this.getStudentInfo();
                this.isShow = false;
            },
            submitReview() {
                this.$store.state.classes[0].isDisabled = true;
                this.$store.state.classes[0].active = 1;
                this.$notify({
                    title: '成功',
                    message: '提交成功！审核中...',
                    type: 'success'
                });
            }

        },

    };
</script>

<style scoped>
    .aleartTable {
        width: 100%;
        height: 500px;
    }

    .aleartTable .table-title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        color: #666;
        /* background-color: pink; */
    }

    .table-title .title {
        width: 30%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        background-color: aliceblue;
    }

    .aleartTable .table {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 300px;
        /* background-color: pink; */
        margin-top: 10px;
    }

    .table #aleartTable {
        margin-left: -150px;
        width: 1800px;
        height: 300px;
    }

    .paginationClass {
        margin-left: 65%;
        margin-top: 2%;
    }
</style>