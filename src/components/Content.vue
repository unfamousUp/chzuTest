<template>
    <div class="content-bar">
        <!-- <div class="title">欢迎您，[辅导员]</div> -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Content',

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
    .content-bar{
        box-sizing: border-box;
        padding: 30px 20px 20px 20px;
        width: 100%;
        min-height: 100vh;
        /* background-color: #f0f2f5; */
    }    

    /* .content-bar .title{

    } */
</style>