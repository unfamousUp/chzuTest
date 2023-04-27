<template>
    <div class="classInfo-container">
        <div class="header">
            <div class="title">
                <div class="title-1">男女比例</div>
                <div class="title-2">贫困生/非贫困生</div>
                <div class="title-3">助学金贷款人数比例</div>
            </div>
        </div>
        <div class="main">
            <div class="table">
                <div id="table-A">

                </div>
                <div id="table-B">

                </div>
                <div id="table-C">

                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ClassInfo',

        data() {
            return {

            };
        },

        mounted() {
            this.drawTableA()
            this.drawTableB()
            this.drawTableC()

        },

        methods: {
            drawTableA() {
                var myChart = this.$echarts.init(document.getElementById('table-A'));

                var option = {
                    title: {
                        text: '男女比例',
                        subtext: '',
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
                        name: '人数',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 54,
                                name: '男'
                            },
                            {
                                value: 8,
                                name: '女'
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
            drawTableB() {
                var myChart = this.$echarts.init(document.getElementById('table-B'));

                var option = {
                    title: {
                        text: '贫困生比例',
                        subtext: '',
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
                        name: '人数',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 2,
                                name: '贫困生'
                            },
                            {
                                value: 60,
                                name: '非贫困生'
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
            drawTableC() {
                var myChart = this.$echarts.init(document.getElementById('table-C'));


                var option = {
                    title: {
                        text: '助学金贷款人数比例',
                        subtext: '',
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
                        name: '人数',
                        type: 'pie',
                        radius: '50%',
                        data: [{
                                value: 4,
                                name: '贷款人数'
                            },
                            {
                                value: 58,
                                name: '未贷款人数'
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
            }

        },
    };
</script>

<style scoped>
    .classInfo-container {
        width: 100%;
        min-height: 41vh;
        margin-top: 20px;
        border: 1px solid silver;
        box-sizing: border-box;
    }

    /* header */
    .classInfo-container .header {
        width: 100%;
    }

    .classInfo-container .header .title {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 50px;
        background-color: rgb(84, 112, 198);
        /* background-color: #66b1ff; */
        color: #fff;
        font-weight: 500;
    }

    .classInfo-container .header .title div {
        width: 200px;
        height: 100%;
        line-height: 50px;
        text-align: center;
        /* background-color: pink; */
    }

    /* main */
    .classInfo-container .main {
        width: 100%;
    }

    .classInfo-container .main .table {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .classInfo-container .main .table div {
        width: 30%;
        height: 100%;
        /* background-color: pink; */
        background-color: #fff;
    }
</style>