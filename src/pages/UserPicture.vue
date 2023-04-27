<template>
    <div class="userPicture-container">
        <!-- <button @click="testAxios">testAxios</button>
        <button @click="testAxiosPost">testAxiosPost</button> -->
        <div class="userPicture-bar">
            <el-tabs v-model="activeName" @tab-click="handleClickEltab" type="border-card">
                <el-tab-pane label="计科201">
                    <div id="footer-table-left">
                        <el-table ref="filterTable" :header-cell-style="headerCellStyle" :data="rows"
                            style="width: 100%">
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
                            <el-table-column fixed="right" label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">
                                        查看用户画像
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="计科202">
                    <div id="footer-table-left">
                        <el-table ref="filterTable" :header-cell-style="headerCellStyle" :data="rows"
                            style="width: 100%">
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
                            <!-- <el-table-column prop="isPool" label="贫困生认定" width="120">
                            </el-table-column> -->
                            <el-table-column prop="tag" label="预警" width="100"
                                :filters="[{ text: '异常', value: '异常' }, { text: '严重', value: '严重' }]"
                                :filter-method="filterTag" filter-placement="bottom-end">
                                <template slot-scope="scope">
                                    <el-tag :type="'danger'" disable-transitions>
                                        异常
                                    </el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看用户画像
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- <el-button @click="resetDateFilter">清除过滤器</el-button> -->
                        <!-- <el-button @click="clearFilter">清除所有过滤器</el-button> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane label="网工201">
                    <div id="footer-table-left">
                        <el-table ref="filterTable" :header-cell-style="headerCellStyle" :data="rows"
                            style="width: 100%">
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
                            <!-- <el-table-column prop="isPool" label="贫困生认定" width="120">
                            </el-table-column> -->
                            <el-table-column prop="tag" label="预警" width="100"
                                :filters="[{ text: '异常', value: '异常' }, { text: '严重', value: '严重' }]"
                                :filter-method="filterTag" filter-placement="bottom-end">
                                <template slot-scope="scope">
                                    <!-- <el-tag :type="scope.row.tag === '异常' ? 'warning' : 'danger'" disable-transitions>
                                        异常
                                    </el-tag> -->
                                    <el-tag :type="'danger'" disable-transitions>
                                        <!-- {{scope.row.tag}} -->
                                        异常
                                    </el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看用户画像
                                    </el-button>
                                    <!-- <el-button type="text" size="small">编辑</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="网工202">
                    <div id="footer-table-left">
                        <el-table ref="filterTable" :header-cell-style="headerCellStyle" :data="rows"
                            style="width: 100%">
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
                            <!-- <el-table-column prop="isPool" label="贫困生认定" width="120">
                            </el-table-column> -->
                            <el-table-column prop="tag" label="预警" width="100"
                                :filters="[{ text: '异常', value: '异常' }, { text: '严重', value: '严重' }]"
                                :filter-method="filterTag" filter-placement="bottom-end">
                                <template slot-scope="scope">
                                    <!-- <el-tag :type="scope.row.tag === '异常' ? 'warning' : 'danger'" disable-transitions>
                                        异常
                                    </el-tag> -->
                                    <el-tag :type="'danger'" disable-transitions>
                                        <!-- {{scope.row.tag}} -->
                                        异常
                                    </el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看用户画像
                                    </el-button>
                                    <!-- <el-button type="text" size="small">编辑</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- <el-button @click="resetDateFilter">清除过滤器</el-button> -->
                        <!-- <el-button @click="clearFilter">清除所有过滤器</el-button> -->
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserPicture',

        data() {
            return {
                activeClass: "",
                rows: [],
                test: {
                    classes: "计科201",
                    // totalTimesConsumOfMonth: "50",
                    // totalConsumOfMonth: "500",
                    // normalTimes: "50",
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
            // this.drawTable()
            this.getStudent()
        },
        methods: {
            // 获取每行数据
            handleClick(row) {
                this.$store.state.pictureRow = row
                console.log(this.$store.state.pictureRow);
                this.toPicture()
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
            // 获取异常学生信息
            getStudent() {
                this.$axios.post(this.myHttp + "/systemCore/webView/consum?pageNum=1&pageSize=10", this.test).then((
                    res) => {
                    console.log(res.data.rows);
                    this.rows = res.data.rows;
                })
            },
            testAxios() {
                this.$axios.get(this.myHttp + "/systemCore/webView/allClassesInfo").then((res) => {
                    console.log(res.data.data);
                })
            },
            testAxiosPost() {
                this.$axios.post(this.myHttp + "/systemCore/webView/consum?pageNum=1&pageSize=10", this.test).then((
                    res) => {
                    console.log(res.data.rows);
                })
            },
            toPicture() {
                const name = "toPicture"
                this.$router.push({
                    name: name
                })
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
</style>