<template>
    <div class="left_nav">
        <!-- <button @click="fun">点击跳转</button> -->
        <div class="content">
            <div class="menu-box">
                <!-- 展示与隐藏侧边栏 开始-->
                <input type="checkbox" id="menu-btn">
                <label for="menu-btn"><i class="iconfont icon-yemianfanhui"></i></label>
                <!-- 展示与隐藏侧边栏 结束-->
                <div class="menu">
                    <!-- 侧边栏的标题 开始-->
                    <div class="menu-title">
                        <h2>基于集成学习的贫困生认定与隐性资助系统</h2>
                    </div>
                    <!-- 侧边栏的标题 结束-->

                    <!-- 每一项导航 -->
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item0">
                        <label for="menu-item0">
                            <i class="menu-item-icon iconfont icon-a-01-shujuzhongxin"></i>
                            <span>个人中心</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toIndex">主页</span>
                            <span @click="toSelfInfo">用户信息</span>
                        </div>
                    </div>
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item1">
                        <label for="menu-item1">
                            <i class="el-icon-user-solid"></i>
                            <span>学生信息</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toStudentInfo">班级信息</span>
                            <span>option2</span>
                            <span>option3</span>
                        </div>
                    </div>

                    <div class="menu-item">
                        <input type="checkbox" id="menu-item2">
                        <label for="menu-item2">
                            <i class="menu-item-icon iconfont icon-a-02-kechengguanli"></i>
                            <span>助学金贷款信息</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toPoorStuInfo">助学金贷款信息</span>
                            <span>助学金贷款信息</span>
                        </div>
                    </div>
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item4">
                        <label for="menu-item4">
                            <i class="el-icon-warning"></i>
                            <span>学生消费预警</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toStudentAleart">学生消费行为预警</span>
                            <span>option2</span>
                            <span>option3</span>
                        </div>
                    </div>
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item3">
                        <label for="menu-item3">
                            <i class="menu-item-icon iconfont icon-a-04-zixunfabu"></i>
                            <span>贫困生分析</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toAlgorithmPredict">算法预测</span>
                            <span @click="toFeatureAnalysis">特征分析</span>
                        </div>
                    </div>

                    <div class="menu-item">
                        <input type="checkbox" id="menu-item5">
                        <label for="menu-item5">
                            <i class="el-icon-warning"></i>
                            <span>贫困生认定</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toPoorAffirm">贫困生认定</span>
                        </div>
                    </div>
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item6">
                        <label for="menu-item6">
                            <i class="el-icon-warning"></i>
                            <span>学生画像</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toUserPicture">学生画像</span>
                        </div>
                    </div>
                    <div class="set-line"></div>

                    <div class="menu-item">
                        <label>
                            <i class="menu-item-icon iconfont icon-a-08-shezhi"></i>
                            <span @click="toExit">exit</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../assets/css/index.css"
    import "@/assets/css/iconfont.css"
    import "@/assets/css/iconfont.ttf"
    export default {
        name: 'Aside',
        data() {
            return {

            };
        },
        mounted() {
            this.$router.push({
                name: 'toIndex'
            })
        },
        methods: {
            toIndex() {
                // alert("toIndex")
                const name = "toIndex"
                this.$router.push({
                    name: name
                })
            },
            toSelfInfo() {
                const name = "toSelfInfo"
                this.$router.push({
                    name: name
                })
            },
            toStudentInfo() {
                // alert("toStudentInfo")
                const name = "toStudnetInfo"
                this.$router.push({
                    name: name
                })
            },
            toPoorStuInfo() {
                // alert("toPoorStuInfo")
                const name = "toPoorStuInfo"
                this.$router.push({
                    name: name
                })
            },
            toAlgorithmPredict() {
                // alert('toAlgorithmPredict')
                const name = "toAlgorithmPredict"
                this.$router.push({
                    name: name
                })
            },
            toStudentAleart() {
                // alert('toStudentAleart')
                const name = "toStudentAleart"
                this.$router.push({
                    name: name
                })
            },
            toLogin() {
                // alert('toLogin')
                const name = "toLogin"
                this.$router.push({
                    name: name
                })
            },
            toPoorAffirm() {
                const name = "toPoorAffirm"
                this.$router.push({
                    name: name
                })
            },
            // 特征分析
            toFeatureAnalysis() {
                const name = "toFeatureAnalysis"
                this.$router.push({
                    name: name
                })
            },
            toUserPicture() {
                const name = "toUserPicture"
                this.$router.push({
                    name: name
                })
            },
            toExit() {
                // alert("退出成功!")
                this.toLogin()
            },

        },
    };
</script>

<style scoped>
    /*  */
    .left_nav {
        min-height: 100vh;
        /* width: 10%; */
        /* color: rgb(191, 203, 217); */
        background-color: red;
    }
</style>