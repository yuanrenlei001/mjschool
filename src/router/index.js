import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/index'
import cases from '@/components/index/case'
import Share from '@/components/share/index'
import shareDetail from '@/components/share/detail'
import User from '@/components/user/index'
import myActivity from '@/components/user/myActivity'
import Application from '@/components/user/application'
import code from '@/components/user/code'
import myShare from '@/components/user/myShare'
import information from '@/components/user/information'
import Course from '@/components/course/index'
import newsDetail from '@/components/course/detail'
import CourseList from '@/components/course/list'
import Teacher from '@/components/teacher/index'
import TeachDetail from '@/components/teacher/detail'
import courseDetail from '@/components/teacher/courseDetail'
import Integral from '@/components/integral/index'
import Shareing from '@/components/integral/shareing'
import Learning from '@/components/integral/learning'
import Activity from '@/components/activity/index'
import coursedetails from '@/components/activity/coursedetails'
import newActivity from '@/components/activity/newIndex'
import ActivityDetail from '@/components/activity/detail'
import Evaluation from '@/components/activity/evaluation'
import evaluateList from '@/components/activity/evaluateList'
import coursePl from '@/components/course/coursePl'
import causeList from '@/components/activity/causeList'
import SignUp from '@/components/activity/signUp'
import CodeUp from '@/components/activity/codeUp'
import Add from '@/components/share/add'
import text from '@/components/share/text'
Vue.use(Router)

export default new Router({
  routes: [
      {path: '/', name: 'Index', component: Index, meta: {title: '明净学院'}},
      {path: '/cases', name: 'cases', component: cases, meta: {title: 'cases'}},
      {path: '/share', name: 'Share', component: Share, meta: {title: '牛人分享'}},
      {path: '/shareAdd', name: 'shareAdd', component: Add, meta: {title: '发布分享'}},
      {path: '/user', name: 'User', component: User, meta: {title: '个人中心'}},
      {path: '/code', name: 'code', component: code, meta: {title: '扫码跳转'}},
      {path: '/information', name: 'information', component: information, meta: {title: '个人信息'}},
      {path: '/myActivity', name: 'myActivity', component: myActivity, meta: {title: '我的活动'}},
      {path: '/application', name: 'Application', component: Application, meta: {title: '讲师申请'}},
      {path: '/myShare', name: 'myShare', component: myShare, meta: {title: '我的分享'}},
      {path: '/course', name: 'Course', component: Course, meta: {title: '精品课程'}},
      {path: '/newsDetail', name: 'newsDetail', component: newsDetail, meta: {title: '详情'}},
      {path: '/courseList', name: 'CourseList', component: CourseList, meta: {title: '发现课程'}},
      {path: '/teacher', name: 'Teacher', component: Teacher, meta: {title: '名师专栏'}},
      {path: '/detail', name: 'TeachDetail', component: TeachDetail, meta: {title: '名师详情'}},
      {path: '/courseDetail', name: 'courseDetail', component: courseDetail, meta: {title: '课程详情'}},
      {path: '/integral', name: 'Integral', component: Integral, meta: {title: '积分排行'}},
      {path: '/shareing', name: 'Shareing', component: Shareing, meta: {title: '分享排行榜'}},
      {path: '/learning', name: 'Learning', component: Learning, meta: {title: '学习排行榜'}},
      {path: '/activity', name: 'Activity', component: Activity, meta: {title: '近期课程'}},
      {path: '/coursedetails', name: 'coursedetail', component: coursedetails, meta: {title: '近期活动'}},
      {path: '/newActivity', name: 'newActivity', component: newActivity, meta: {title: '活动列表'}},
      {path: '/activityDetail', name: 'ActivityDetail', component: ActivityDetail, meta: {title: '活动详情'}},
      {path: '/evaluation', name: 'Evaluation', component: Evaluation, meta: {title: '讲师评价'}},
      {path: '/evaluateList', name: 'evaluateList', component: evaluateList, meta: {title: '讲师评价列表'}},
      {path: '/coursePl', name: 'coursePl', component: coursePl, meta: {title: '导师评价'}},
      {path: '/causeList', name: 'causeList', component: causeList, meta: {title: '课程评价'}},
      {path: '/signUp', name: 'SignUp', component: SignUp, meta: {title: '报名详情'}},
      {path: '/codeUp', name: 'CodeUp', component: CodeUp, meta: {title: '签到详情'}},
      {path: '/text', name: 'text', component: text, meta: {title: '测试'}},
      {path: '/shareDetail', name: 'shareDetail', component: shareDetail, meta: {title: '分享详情'}},
  ]
})
