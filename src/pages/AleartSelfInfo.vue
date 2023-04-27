<template>
    <div class="aleartSelfInfo-container">
        <div class="header">
            <el-page-header @back="goBack" content="详情页面">
            </el-page-header>
        </div>
        <div class="main">
            <div class="aleartTable-bar">
                <div class="table-title" style="color:#666; margin-top: 20px;font-weight: bold;">
                    <span>姓名：{{row.studentName}}</span>
                    <span>学号：{{row.studentNumReflect}} </span>
                    <span>校园卡消费信息</span>
                </div>
                <div class="table">
                    <div id="aleartTableA">

                    </div>
                    <div id="aleartTableB">

                    </div>
                    <div id="aleartTableC">

                    </div>
                </div>
                <div class="table-title" style="color:#666; margin-top: 20px;font-weight: bold;">
                    <span>异常指标</span>
                </div>
                <div class="pie-table">
                    <div id="pieTableA">

                    </div>
                    <div id="pieTableB">

                    </div>
                    <div id="pieTableC">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AleartSelfInfo',

        data() {
            return {
                row: {}
            };
        },

        mounted() {
            this.row = this.$store.state.row
            this.drawTableA()
            this.drawTableB()
            this.drawTableC()
            this.drawPieTableA()
            this.drawPieTableB()
            this.drawPieTableC()

        },

        methods: {
            goBack() {
                const name = "toStudentAleart"
                this.$router.push({
                    name: name
                })
            },
            drawPieTableA() {
                var myRow = this.row;
                var exceptionConsum;
                if ((myRow.totalTimesConsumOfMonth - myRow.normalTimes) > 0) {
                    exceptionConsum = myRow.totalTimesConsumOfMonth - myRow.normalTimes
                } else {
                    exceptionConsum = -(myRow.totalTimesConsumOfMonth - myRow.normalTimes)
                }
                // 早 午 晚 夜 消费次数
                var myData = [
                    myRow.totalTimesConsumOfMonth, // 每月总消费总次数
                    myRow.normalTimes, // 正常消费次数
                    exceptionConsum // 异常消费次数
                ]
                var myChart = this.$echarts.init(document.getElementById('pieTableA'));
                var option = {
                    title: {
                        text: '两月消费总次数小于50次',
                        // subtext: '每月消费总次数',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [{
                        name: '消费总次数',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 50,
                                name: '消费总次数阈值'
                            },
                            {
                                value: myData[0],
                                name: '实际消费总次数'
                            },
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
            drawPieTableB() {
                var myRow = this.row;
                var exceptionConsum;
                if ((myRow.totalTimesConsumOfMonth - myRow.normalTimes) > 0) {
                    exceptionConsum = myRow.totalTimesConsumOfMonth - myRow.normalTimes
                } else {
                    exceptionConsum = -(myRow.totalTimesConsumOfMonth - myRow.normalTimes)
                }
                // 早 午 晚 夜 消费次数
                var myData = [
                    myRow.totalTimesConsumOfMonth, // 每月总消费总次数
                    myRow.normalTimes, // 正常消费次数
                    exceptionConsum, // 异常消费次数
                    myRow.totalConsumOfMonth
                ]
                var myChart = this.$echarts.init(document.getElementById('pieTableB'));
                var option = {
                    title: {
                        text: '两月消费总金额小于500',
                        // subtext: '每月消费总金额',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [{
                        name: '消费总金额',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 500,
                                name: '正常消费总金额阈值'
                            },
                            {
                                value: myRow.totalConsumOfMonth,
                                name: '学生实际消费总金额'
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
            drawPieTableC() {
                var myRow = this.row;
                var exceptionConsum;
                if ((myRow.totalTimesConsumOfMonth - myRow.normalTimes) > 0) {
                    exceptionConsum = myRow.totalTimesConsumOfMonth - myRow.normalTimes
                } else {
                    exceptionConsum = -(myRow.totalTimesConsumOfMonth - myRow.normalTimes)
                }
                // 早 午 晚 夜 消费次数
                var myData = [
                    myRow.totalTimesConsumOfMonth, // 每月总消费总次数
                    myRow.normalTimes, // 正常消费次数
                    exceptionConsum, // 异常消费次数
                    myRow.totalConsumOfMonth
                ]
                var myChart = this.$echarts.init(document.getElementById('pieTableC'));
                var option = {
                    title: {
                        text: '两月正常消费次数小于50次',
                        // subtext: '每月正常消费次数',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [{
                        name: '正常消费次数',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 50,
                                name: '正常消费次数阈值'
                            },
                            {
                                value: myRow.normalTimes,
                                name: '学生实际正消费次数'
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
            drawTableA() {
                var myRow = this.row;
                // 早 午 晚 夜 平均消费
                var myData = [
                    myRow.avgBreakfastConsum,
                    myRow.avgLunchConsum,
                    myRow.avgDinnerConsum,
                    myRow.avgNightConsum,
                    myRow.timesAvgConsum,
                ]
                // console.log(myRow.avgBreakfastConsum);
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('aleartTableA'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [
                            '早餐平均消费', '午餐平均消费', '晚餐平均消费', '夜间平均消费', '每次平均消费额度'
                            // '早餐消费次数', '午餐消费次数', '晚餐消费次数', '夜间消费次数',
                            // '每月时间段消费总次数', '每次平均消费额度', '正常消费次数',
                            // '消费异常的次数',
                        ],
                        "axisLabel": {
                            interval: 0
                        }
                    },

                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: myData,
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            drawTableB() {
                var myRow = this.row;
                // 早 午 晚 夜 平均消费
                var myData = [
                    myRow.avgBreakfastConsum,
                    myRow.avgLunchConsum,
                    myRow.avgDinnerConsum,
                    myRow.avgNightConsum
                ]
                // console.log(myRow.avgBreakfastConsum);
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('aleartTableB'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [
                            // '早餐平均消费', '午餐平均消费', '晚餐平均消费', '夜间平均消费',
                            '早餐消费次数', '午餐消费次数', '晚餐消费次数', '夜间消费次数',
                            // '每月时间段消费总次数', '每次平均消费额度', '正常消费次数',
                            // '消费异常的次数',
                        ],
                        "axisLabel": {
                            interval: 0
                        }
                    },

                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: myData,
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            drawTableC() {
                var myRow = this.row;
                var exceptionConsum;
                if ((myRow.totalTimesConsumOfMonth - myRow.normalTimes) > 0) {
                    exceptionConsum = myRow.totalTimesConsumOfMonth - myRow.normalTimes
                } else {
                    exceptionConsum = -(myRow.totalTimesConsumOfMonth - myRow.normalTimes)
                }
                // 早 午 晚 夜 消费次数
                var myData = [
                    myRow.totalTimesConsumOfMonth,
                    myRow.normalTimes,
                    exceptionConsum
                ]
                // console.log(myRow.avgBreakfastConsum);
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('aleartTableC'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [
                            // '早餐平均消费', '午餐平均消费', '晚餐平均消费', '夜间平均消费',
                            // '早餐消费次数', '午餐消费次数', '晚餐消费次数', '夜间消费次数',
                            '每月时间段消费总次数', '正常消费次数', '消费异常的次数'
                        ],
                        "axisLabel": {
                            interval: 0
                        }
                    },

                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: myData,
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        },
    };
</script>

<style scoped>
    .table #aleartTableA,
    #aleartTableB,
    #aleartTableC {
        /* margin-left: -1600px;/ */
        width: 1500px;
        height: 400px;
    }

    .pie-table {
        display: flex;
    }

    .pie-table #pieTableA,
    #pieTableB,
    #pieTableC {
        width: 500px;
        height: 500px;
    }

    .aleartSelfInfo-container {
        width: 100%;
        min-height: 100vh;
        border: 1px solid silver;
        background-color: #fff;
    }

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

    .table-title span {
        display: block;
        padding: 10px;
        font-weight: bold;
        font-size: 30px;
        border-bottom: 1px solid silver;
    }

    .table-title .title {
        width: 30%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        background-color: aliceblue;
    }
</style>