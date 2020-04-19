import Router from 'koa-router';
import axios from './utils/axios'
import Category from '../dbs/models/category'

let router = new Router({ prefix: '/category' })

// const sign = 'abcd'

router.get('/crumbs', async (ctx) => {

  // let result = await Category.findOne({ city: ctx.query.city.replace('市', '') || '北京' })
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }

  //线上接口单词拼错了 这里不能改！！获取面包屑只能从线上接口获取，本地数据库都是返回空
  let { status, data: { areas, types } } = await axios.get('http://cp-tools.cn/categroy/crumbs', {
    params: {
      city: ctx.query.city.replace('市', '') || "北京"
    }
  })
  ctx.body = {
    areas: status === 200 ? areas : [],
    types: status === 200 ? types : []
  }
})


export default router
