// export default ({ app }) => {
//   app.router.beforeEach(async (to, from, next) => {
//     if (to.path === '/login') return next()
//     // 获取cookie
//     // const mtcookie = document.cookie
//     // const tokenStr = window.sessionStorage.getItem('token')
//     // if (!tokenStr) return next('/login')
//     // next()
//     console.log('to：', to.path)
//     console.log('from', from.path)
//   })
// }

import axios from 'axios'
import cookies from 'js-cookie'

export default function ({ app, req, res }) {
  // if (req.headers !== undefined) {
  //   let cookieArr = req.headers.cookie //获取cookie然后拆成键值对
  //   const getUserName = getCookie('name', cookieArr)
  //   const getToken = getCookie('tiken', cookieArr) //设置axios的全局变量.
  //   axios.defaults.timeout = 60000 // 响应时间 // @requestParams
  //   axios.defaults.headers.post['Content-Type'] =
  //     'application/x-www-form-urlencoded;charset=UTF-8'
  //   axios.defaults.headers.username = getUserName
  //   axios.defaults.headers.token = getToken
  //   axios.defaults.withCredentials = true
  // }
  // console.log('req', req)
  // console.log('res', res)
  // app.router.beforeEach((to, from, next) => {
  //   // to and from are both route objects. must call `next`.
  //   // console.log(from.path)
  //   // console.log(to.path)
  //   // if (req.ctx.header.cookie) {
  //   //   console.log('有cookies')
  //   // }
  //   console.log('reqctx', req.ctx)
  //   next()
  //   // console.log(req.ctx.header.cookie, '2321321312321312')
  //   // if (to.path == '/login') return next()
  //   // if (req.headers.cookie !== '') return next('/login')
  //   // // next()
  // })
}

//解析浏览器中的cookies

// function getCookie (name, strCookie) {
//   console.log('strCookie',strCookie)
//   var arrCookie = strCookie.split(';')
//   for (var i = 0; i < arrCookie.length; i++) {
//     var arr = arrCookie[i].split('=')
//     if (arr[0].trim() === name) {
//       return arr[1]
//     }
//   }
//   return {}
// }
