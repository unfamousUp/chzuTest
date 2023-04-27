<template>
    <div class="main">
        <!-- <LeftNavigation>
        </LeftNavigation> -->
        <AdminAside></AdminAside>
        <AdminRightMain></AdminRightMain>
    </div>
</template>

<script>
    import AdminAside from './AdminAside.vue'
    import AdminRightMain from './AdminRightMain.vue'
    export default {
        name: 'AdminMain',
        components: {
            AdminAside,
            AdminRightMain
        },
        data() {
            return {

            };
        },
        methods: {
            toAdminUser() {
                const name = "toAdminUser"
                this.$router.push({
                    name: name
                })
            }
        },
        mounted() {
            this.toAdminUser()
        },
    };
</script>

<style scoped>
    .main {
        display: flex;
        height: 90vh;
    }
</style>