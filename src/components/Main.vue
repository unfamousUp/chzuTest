<template>
    <div class="main">
        <!-- <LeftNavigation>
        </LeftNavigation> -->
        <Aside></Aside>
        <RightMain></RightMain>
    </div>
</template>

<script>
    import Aside from './Aside.vue'
    import RightMain from './RightMain.vue'
    export default {
        name: 'Main',
        components: {
            Aside,
            RightMain
        },
        data() {
            return {

            };
        },
        methods: {

        },
    };
</script>

<style scoped>
    .main {
        display: flex;
        height: 90vh;
    }
</style>