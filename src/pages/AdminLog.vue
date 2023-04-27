<template>
    <div class="adminLog-container">
        <div class="box">
            <el-table ref="filterTable" :data="this.teachers" style="width: 100%">
                <el-table-column label="时间" width="120">
                    <!-- <el-button @click="updatedButton()" type="primary">处理</el-button> -->
                    {{this.getNowDate()}}
                </el-table-column>
                <el-table-column label="日志内容" width="120">
                    贫困生审核信息
                </el-table-column>
                <el-table-column prop="state" label="当前环节" width="120">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state === '0' ">审核中...</span>
                        <span v-else>审核通过</span>
                    </template>
                </el-table-column>
                <el-table-column prop="teacherName" label="发送人" width="120">
                </el-table-column>
                <el-table-column prop="sex" label="辅导员性别" width="120">
                    <template slot-scope="scope">
                        <span v-if="scope.row.sex === '0' "></span>
                        <span v-else>男</span>
                    </template>
                </el-table-column>
                <el-table-column prop="institution" label="所属学院" width="160">

                </el-table-column>
                <el-table-column prop="phone" label="联系方式" width="120">
                    123456789
                </el-table-column>
                <!-- <el-table-column label="审核信息" width="120">
                    <el-button type="primary">查看</el-button>
                </el-table-column> -->
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdminLog',

        data() {
            return {
                teachers: [],
                overTeachers: [],
            };
        },

        mounted() {
            this.getTeachers()
        },

        methods: {
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            getTeachers() {
                this.teachers = this.$store.state.teachers;
                console.log(this.$store.state.teachers);
                console.log(this.teachers);
            },
            getNowDate() {
                const timeOne = new Date()
                const year = timeOne.getFullYear()
                let month = timeOne.getMonth() + 1
                let day = timeOne.getDate()
                month = month < 10 ? '0' + month : month
                day = day < 10 ? '0' + day : day
                const NOW_MONTHS_AGO = `${year}-${month}-${day}`
                return NOW_MONTHS_AGO
            }
        },
    };
</script>

<style scoped>

</style>