<template>
    <div class="index-container">
        <!-- 主页 -->
        <div class="index-header">
            <div class="box">
                <div class="left">
                    <div style="color: #40c9c6;">
                        <i class="el-icon-user-solid"></i>
                    </div>
                </div>
                <div class="right">
                    <div class="title">班级管理</div>
                    <div class="value">
                        <ul>
                            <li>计算机科学与技术</li>
                            <li>网络工程</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="left">
                    <div>
                        <i style="color:#f56c6c;" class="el-icon-warning"></i>
                    </div>
                </div>
                <div class="right">
                    <div class="title">学生消费预警人数</div>
                    <div class="num num-1">
                        <span>8</span>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="left">
                    <div>
                        <i style="color:#e6a23c;" class="el-icon-s-custom"></i>
                    </div>
                </div>
                <div class="right">
                    <div class="title">预选贫困生人数</div>
                    <div class="num num-2">
                        <span>11</span>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="left">
                    <div>
                        <i class="el-icon-user-solid"></i>
                    </div>
                </div>
                <div class="right">
                    <div class="title">助学金贷款人数</div>
                    <div class="num num-2">
                        <span>22</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-content">
            <div class="header">
                <!-- <div id="main" style="width: 100%;height:500px;background: rgb(255, 255, 255);"></div> -->
            </div>
            <div class="middle">
                <div id="middle-table-left">

                </div>
                <div id="middle-table-middle">

                </div>
                <div id="middle-table-right">

                </div>
            </div>
            <div class="footer">
                <!-- table组件 -->
                <div id="footer-table-left">
                    <el-table ref="filterTable" :header-cell-style="headerCellStyle" :data="tableData"
                        style="width: 100%">
                        <el-table-column prop="stuNum" label="学号" width="120">
                        </el-table-column>
                        <el-table-column prop="stuName" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="sex" label="性别" width="80">
                        </el-table-column>
                        <el-table-column prop="department" label="所属院系" width="180">
                        </el-table-column>
                        <el-table-column prop="stuClass" label="行政班级" width="120">
                        </el-table-column>
                        <el-table-column prop="tel" label="联系方式" width="120">
                        </el-table-column>
                        <!-- <el-table-column prop="isPool" label="贫困生认定" width="120">
                        </el-table-column> -->
                        <el-table-column prop="tag" label="预警" width="100"
                            :filters="[{ text: '异常', value: '异常' }, { text: '严重', value: '严重' }]"
                            :filter-method="filterTag" filter-placement="bottom-end">
                            <template slot-scope="scope">
                                <el-tag :type="scope.row.tag === '异常' ? 'warning' : 'danger'" disable-transitions>
                                    {{scope.row.tag}}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <!-- <el-button type="text" size="small">编辑</el-button> -->
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- <el-button @click="resetDateFilter">清除过滤器</el-button> -->
                    <el-button @click="clearFilter">清除所有过滤器</el-button>
                </div>                  
                <div id="footer-table-right">
                    <div class="bg-img">
                        <!-- <img src="../assets/img/bg-img1.jpg" alt=""> -->
                    </div>
                    <div class="chzuImg-bar">
                        <div class="chzuImg">
                            <img src="../assets/chzu-bg.png" alt="">
                        </div>
                    </div>
                    <div class="myProgress-bar">
                        <div class="title">
                            <span style="color:#666">贷款人数占比</span>
                        </div>
                        <div style="color:#666" class="myProgress">
                            <!-- v-for="arr in arrs" :key="arr" style="list-style: none;" -->
                            <span>计科201</span>
                            <el-progress :percentage="5"></el-progress>
                            <span>计科202</span>
                            <el-progress :percentage="7"></el-progress>
                            <span>网工201</span>
                            <el-progress :percentage="11"></el-progress>
                            <span>网工202</span>
                            <el-progress :percentage="4"></el-progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexRoute',
        data() {
            return {
                // 表格表头颜色
                headerCellStyle: {
                    backgroundColor: 'rgb(84,112,198)',
                    color: '#fff',
                    // fontSize:'18px'
                },
                tableData: [{
                        stuNum: '2023223375',
                        stuName: '霍冕庆',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科201',
                        tel: '18170234072',
                        isPool: '非贫困生',
                        tag: '异常'
                    },
                    {
                        stuNum: '2019240038',
                        stuName: '何宽朋',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科201',
                        tel: '18170234072',
                        isPool: '非贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2022445494',
                        stuName: '诸垚煊',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '计科202',
                        tel: '123456789',
                        isPool: '非贫困生',
                        tag: '严重'
                    }, {
                        stuNum: '2023221063',
                        stuName: '龚队劫',
                        sex: '男',
                        department: '计算机与信息工程学院',
                        stuClass: '网工201',
                        tel: '123456789',
                        isPool: '非贫困生',
                        tag: '异常'
                    }, {
                        stuNum: '2019470536',
                        stuName: '史鹭妲',
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
                    }
                ]
            };
        },
        mounted() {
            // this.drawChart()
            this.drawMiddleLeft()
            this.drawMiddleMiddle()
            this.drawMiddleRight()
        },
        methods: {
            // drawChart() {
            //     // 基于准备好的dom，初始化echarts实例
            //     var myChart = this.$echarts.init(document.getElementById('main'));

            //     // 指定图表的配置项和数据
            //     var option = {
            //         title: {
            //             text: '算法预测'
            //         },
            //         tooltip: {
            //             trigger: 'axis',
            //             axisPointer: {
            //                 type: 'shadow'
            //             }
            //         },
            //         legend: {},
            //         grid: {
            //             left: '3%',
            //             right: '4%',
            //             bottom: '3%',
            //             containLabel: true
            //         },
            //         xAxis: {
            //             type: 'value',
            //             boundaryGap: [0, 0.01]
            //         },
            //         yAxis: {
            //             type: 'category',
            //             data: ['计科201', '计科202', '网工201','网工202']
            //         },
            //         series: [{
            //                 name: '准确率',
            //                 type: 'bar',
            //                 data: [86.16, 87.11, 86.73]
            //             },
            //             {
            //                 name: '精确率',
            //                 type: 'bar',
            //                 data: [100, 92.78, 90.24]
            //             },
            //             {
            //                 name: '召回率',
            //                 type: 'bar',
            //                 data: [44.62, 52.51, 44.62]
            //             }
            //         ]
            //     };

            //     // 使用刚指定的配置项和数据显示图表。
            //     myChart.setOption(option);
            // },
            drawMiddleLeft() {
                var myChart = this.$echarts.init(document.getElementById('middle-table-left'));
                var option = {
                    title: {
                        text: '班级人数',
                        // subtext: 'Fake Data',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '7%',
                        left: 'center'
                    },
                    series: [{
                        name: '班级人数',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [{
                                value: 63,
                                name: '计科201'
                            },
                            {
                                value: 62,
                                name: '计科202'
                            },
                            {
                                value: 44,
                                name: '网工201'
                            },
                            {
                                value: 51,
                                name: '网工202'
                            },
                        ]
                    }]
                };
                myChart.setOption(option);
            },
            drawMiddleMiddle() {
                var myChart = this.$echarts.init(document.getElementById('middle-table-middle'));

                var option = {
                    title: {
                        text: '男女比例',
                        // subtext: 'Fake Data',
                        left: 'center',
                        // top:'5%'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [{
                        name: '人数',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 1,
                                name: '计科201'
                            },
                            {
                                value: 2,
                                name: '计科202'
                            },
                            {
                                value: 4,
                                name: '网工201'
                            },
                            {
                                value: 4,
                                name: '网工202'
                            }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                };
                myChart.setOption(option);
            },
            drawMiddleRight() {
                var myChart = this.$echarts.init(document.getElementById('middle-table-right'));

                var option = {

                    title: {
                        text: '预警人数', // 主标题
                        // 主标题文本样式设置
                        textStyle: {
                            // color: '#666',
                            // fontWeight: 'bold',
                            // fontSize: '20px',
                        },
                        left:'center'
                    },

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['计科201', '计科202', '网工201', '网工202']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [2, 1, 2, 3],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        colorBy: 'data'
                    }]
                };
                myChart.setOption(option);
            },
            resetDateFilter() { // Element-ui
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            handleClick(row) { // 查看按钮
                console.log(row);
                // alert('toStudentAleart')
                const name = "toStudentAleart"
                this.$router.push({
                    name: name
                })
            }
        },
    };
</script>

<style scoped>
    ul {
        text-decoration: none;
        list-style: none;
    }

    .index-container {
        box-sizing: border-box;
        height: 90%;
    }

    .index-container .index-header {
        display: flex;
        justify-content: space-between;
        height: 100px;
        width: 100%;
        margin-bottom: 40px;
        /* background-color: pink; */
    }

    .index-container .index-header .box {
        width: 360px;
        height: 108px;
        color: #666;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        border-color: rgba(0, 0, 0, 0.05);
    }

    .index-container .index-header .box .right {
        float: right;
        width: 150px;
        height: 100%;
        /* background-color: pink; */
        /* margin: 14px 0 0 14px; */
        /* padding: 16px; */
        /* -webkit-transition: all 0.38s ease-out; */
        /* transition: all 0.38s ease-out; */
        /* border-radius: 6px; */
    }

    .index-container .index-header .box .right .title {
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
    }

    /* 班级管理 */
    .right .value {
        font-size: 15px;
        text-align: center;
        color: #666;
    }

    .right .value ul>li {
        margin-bottom: 5px;
        cursor: pointer;
    }

    .right .value ul>li:hover {
        color: #40c9c6;
    }

    /* 学生预警 */
    .right .num {
        /* background-color: pink; */
        text-align: center;
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        font-weight: bold;
        font-size: 20px;
        font-family: Helvetica Neue,
            Helvetica,
            PingFang SC,
            Hiragino Sans GB,
            Microsoft YaHei,
            Arial,
            sans-serif;
    }

    .num-1:hover {
        color: #f56c6c;
        cursor: pointer;
    }

    .num-2:hover {
        color: #e6a23c;
        cursor: pointer;
    }

    .num-3:hover {
        color: #666;
        cursor: pointer;
    }

    .index-container .index-header .box .left {
        float: left;
        font-weight: bold;
        width: 100px;
        height: 100%;
        /* background-color: skyblue; */
        font-size: 50px;
        /* margin: 26px; */
        /* margin-left: 0px; */
    }

    .index-container .index-header .box .left div {
        margin-top: 20px;
        padding-left: 30px;
    }

    /* content */
    .index-container .index-content {}

    .index-container .index-content .header {}

    /* middle */

    .index-container .index-content .middle {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
        width: 100%;
        height: 320px;
        /* background-color: pink; */
    }

    .index-container .index-content .middle div {
        box-sizing: border-box;
        width: 31.5%;
        height: 100%;
        background-color: #fff;
    }

    /* footer */
    .index-container .index-content .footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 400px;
        /* margin-top: 10px; */
        /* background-color: pink; */
        /* border: #666 solid 1px; */
    }

    .footer #footer-table-left {
        width: 72.5%;
        height: 100%;
        /* background-color: skyblue; */
    }

    .footer #footer-table-right {
        position: relative;
        /* overflow: hidden; */
        width: 25%;
        height: 100%;
        /* background-color: pink; */
        background-color: #fff;
    }

    .footer #footer-table-right .bg-img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100px;
        /* overflow: hidden; */
        background-color: #666;
        border-radius: 4px;
        border: 1px solid #e6ebf5;
        background-color: #FFFFFF;
        color: #303133;
        transition: 0.3s;
    }

    .footer #footer-table-right .bg-img img {
        position: relative;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s linear;
    }

    .footer #footer-table-right .bg-img img:hover {
        transform: scale(1.05, 1.05);
        filter: contrast(130%);
    }



    .footer #footer-table-right .chzuImg-bar {
        z-index: 3;
        position: absolute;
        top: 22px;
        left: 20px;
        background-color: #fff;
        padding: 5px;
        width: 200px;
        height: 60px;
        /* border-radius: 50%; */
        /* background-color: pink; */
    }

    .chzuImg {
        /* overflow: hidden; */
        /* border-radius: 50%; */
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .chzuImg img {
        object-fit: cover;
        width: 100%;
    }

    .footer #footer-table-right .myProgress-bar {
        padding: 50px 10px;
        position: relative;
        margin-top: 10px;
        width: 100%;
        height: 250px;
        /* background-color: pink; */
    }

    .footer #footer-table-right .myProgress-bar .title {
        position: absolute;
        right: 0;
        left: 0;
        top: 0px;
        margin: 0px 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        /* width: 50px; */
        /* height: 50px; */
        /* background-color: pink; */
    }

    .footer #footer-table-right .myProgress-bar .myProgress {}
</style>