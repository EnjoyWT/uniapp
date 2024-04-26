
// import { checkUpdateManager } from '@/utils/checkUpdateManager'
// import { USER_INFO } from '@/utils/constants.js'

// // 白名单路由
// const whiteList = [
//   '/pages/login/Page/index', // 登录页
// ]

// const permission = (router) => {

//   router.beforeEach((to, from, next) => {
//     const userInfo = uni.getStorageSync(USER_INFO)
//     // console.log(to)
//     if (!userInfo) {
//       const redirectUrl = to?.fullPath
//       console.log('redirectUrl', redirectUrl)
//       if (!whiteList.includes(to?.path)) {
//         next({
//           path: `/pages/login/Page/index?redirect=${redirectUrl}`
//         })
//       } else {
//         next()
//       }
//     } else {
//       next()
//     }
//     // 检查版本更新
//     checkUpdateManager()
//     // next()
//   })

//   router.afterEach(() => { })
// }

// export default permission
