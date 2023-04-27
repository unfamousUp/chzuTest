<template>
    <div class="login-container">
        <div class="bg-img">
            <!-- <img src="../assets/img/hero.png" alt=""> -->
        </div>
        <div class="text-img">
            <img src="../assets/login-slogan2.png" alt="">
        </div>
        <div class="header">
            <div class="logo">
                <!-- logo -->
                <img src="../assets/chzu-bg.png" alt="">
            </div>
            <div class="header-title">
                基于集成学习的贫困生认定与隐性资助系统
            </div>
        </div>
        <div class="login-bar">
            <div class="content">
                <!-- 标题 -->
                <span>
                    <div class="title">统一认证登录</div>
                </span>
                <!-- 选项卡 -->
                <div class="tabs">
                    <el-tabs stretch v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="短信登录" name="first">
                            <!-- 输入框 -->
                            <div class="input">
                                <div class="input-box">
                                    <el-input placeholder="请输入手机号码" v-model="telphone">
                                    </el-input>
                                </div>
                                <div class="input-box">
                                    <el-input style="width: 240px;" placeholder="请输入短信验证码" v-model="code">
                                    </el-input>
                                    <div class="button">
                                        <el-button type="primary" plain>获取短信验证码</el-button>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="密码登录" name="second">
                            <!-- 输入框 -->
                            <div class="input">
                                <div class="input-box">
                                    <el-input placeholder="请输入学工号" v-model="user.account">
                                    </el-input>
                                </div>
                                <div class="input-box">
                                    <!-- <el-input placeholder="请输入您的密码" prefix-icon="el-icon-search" v-model="">
                                    </el-input> -->
                                    <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="login-button">
                    <el-button @click="loginSubmit()" style="width: 100%; font-size: 20px;" type="primary">登 录
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        data() {
            return {
                activeName: 'second',
                telphone: '',
                code: '',
                password: '',
                mydata: '',
                user:{}
            };
        },

        mounted() {

        },

        methods: {
            toIndex() {
                const name = "toIndex"
                this.$router.push({
                    name: name
                })
            },
            toMain() {
                const name = "toMain"
                this.$router.push({
                    name: name
                })
            },
            toAdminMain() {
                const name = "toAdminMain"
                this.$router.push({
                    name: name
                })
            },
            loginSubmit() {
                if (this.user.account === '203001') {
                    // alert("登录成功！")
                    this.toMain()
                } else if (this.user.account === 'admin') {
                    // alert("登录成功！admin")
                    this.toAdminMain()
                }
            },
            handleClick(){

            }
        },
    };
</script>

<style scoped>
    .bg-img {
        position: absolute;
        /* width: 1000px; */
        left: 12%;
        top: 28%;
    }

    .text-img{
        position: absolute;
        top: 500px;
        left: 400px;
    }

    .login-container {
        /* background: url('../assets/bg.jpg') 0% 0% / 100% 100% no-repeat fixed; */
        background-image: url("../assets/login-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        min-height: 100vh;
        position: relative;
    }

    /* 顶部 */
    .header {
        height: 140px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
        position: unset;
    }

    /* 顶部logo */
    .header .logo {
        float: left;
        height: 100%;
        line-height: 70px;
        font-size: 22px;
        margin-top: 30px;
        margin-left: 40px;
    }

    /* 顶部标题 */
    .header .header-title {
        float: left;
        margin-left: 30px;
        height: 140;
        line-height: 140px;
        /* font-size: 22px; */
        font-size: 60px;
        font-weight: 500;
        font-family: AlibabaPuHuiTi_2_105_Heavy;
        color: #005BA5;
        letter-spacing: 3px;
    }

    .login-bar {
        position: absolute;
        padding: 0px 23px;
        right: 18%;
        /* left: 18%; */
        top: 22%;
        width: 440px;
        height: 565px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.14);
        border-radius: 4px;
        box-sizing: border-box;

    }

    .content {
        background-color: #ffffff;
        min-height: 0;
    }

    /deep/ .content .el-tabs__item {
        font-size: 17px;
    }

    .content .title {
        margin: 0 auto;
        width: 144px;
        height: 100px;
        line-height: 100px;
        font-size: 24px;
        font-family: NotoSansSC-Light, NotoSansSC;
        color: #363636;
    }

    .content .tabs {
        margin-top: 20px;
    }

    .content .input>.input-box {
        margin-top: 25px;
    }

    .button {
        float: right;
    }

    .content .login-button {
        width: 100%;
        margin-top: 25px;
    }
</style>