<template>
    <div class="picture-container">
        <!-- <button @click="testAxios">testAxios</button>
        <button @click="testAxiosPost">testAxiosPost</button> -->
        <div class="picture-bar">
            <!-- 显示用户画像 -->
            <div class="header">
                <div class="top-text">
                    用户画像 Student Portrait
                </div>
            </div>
            <div class="main">
                <div class="role">
                    <div v-show="isShow" class="boy">
                        <img src="../assets/boy.jpg" alt="">
                    </div>
                    <div v-show="!isShow" class="girl">
                        <img src="../assets/girl.jpg" alt="">
                    </div>
                </div>
                <div class="main-content">
                    <!-- <template slot-scope="props"> -->
                    <div class="table-box">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="姓名">
                                <span>{{ this.row.studentName}}</span>
                            </el-form-item>
                            <el-form-item label="学号">
                                <span>{{this.row.studentNumReflect}}</span>
                            </el-form-item>
                            <el-form-item label="性别">
                                <span>{{ this.row.sex == "0" ? "男" : "女" }}</span>
                            </el-form-item>
                            <el-form-item label="学生成绩">
                                <el-button @click="dialogVisibleA = true">点击查看按学生成绩</el-button>
                            </el-form-item>
                            <el-form-item label="月消费总额">
                                <span>{{ this.row.totalConsumOfMonth }}</span>
                            </el-form-item>
                            <el-form-item label="是否有助学金">
                                <span>{{ this.data.isStipend == "0" ? "无" : "有" }}</span>
                                <el-button @click="dialogVisibleB = true">点击查看助学金</el-button>
                            </el-form-item>
                            <el-form-item label="月消费次数">
                                {{this.row.totalTimesConsumOfMonth}}
                            </el-form-item>
                            <el-form-item label="是否拿过奖学金">
                                <span>{{ this.data.isScholarship == "0" ? "无" : "有" }}</span>
                                <el-button @click="dialogVisibleC = true">点击查看奖学金</el-button>
                            </el-form-item>
                            <el-form-item label="每次平均消费额度">
                                <span>{{this.row.timesAvgConsum}}</span>
                            </el-form-item>
                            <el-form-item label="荣誉称号">
                                <span>{{ this.data.isScholarship == "0" ? "无" : "有" }}</span>
                                <el-button  @click="dialogVisibleD = true">点击查看荣誉称号</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <!-- A -->
                    <el-dialog title="学生成绩信息" :visible.sync="dialogVisibleA" width="80%" :before-close="handleClose">
                        <div class="dialog-table">
                            <template>
                                <el-table :data="data.studentScore" height="550" border style="width: 100%">
                                    <el-table-column prop="kcdm" label="课程代码" width="180">
                                    </el-table-column>
                                    <el-table-column prop="kcmc" label="课程名称" width="180">
                                    </el-table-column>
                                    <el-table-column prop="pscj" label="平时成绩">
                                        <template slot-scope="scope">
                                            <span v-if="scope.row.pscj != null">{{scope.row.pscj}}</span>
                                            <span v-else>100</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="qmcj" label="期末成绩">
                                        <template slot-scope="scope">
                                            <span v-if="scope.row.qmcj != null">{{scope.row.qmcj}}</span>
                                            <span v-else>100</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="sycj" label="实验成绩">
                                        <template slot-scope="scope">
                                            <span v-if="scope.row.sycj != null">{{scope.row.sycj}}</span>
                                            <span v-else>100</span>
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
                    <!-- B -->
                    <el-dialog title="助学金信息" :visible.sync="dialogVisibleB" width="80%" :before-close="handleClose">
                        <div class="dialog-table">
                            <template>
                                <el-table :data="data.stipendLists" height="550" border style="width: 100%">
                                    <el-table-column prop="pjzq" label="评奖周期" width="180">
                                    </el-table-column>
                                    <el-table-column prop="mc" label="助学金名称" width="180">
                                    </el-table-column>
                                    <el-table-column prop="ssnj" label="所属年级">
                                    </el-table-column>
                                    <el-table-column prop="zxjjb" label="助学金级别">
                                    </el-table-column>
                                    <el-table-column prop="zxjje" label="助学金金额">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisibleB = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisibleB = false">确 定</el-button>
                        </span>
                    </el-dialog>
                    <!-- C -->
                    <el-dialog title="奖学金信息" :visible.sync="dialogVisibleC" width="80%" :before-close="handleClose">
                        <div class="dialog-table">
                            <template>
                                <el-table :data="data.scholarshipLists" height="550" border style="width: 100%">
                                    <el-table-column prop="bmmc" label="部门名称" width="180">
                                    </el-table-column>
                                    <el-table-column prop="zymc" label="专业名称" width="180">
                                    </el-table-column>
                                    <el-table-column prop="pjrq" label="评奖日期">
                                    </el-table-column>
                                    <el-table-column prop="dj" label="登记时间">
                                    </el-table-column>
                                    <el-table-column prop="hjrq" label="奖学金名称">
                                    </el-table-column>
                                    <el-table-column prop="jxjdj" label="奖学金等级">
                                    </el-table-column>
                                    <el-table-column prop="jxjje" label="奖学金金额">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisibleC = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisibleC = false">确 定</el-button>
                        </span>
                    </el-dialog>
                    <!-- D -->
                    <el-dialog title="荣誉称号信息" :visible.sync="dialogVisibleD" width="80%" :before-close="handleClose">
                        <div class="dialog-table">
                            <template>
                                <el-table :data="data.honoraryTitleLists" height="550" border style="width: 100%">
                                    <el-table-column prop="honoraryTitle" label="称号名称" width="180">
                                    </el-table-column>
                                    <el-table-column prop="honorLevel" label="荣誉等级" width="180">
                                    </el-table-column>
                                    <el-table-column prop="schoolYear" label="学年">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisibleD = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisibleD = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Picture',

        data() {
            return {
                dialogVisibleA: false,
                dialogVisibleB: false,
                dialogVisibleC: false,
                dialogVisibleD: false,
                data: [],
                row: {

                },
                isShow: true,
                activeClass: "",
                rows: [],
                test: {
                    studentNumReflect: "",
                },
                activeName: "",
                myFlag: false,
                tableData: [{
                        stuNum: '2020211002',
                        stuName: '武思源',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科201',
                        tel: '18170234072',
                        isPool: '非贫困生',
                        tag: '异常'
                    },
                    {
                        stuNum: '2020211042',
                        stuName: '陈屋涛',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科201',
                        tel: '18170234072',
                        isPool: '非贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2020211001',
                        stuName: '贾成程',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        tag: '严重'
                    }, {
                        stuNum: '2020211100',
                        stuName: '吴冰',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '网工201',
                        tel: '123456789',
                        isPool: '非贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2020211106',
                        stuName: '王涛',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '网工201',
                        tel: '123456789',
                        isPool: '非贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2020211103',
                        stuName: '徐浩',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '网工202',
                        tel: '123456789',
                        isPool: '贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2020211107',
                        stuName: '张所',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '网工202',
                        tel: '123456789',
                        isPool: '贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2020211121',
                        stuName: '刘韬',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '网工202',
                        tel: '123456789',
                        isPool: '贫困生',
                        tag: '异常'
                    }
                ]
            };
        },

        mounted() {
            this.row = this.$store.state.pictureRow;
            this.test.studentNumReflect = this.row.studentNumReflect;
            this.getStudent();
            if (this.row.sex === "0") { // 男
                this.isShow = true;
            } else {
                this.isShow = false;
            }
            console.log(this.row.sex);
            console.log(this.row);
        },
        methods: {
            // 获取每行数据
            handleClick(row) {
                this.$store.state.pictureRow = row
                console.log(this.$store.state.pictureRow);
            },
            handleClickEltab(tab, event) {
                this.activeClass = tab.label
                this.test.classes = this.activeClass
                this.getStudent()
                console.log(this.test.classes);
            },
            headerCellStyle() {

            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            // 跳转
            toAleartSelfInfo() {
                // alert("toAleartSelfInfo")
                const name = "toAleartSelfInfo"
                this.$router.push({
                    name: name
                })
            },
            // 获取学生信息
            getStudent() {
                console.log();
                this.$axios.post(this.myHttp + "/systemCore/webView/studentInfo", this.test).then((
                    res) => {
                    console.log(res.data.data);
                    this.data = res.data.data
                    console.log(this.data.honoraryTitleLists);
                    // this.rows = res.data.rows;
                })
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        },

    };
</script>

<style scoped>
    /deep/ .el-button{
        padding: 5px 20px;
    }
    
    .picture-bar {
        width: 100%;
        height: 600px;
        border: 1px solid rgb(220, 223, 230);
        /* background-color: pink; */
    }

    /* header */
    .picture-bar .header {
        height: 50px;
        width: 100%;
        background-color: aliceblue;
        border-bottom: 1px solid rgb(220, 223, 230);
    }

    .top-text {
        height: 50px;
        width: 200px;
        line-height: 50px;
        /* margin-left: 20px; */
    }

    /* main */
    .picture-bar .main {
        position: relative;
        display: flex;
        height: 500px;
        width: 100%;
        /* background-color: antiquewhite; */
    }

    .main .role {
        position: relative;
        /* overflow: hidden; */
        width: 200px;
        height: 500px;
    }

    .boy,
    .girl {
        margin-top: 100px;
        margin-left: 620px;
    }

    .role img {
        width: 100px;
    }


    .main .main-content {
        width: 1200px;
        height: 500px;
        /* background-color: pink; */
    }

    .table-box {
        height: 400px;
        width: 100%;
        margin-top: 120px;
        margin-left: 50px;
        /* background-color: pink; */
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>