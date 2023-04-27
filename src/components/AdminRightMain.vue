<template>
    <div class="right_main">
        <AdminHeader></AdminHeader>
        <AdminContent></AdminContent>
        <el-backtop target=".right_main">
        </el-backtop>
    </div>
</template>

<script>
    import AdminHeader from './AdminHeader.vue'
    import AdminContent from './AdminContent.vue'
    export default {
        name: 'AdminRightMain',
        components: {
            AdminHeader,
            AdminContent
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