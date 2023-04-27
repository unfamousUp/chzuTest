<template>
    <div class="selfInfo-container">
        <!-- 个人信息 -->
        <div class="title">
            <span>用户信息</span>
        </div>
        <div class="selfInfo-table">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="学工号">
                    <el-input v-model="form.teachNum" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.sex">
                        <el-radio :label="`male`">男</el-radio>
                        <el-radio :label="`female`">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="所属学院">
                    <el-select v-model="form.selectedValue" placeholder="请选择活动区域">
                        <el-option label="地理信息与旅游学院" value="地理信息与旅游学院"></el-option>
                        <el-option label="计算机与信息工程学院" value="计算机与信息工程学院"></el-option>
                        <el-option label="机械与电气工程学院" value="机械与电气工程学院"></el-option>
                        <el-option label="材料与化学工程学院" value="材料与化学工程学院"></el-option>
                        <el-option label="生物与食品工程学院" value="生物与食品工程学院"></el-option>
                        <el-option label="土木与建筑工程学院" value="土木与建筑工程学院"></el-option>
                        <el-option label="数学与金融学院" value="数学与金融学院"></el-option>
                        <el-option label="经济与管理学院" value="经济与管理学院"></el-option>
                        <el-option label="文学与传媒学院" value="文学与传媒学院"></el-option>
                        <el-option label="外国语学院" value="外国语学院"></el-option>
                        <el-option label="教育科学学院" value="教育科学学院"></el-option>
                        <el-option label="体育学院" value="体育学院"></el-option>
                        <el-option label="音乐学院" value="音乐学院"></el-option>
                        <el-option label="美术与设计学院" value="美术与设计学院"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="班级职务">
                    <el-checkbox-group v-model="form.position">
                        <el-checkbox label="辅导员" name="type"></el-checkbox>
                        <el-checkbox label="班导师" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="form.tel" style="width:120px;"></el-input>
                </el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <!-- <el-button>取消</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelfInfoRoute',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    teacherNum: '2020123',
                    teacherName: '云心',
                    sex: '男',
                    department: '计算机与信息工程学院',
                    position: '辅导员',
                    tel: '123456789'
                }],
                form: {
                    name: '云心',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    sex: 'male',
                    selectedValue:'计算机与信息工程学院',
                    teachNum:'203001',
                    position:['辅导员'],
                    tel:'18133445530'
                }
            }
        },
        mounted() {

        },

        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
    };
</script>

<style scoped>
    .selfInfo-container {
        padding: 20px;
        box-sizing: border-box;
        height: 60%;
        width: 50%;
        /* background-color: #f0f2f5; */
        /* background-color: pink; */
        border: 1px solid silver;
    }

    .selfInfo-container .title {
        color: #666;
        font-size: 20px;
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
</style>