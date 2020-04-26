import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

let router = new Router({ prefix: '/users' })

let Store = new Redis().client

router.post('/signup', async ctx => {
  const { username, password, email, code } = ctx.request.body
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    console.log(code, saveCode)
    if (code !== saveCode) {
      console.log('验证错误')
      ctx.body = {
        code: -1,
        msg: '验证码错误'
      }
      return false
    }
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }
  let user = await User.find({ username })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return
  }
  let nuser = await User.create({ username, password, email })
  if (nuser) {
    let res = await axios.post('/users/signin', { username, password })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function (err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  let transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  let mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: '团购网注册码',
    html: `您在团购网注册，邀请码是:${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('error:', error)
    } else {
      Store.hmset(
        `nodemail:${ko.user}`,
        'code',
        ko.code,
        'expire',
        ko.expire,
        'email',
        ko.email
      )
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})

router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

router.get('/getUser', async ctx => {
  // if (ctx.isAuthenticated()) {
  //   const {
  //     _id,
  //     username,
  //     email,
  //     birthday,
  //     telephone
  //   } = ctx.session.passport.user
  //   ctx.body = {
  //     _id,
  //     username,
  //     email,
  //     birthday,
  //     telephone
  //   }
  //   console.log('useruseruser', ctx.session)
  // } else {
  //   ctx.body = {
  //     username: '',
  //     email: '',
  //     birthday: '',
  //     telephone: ''
  //   }
  // }
  if (ctx.isAuthenticated()) {
    console.log(ctx.session)
    let _id = ctx.session.passport.user._id
    // console.log('useruseruser', ctx.session.passport.user._id)
    const res = await User.findById({ _id })
    console.log('resresres', res)
    ctx.body = res
  }
})

//修改用户信息
router.post('/setting', async ctx => {
  if (ctx.isAuthenticated()) {
    let _id = ctx.request.body._id
    let obj = {
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      birthday: ctx.request.body.birthday,
      telephone: ctx.request.body.telephone
    }
    // await User.findByIdAndUpdate(_id, obj, (err, res) => {
    //   if (err) return false
    //   ctx.body = {
    //     code: 0,
    //     msg: '修改成功！'
    //   }
    // })
    await User.findByIdAndUpdate(
      { _id },
      { $set: obj },
      { new: true },
      (err, doc, res) => {
        if (err) {
          ctx.body = {
            code: -1,
            // msg: doc
            msg: '修改失败！'
          }
          return false
        }
        ctx.body = {
          code: 0,
          // msg: doc
          msg: '修改成功！'
        }
      }
    )
  }
})

export default router
