import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({ prefix: '/geo' })

router.get('/getPosition', async (ctx) => {
  let { status, data: { province, city } } = await axios.get('http://cp-tools.cn/geo/getPosition')
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

router.get('/menu', async (ctx) => {
  // 操作数据库
  // const result = await Menu.findOne()
  // ctx.body = {
  //   menu: result.menu
  // }
  let {
    status, data: {
      menu
    }
  } = await axios.get('http://cp-tools.cn/geo/menu')

  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: ''
    }
  }
})


router.get('/province', async (ctx) => {
  // let province = await Province.find()
  // ctx.body = {
  //   province: province.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let { status, data: {
    province
  } } = await axios.get('http://cp-tools.cn/geo/province')
  ctx.body = {
    province: status === 200 ? province : {}
  }
})



export default router