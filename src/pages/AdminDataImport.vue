<template>
    <div class="adminDataImport-container">
        <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传csv/excel文件，且不超过10MB</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: 'AdminDataImport',

        data() {
            return {
                teacherArr: [{
                    teacherNum: '203001',
                    teacherName: '徐天天',
                    teacherSex: '男',
                    department: '计算机与信息工程学院',
                    position: '辅导员',
                    tel: '18133445530',
                }],
                fileList: [
                //     {
                //     name: 'food.jpeg',
                //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                // }, {
                //     name: 'food2.jpeg',
                //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                // }
            ]
            };
        },

        mounted() {

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
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        },
    };
</script>

<style scoped>

</style>