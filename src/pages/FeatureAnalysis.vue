<template>
    <div class="FeatureAnalysis-container">
        <div class="text">
            班级学生特征分析
        </div>
        <div class="header">
            <div class="box-title"></div>
            <div class="box-bar">
                <div class="box">
                    <span>早餐平均消费</span>
                    <img src="../assets/img/i-img/1.jpg" alt="">
                </div>
                <div class="box">
                    <span>午餐平均消费</span>
                    <img src="../assets/img/i-img/2.jpg" alt=""></div>
                <div class="box">
                    <span>完成平均消费</span>
                    <img src="../assets/img/i-img/3.jpg" alt=""></div>
            </div>
        </div>
        <div class="main">
            <div class="header">
                <div class="box-title"></div>
                <div class="box-bar">
                    <div class="box">
                        <span>午餐消费中位数</span>
                        <img src="../assets/img/i-img/4.jpg" alt=""></div>
                    <div class="box">
                        <span>晚餐消费中位数</span>
                        <img src="../assets/img/i-img/5.jpg" alt=""></div>
                    <div class="box">
                        <span>两月消费总次数</span>
                        <img src="../assets/img/i-img/6.jpg" alt=""></div>
                    <div class="box">
                        <span>两月消费总金额</span>
                        <img src="../assets/img/i-img/7.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="header">
                <div class="box-title"></div>
                <div class="box-bar">
                    <div class="box">
                        <span>晚餐消费中位数</span>
                        <img src="../assets/img/i-img/8.jpg" alt=""></div>
                    <div class="box">
                        <span>夜间消费中位数</span>
                        <img src="../assets/img/i-img/9.jpg" alt=""></div>
                    <div class="box">
                        <span>每个时间段平均消费额度</span>
                        <img src="../assets/img/i-img/10.jpg" alt=""></div>
                    <div class="box">
                        <span>夜间平均消费</span>
                        <img src="../assets/img/i-img/11.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeatureAnalysis',

        data() {
            return {

            };
        },

        mounted() {

        },

        methods: {

        },
    };
</script>

<style scoped>
    
    .FeatureAnalysis-container {
        min-height: 120vh;
        width: 100%;
        border: 1px solid silver;
    }

    .text{
        font-size: 34px;
        color: #666;
    }

    .header,
    .main,
    .footer {
        width: 100%;
        height: 300px;
        margin-top: 30px;
    }

    .box-title {
        /* height: 50px;
        width: 100%;
        background-color: aqua; */
    }

    .box-bar {
        display: flex;
        justify-content: space-around;
        height: 250px;
        width: 100%;
    }

    .box {
        font-size: 25px;
        width: 32%;
        height: 100%;
        /* background-color: aquamarine; */
    }

    .box img {
        width: 100%;
        object-fit: cover;
    }

    .main .box {
        width: 23%;
        height: 100%;
        /* background-color: palegoldenrod; */
    }

    .header {
        /* background-color: bisque; */
    }

    .header .title {}

    .header .box {}

    .main {
        /* background-color: skyblue; */
    }

    .footer {
        /* background-color: pink; */
    }
</style>