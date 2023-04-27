<template>
    <div class="right_main">
        <Header></Header>
        <Content></Content>
        <el-backtop target=".right_main"></el-backtop>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Content from './Content.vue'
    export default {
        name: 'RightMain',
        components: {
            Header,
            Content
        },
        data() {
            return {
            };
        },
        computed:{
         },
        // 路由跳转
        mounted() {
        },

        methods: {

        }
    };
</script>

<style scoped>
    .right_main {
        /* height: 100%; */
        height: 100vh;
        width: 90%;
        overflow: auto;
        background-color: #f0f2f5;
    }
</style>