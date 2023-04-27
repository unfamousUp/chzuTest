<template>
    <div class="algorithmPredict-container">
        <!-- <div class="title">算法预测</div> -->
        <div class="algorithm-bar">
            <el-tabs type="border-card">
                <div class="algorithm-content">
                    <div style="width: 100%; height: 600px;" id="echartsTableA">
                    </div>
                </div>
                <div class="voteRule">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="投票策略" name="1">
                            <div>根据上面三个算法预测，进行综合考量</div>
                        </el-collapse-item>
                    </el-collapse>
                    <div style="width: 100%; height: 400px;" id="echartsTableB">
                    </div>
                </div>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AlgorithmPredict',

        data() {
            return {
                activeNames: ['1']
            };
        },

        mounted() {
            this.$nextTick(() => {
                this.drawTableA()
                this.drawTableB()
            });

        },

        methods: {
            drawTableA() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('echartsTableA'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '算法预测'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {},
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Logistic Regression', 'XGBoost', 'MLP深度学习']
                    },
                    series: [{
                            name: '准确率',
                            type: 'bar',
                            data: [86.16, 87.11, 86.73]
                        },
                        {
                            name: '精确率',
                            type: 'bar',
                            data: [100, 92.78, 90.24]
                        },
                        {
                            name: '召回率',
                            type: 'bar',
                            data: [44.62, 52.51, 44.62]
                        },
                        {
                            name: 'f1值',
                            type: 'bar',
                            data: [61.71, 67.06, 66.43]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            drawTableB() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('echartsTableB'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '算法预测',
                        top: '5%'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {},
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['投票策略']
                    },
                    series: [{
                            name: '准确率',
                            type: 'bar',
                            data: [87.13]
                        },
                        {
                            name: '精确率',
                            type: 'bar',
                            data: [100]
                        },
                        {
                            name: '召回率',
                            type: 'bar',
                            data: [50.01]
                        },
                        {
                            name: 'f1值',
                            type: 'bar',
                            data: [65.01]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            handleChange(val) {
                console.log(val);
            }
        }
    };
</script>

<style scoped>
    .algorithmPredict-container {}

    .algorithmPredict-container .title {
        /* height: 50px; */
        /* line-height: 50px; */
        font-size: 30px;
        font-weight: bold;
    }

    .algorithm-bar .algorithm-content {
        height: 600px;
        background-color: #fff;
    }

    .algorithm-bar .voteRule {
        width: 100%;
        height: 600px;
        margin-top: 20px;
    }

    /deep/.el-collapse-item__header {
        font-size: 30px;
    }

    /deep/.el-collapse-item__content {
        font-size: 20px;
    }

    /* .algorithm-content #echartsTableA,
    #echartsTableB {
        width: 100%;
        height: 600px;
    } */
</style>