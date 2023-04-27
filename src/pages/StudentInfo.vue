<template>
    <!-- 学生管理 -->
    <div class="selfInfo-container">
        <div class="selectByClass">
            <el-select v-model="selectValue" clearable placeholder="请选择班级">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div class="search">
                <el-button @click="findByClass" type="primary" icon="el-icon-search">查找班级</el-button>
                <el-button @click="toClassInfo" type="primary" icon="el-icon-search">查看班级信息</el-button>
            </div>
        </div>
        <div class="table">
            <el-table :data="rows" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="studentNumReflect" label="学号" width="120">
                </el-table-column>
                <el-table-column prop="studentName" label="姓名" width="120">
                </el-table-column>
                <el-table-column label="性别" width="80">
                    <template slot-scope="scope">
                        <span v-if="scope.row.sex === '0' ">男</span>
                        <span v-else>女</span>
                    </template>
                </el-table-column>
                <el-table-column prop="college" label="所属院系" width="180">
                </el-table-column>
                <el-table-column prop="classes" label="行政班级" width="120">
                </el-table-column>
                <el-table-column prop="position" label="职位" width="120">
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" width="120">
                </el-table-column>
                <!-- <el-table-column prop="row." label="贫困生认定" width="120">
                </el-table-column> -->
                <!-- <el-table-column label="是否有助学金贷款" width="150">
                    <template slot-scope="scope">
                        <span v-if="scope.row.isAidLoan === '0'">无</span>
                        <span v-else>有</span>
                    </template>
                </el-table-column> -->
                <el-table-column prop="edit" label="操作">
                    <el-button @click="edit" size="mini
                    " type="primary" icon="el-icon-edit">查看</el-button>
                </el-table-column>
            </el-table>
            <!-- <el-table-column prop="stuNum" label="学号" width="120">
                </el-table-column>
                <el-table-column prop="stuName" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="80">
                </el-table-column>
                <el-table-column prop="department" label="所属院系" width="180">
                </el-table-column>
                <el-table-column prop="stuClass" label="行政班级" width="120">
                </el-table-column>
                <el-table-column prop="position" label="职位" width="120">
                </el-table-column>
                <el-table-column prop="tel" label="联系方式" width="120">
                </el-table-column>
                <el-table-column prop="isPool" label="贫困生认定" width="120">
                </el-table-column>
                <el-table-column prop="isGrantLoan" label="是否有助学金贷款" width="150">
                </el-table-column>
                <el-table-column prop="edit" label="操作">
                    <el-button @click="edit" size="mini
                    " type="primary" icon="el-icon-edit">查看</el-button>
                </el-table-column> -->
            </el-table>
        </div>
        <div class="block">
            <!-- <span class="demonstration">完整功能</span> -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage.currentPage1" :page-sizes="[10, 20, 30, 40]" :page-size="10"
                layout="total, sizes, prev, pager, next, jumper" :total="62">
            </el-pagination>
        </div>
        <!-- router view -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'SelfInfoRoute',
        data() {
            return {
                // 分页查询每页数据
                rows: [],
                getArr: {
                    "classes": '',
                },
                tempArr: [{
                    stuNum: '2020211001',
                    stuName: '贾成程',
                    sex: '男',
                    department: '计算机与信息工程学院',
                    stuClass: '计科202',
                    tel: '123456789',
                    isPool: '非贫困生',
                    position: '纪律委员',
                    isGrantLoan: '无'
                }],
                students: [{
                    className: '计科201',
                    studentData: [{
                            stuNum: '2020211002',
                            stuName: '武思源',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211004',
                            stuName: '甄健男',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '困难',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211006',
                            stuName: '薛冰洁',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211008',
                            stuName: '谷奥成',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '一般困难',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211010',
                            stuName: '卢小龙',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211012',
                            stuName: '孙红',
                            sex: '女',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211014',
                            stuName: '谢天',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211016',
                            stuName: '陈龙',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211018',
                            stuName: '刘明伟',
                            sex: '男',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        },
                        {
                            stuNum: '2020211020',
                            stuName: '葛文琪',
                            sex: '女',
                            department: '计算机与信息工程学院',
                            stuClass: '计科201',
                            tel: '123456789',
                            isPool: '非贫困生',
                            position: '无',
                            isGrantLoan: '无'
                        }
                    ]
                }, {
                    className: '计科202',
                    studentData: [{
                        stuNum: '2020211001',
                        stuName: '贾成程',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '心理委员',
                        isGrantLoan: '无'
                    }, {
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
                        stuNum: '2020211005',
                        stuName: '李赫',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '无',
                        isGrantLoan: '无'
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
                    }, {
                        stuNum: '2020211009',
                        stuName: '耿小雨',
                        sex: '女',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '纪律委员',
                        isGrantLoan: '无'
                    }, {
                        stuNum: '2020211011',
                        stuName: '陈枫',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '无',
                        isGrantLoan: '无'
                    }, {
                        stuNum: '2020211013',
                        stuName: '陈鸿涛',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '无',
                        isGrantLoan: '无'
                    }, {
                        stuNum: '2020211015',
                        stuName: '程曦',
                        sex: '女',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '无',
                        isGrantLoan: '无'
                    }, {
                        stuNum: '2020211017',
                        stuName: '陈明慧',
                        sex: '女',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '无',
                        isGrantLoan: '无'
                    }, {
                        stuNum: '2020211019',
                        stuName: '褚金龙',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        position: '无',
                        isGrantLoan: '无'
                    }]
                }, ],
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
            this.$store.state.students = this.students
            console.log(this.$store.state.students);
            // this.$bus.$emit('handleAdd',this.students)
            // console.log("stuInfo emit" + this.students[0]);
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            edit() {},
            // 通过班级查找学生
            findByClass() {
                // alert(this.selectValue)
                this.getArr.classes = this.selectValue
                // console.log(this.getArr.classes);
                // this.students.forEach(student => {
                //     // 查询成功
                //     if (this.selectValue === student.className) {
                //         this.tableData = student.studentData
                //         // console.log(tableData);
                //     }
                // });
                this.getClasses()
            },
            // 路由跳转：toClassInfo
            toClassInfo() {
                const name = "toClassInfo"
                this.$router.push({
                    name: name
                })
            },
            getClasses() {
                console.log(this.getArr.classes);
                this.$axios.post(this.myHttp + "/systemCore/webView/consum?pageNum=1&pageSize=10", this.getArr).then((
                    res) => {
                    this.rows = res.data.rows
                    console.log(res.data.rows);
                })
            }
        },
    };
</script>

<style scoped>
    .selfInfo-container {
        box-sizing: border-box;
        height: 60%;
    }

    .selfInfo-container .selectByClass {
        position: relative;
        margin-bottom: 20px;
    }

    .selfInfo-container .selectByClass .search {
        position: absolute;
        top: 0px;
        left: 250px;
    }

    .selfInfo-container .table {
        border: 1px solid silver;
    }

    .selfInfo-container .block {
        margin-top: 20px;
    }
</style>