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
                        <h3>贫困生隐性资助系统</h3>
                    </div>
                    <!-- 侧边栏的标题 结束-->
                    <!-- 每一项导航 -->
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item0">
                        <label for="menu-item0">
                            <i class="menu-item-icon iconfont icon-a-01-shujuzhongxin"></i>
                            <span>用户中心</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toAdminUser">用户管理</span>
                        </div>
                    </div>
                    <!-- 贫困生管理 -->
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item2">
                        <label for="menu-item2">
                            <i class="menu-item-icon iconfont icon-a-02-kechengguanli"></i>
                            <span>贫困生审核</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toAdminPoor">贫困生审核</span>
                        </div>
                    </div>
                    <!-- <div class="menu-item">
                        <input type="checkbox" id="menu-item3">
                        <label for="menu-item3">
                            <i class="menu-item-icon iconfont icon-a-04-zixunfabu"></i>
                            <span>贫困生分析</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span>贫困生分析</span>
                        </div>
                    </div> -->
                    <!-- 信息导入 -->
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item1">
                        <label for="menu-item1">
                            <i class="el-icon-user-solid"></i>
                            <span>信息导入</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toAdminDataImport()">数据导入</span>
                        </div>
                    </div>
                    <div class="menu-item">
                        <input type="checkbox" id="menu-item4">
                        <label for="menu-item4">
                            <i class="el-icon-warning"></i>
                            <span>日志</span>
                            <i class="menu-item-last iconfont icon-down"></i>
                        </label>
                        <div class="menu-content">
                            <span @click="toAdminLog()">日志</span>
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
    import "../assets/css/adminIndex.css"
    import "@/assets/css/iconfont.css"
    import "@/assets/css/iconfont.ttf"
    export default {
        name: 'AdminAside',
        data() {
            return {

            };
        },
        mounted() {
            // this.$router.push({
            //     name: 'toIndex'
            // })
        },
        methods: {
            toAdminUser() {
                const name = "toAdminUser"
                this.$router.push({
                    name: name
                })
            },
            toLogin() {
                const name = "toLogin"
                this.$router.push({
                    name: name
                })
            },
            toAdminPoor() {
                const name = "toAdminPoor"
                this.$router.push({
                    name: name
                })
            },
            toAdminDataImport() {
                const name = "toAdminDataImport"
                this.$router.push({
                    name: name
                })
            },
            toAdminLog(){
                const name = "toAdminLog"
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

    /* 白色主题 */
    /* :root {
    --color-menu-bg: #fff;
    --font-color-mi: #000;
    --font-color-mi-hover: #1890ff;
    --color-bg-mi-hover: #ececec;
    --border-radius-mi: 2px;
    --transition-menu-time: 0.2s;
    --color-line-bg: #d3d3d3;
} */
    :root {
        --color-bg: #e7e7e7;
        --color-menu-bg: rgb(48, 65, 86);
        /* --font-color-mi: #c9cdd4; */
        --font-color-mi: rgb(191, 203, 217);
        --font-color-mi-hover: rgb(64, 158, 255);
        --color-bg-mi-hover: rgb(38, 52, 69);
        --border-radius-mi: 2px;
        --transition-menu-time: 0.2s;
        --color-line-bg: #333333;
    }

    .content {
        background-color: #e7e7e7;
        min-height: 100vh;
    }

    .menu-box {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        letter-spacing: 0.5px;
        font-weight: 600;
        position: relative;
        width: fit-content;
        min-height: 100vh;
        padding: 6px 12px;
        box-sizing: border-box;
        background-color: var(--color-menu-bg);
    }

    .menu-box input[type='checkbox'] {
        display: none;
    }

    .menu-box>label {
        position: absolute;
        top: 48%;
        right: 0;
        transform: translateX(50%);
        width: 20px;
        height: 20px;
        border-radius: 20px;
        box-shadow: 0px 0px 4px 0px #000;
        background-color: var(--color-menu-bg);
        color: var(--font-color-mi);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .menu-box>label>i {
        font-weight: 900;
        text-indent: -3px;
        font-size: 20px;
        transition: transform var(--transition-menu-time);
        transform: rotate(0deg);
    }

    .menu-box>label:hover {
        box-shadow: 0px 0px 2px 0px #000;
        color: var(--font-color-mi-hover);
    }

    .menu-box>input#menu-btn:checked+label>i {
        transform: rotate(180deg);
    }

    .menu {
        font-size: 16px;
        width: 180px;
        min-height: 100%;
        cursor: pointer;
        overflow: hidden;
        transition: width var(--transition-menu-time);
        color: var(--font-color-mi);
    }

    .menu-box>input#menu-btn:checked~.menu {
        width: 0;
    }

    .menu-title {
        text-align: center;
        margin-bottom: 10px;
    }

    .menu-item>label {
        position: relative;
        width: 100%;
        height: 50px;
        border-radius: var(--border-radius-mi);
        display: flex;
        align-items: center;
    }

    .menu-item>label:hover {
        color: var(--font-color-mi-hover);
    }

    .menu-item>label>i:first-child {
        flex: none;
        margin-right: 6px;
        font-size: 24px;
    }

    .menu-item>label>span {
        flex: 1;
    }

    .menu-item>label>i:last-child {
        flex: none;
        font-size: 20px;
        font-weight: 900;
        transform: rotate(0deg);
        transition: transform var(--transition-menu-time);
    }

    .menu-item>input:checked+label>i:last-child {
        transform: rotate(180deg);
    }

    .menu-content {
        height: 0;
        overflow: hidden;
        transition: height var(--transition-menu-time);
        display: flex;
        flex-wrap: wrap;
        background-color: var(--color-menu-bg);
    }

    /* 选项，若 n 项，就 n * 40px */
    /* 个人中心 */
    .menu-item>input#menu-item0:checked~.menu-content {
        height: calc(1 * 40px);
    }

    /* 学生管理 */
    .menu-item>input#menu-item1:checked~.menu-content {
        height: calc(1 * 40px);
    }

    /* 贫困生管理 */
    .menu-item>input#menu-item2:checked~.menu-content {
        height: calc(1 * 40px);
    }

    /* 贫困生分析 */
    .menu-item>input#menu-item3:checked~.menu-content {
        height: calc(1 * 40px);
    }

    /* 综合预警 */
    .menu-item>input#menu-item4:checked~.menu-content {
        height: calc(1 * 40px);
    }

    .menu-item>input#menu-item5:checked~.menu-content {
        height: calc(1 * 40px);
    }

    .menu-content>span {
        width: 100%;
        text-indent: 20px;
        line-height: 40px;
        border-radius: var(--border-radius-mi);
    }

    .menu-content>span:hover {
        background-color: var(--color-bg-mi-hover);
        color: var(--font-color-mi-hover);
    }

    .set-line {
        margin: 20px 0 10px 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-line-bg);
    }
</style>