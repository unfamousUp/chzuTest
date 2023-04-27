<template>
    <div class="header">
        <div class="navbar">
            <div class="title">欢迎您，[管理员]</div>
            <!-- 右侧菜单 -->
            <div class="right-menu">
                <div class="teacher-item">
                    <div class="head"><img src="../assets/img/teacherHead.gif" alt=""></div>
                    <div class="teacherName">hi,Admin!!</div>
                </div>
                <div class="downMenu">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                            <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                            <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdminHeader',

        data() {
            return {

            };
        },

        mounted() {

        },

        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
            }
        },
    };
</script>

<style scoped>
    .navbar {
        /* height: 50px; */
        position: relative;
        width: 100%;
        height: 5vh;
        overflow: hidden;
        position: relative;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }

    .navbar .title{
        position: absolute;
        z-index: 99;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
        font-weight: 1000;
        font-size: 20px;
        color: #666;
        font-weight: bold;
    }

    .right-menu {
        position: relative;
        float: right;
        width: 180px;
        height: 100%;
        line-height: 50px;
        color: #666;
        font-weight: bold;
        /* background-color: red; */
    }

    /* 老师item */
    .right-menu .teacher-item {
        display: flex;
        height: inherit;
        text-align: center;
        line-height: 50px;
        /* background-color: pink; */

    }

    /* 头像 */
    .right-menu .teacher-item .head {
        box-sizing: border-box;
        height: 100%;
        width: 40px;
        /* border: 3px solid silver; */
        /* background-color: aqua; */
    }

    .right-menu .teacher-item .teacherName {
        box-sizing: border-box;
        height: 100%;
        line-height: 43px;
        margin-left: 20px;
        font-weight: 500;
        /* border: 3px solid silver; */
    }

    /* 下拉菜单 */
    .downMenu {
        position: absolute;
        right: 10px;
        top: 0;
        width: 20px;
        /* background-color: pink; */
        height: 100%;
    }

    .head img {
        margin-top: 2px;
        width: 40px;
        cursor: pointer;
        border-radius: 10px
    }
</style>