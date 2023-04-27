//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import IndexRoute from '../pages/Index.vue';
import SelfInfoRoute from '../pages/SelfInfo.vue'
import StudentInfo from '../pages/StudentInfo.vue'
import PoorStuInfo from '../pages/PoorStuInfo.vue'
import GrantLoanInfo from '../pages/GrantLoanInfo.vue'
import PoorSelfInfo from '../pages/PoorSelfInfo.vue'
import ClassInfo from '../pages/ClassInfo.vue'
import AlgorithmPredict from '../pages/AlgorithmPredict.vue'
import StudentAleart from '../pages/StudentAleart.vue'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import AdminMain from '../components/AdminMain.vue'
import AleartSelfInfo from '../pages/AleartSelfInfo.vue'
import PoorAffirm from '../pages/PoorAffirm.vue'
import FeatureAnalysis from '../pages/FeatureAnalysis.vue'
import AdminUser from '../pages/AdminUser.vue'
import AdminPoor from '../pages/AdminPoor.vue'
import AdminDataImport from '../pages/AdminDataImport.vue'
import UserPicture from '../pages/UserPicture.vue'
import Picture from '../pages/Picture.vue'
import AdminLog from '../pages/AdminLog.vue'
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
   return VueRouterPush.call(this, to).catch(err => err)
}

//创建并默认暴露一个路由器
export default new VueRouter({
   routes: [
      {
         name: 'toLogin', // 登录
         path: '/toLogin',
         component: Login,
      },
      {
         name: 'toMain', // 辅导员端
         path: '/toMain',
         component: Main,
         children: [
            {
               name: 'toIndex', // 主页
               path: '/indexRoute',
               component: IndexRoute,
            },
            {
               name: 'toSelfInfo',   // 个人信息
               path: '/selfInfoRoute',
               component: SelfInfoRoute,
            },
            {
               name: 'toStudnetInfo',   // 学生信息
               path: '/toStudnetInfo',
               component: StudentInfo,
               children: [{
                  name: 'toClassInfo',   // 班级信息
                  path: '/toClassInfo',
                  component: ClassInfo,
               }
               ]
            },
            {
               name: 'toPoorStuInfo',   // 贫困生信息
               path: '/toPoorStuInfo',
               component: PoorStuInfo,
               children: [
                  {
                     name: 'toGrantLoanInfo',   // 助学金信息
                     path: '/toGrantLoanInfo',
                     component: GrantLoanInfo,
                  },
                  {
                     name: 'toPoorSelfInfo',   // 贫困生个人信息
                     path: '/toPoorSelfInfo',
                     component: PoorSelfInfo,

                  }
               ]
            },
            {
               name: 'toAlgorithmPredict',   // 算法预测
               path: '/toAlgorithmPredict',
               component: AlgorithmPredict,
            },
            {
               name: 'toStudentAleart',   // 学生预警
               path: '/toStudentAleart',
               component: StudentAleart,
            }
            , {
               name: 'toAleartSelfInfo',   // 学生预警
               path: '/toAleartSelfInfo',
               component: AleartSelfInfo,
            },
            {
               name: 'toPoorAffirm',   //  贫困生认定
               path: '/toPoorAffirm',
               component: PoorAffirm,
            },
            {
               name: 'toFeatureAnalysis',   // 特征分析
               path: '/toFeatureAnalysis',
               component: FeatureAnalysis,
            },
            {
               name: 'toUserPicture',   // 特征分析
               path: '/toUserPicture',
               component: UserPicture,
               children: [

               ]
            },
            {
               name: 'toPicture',
               path: '/toPicture',
               component: Picture,
            }
         ]
      },
      // 管理员端
      {
         name: 'toAdminMain', // 登录
         path: '/toAdminMain',
         component: AdminMain,
         children: [
            {
               name: 'toAdminUser', // 主页
               path: '/toAdminUser',
               component: AdminUser,
            },
            {
               name: 'toAdminPoor', // 主页
               path: '/toAdminPoor',
               component: AdminPoor,
            },
            {
               name: 'toAdminDataImport', // 主页
               path: '/toAdminDataImport',
               component: AdminDataImport,
            },
            {
               name: 'toAdminLog', // 主页
               path: '/toAdminLog',
               component: AdminLog,
            }

         ]
         // children: [
         //    {
         //       name: 'toIndex', // 主页
         //       path: '/indexRoute',
         //       component: IndexRoute,
         //    },
         //    {
         //       name: 'toSelfInfo',   // 个人信息
         //       path: '/selfInfoRoute',
         //       component: SelfInfoRoute,
         //    },
         //    {
         //       name: 'toStudnetInfo',   // 个人信息
         //       path: '/toStudnetInfo',
         //       component: StudentInfo,
         //       children: [{
         //          name: 'toClassInfo',   // 个人信息
         //          path: '/toClassInfo',
         //          component: ClassInfo,
         //       }
         //       ]
         //    },
         //    {
         //       name: 'toPoorStuInfo',   // 个人信息
         //       path: '/toPoorStuInfo',
         //       component: PoorStuInfo,
         //       children: [
         //          {
         //             name: 'toGrantLoanInfo',   // 个人信息
         //             path: '/toGrantLoanInfo',
         //             component: GrantLoanInfo,
         //          },
         //          {
         //             name: 'toPoorSelfInfo',   // 个人信息
         //             path: '/toPoorSelfInfo',
         //             component: PoorSelfInfo,

         //          }
         //       ]
         //    },
         //    {
         //       name: 'toAlgorithmPredict',   // 个人信息
         //       path: '/toAlgorithmPredict',
         //       component: AlgorithmPredict,
         //    },
         //    {
         //       name: 'toStudentAleart',   // 个人信息
         //       path: '/toStudentAleart',
         //       component: StudentAleart,
         //    }
         // ]
      }
   ]
});

