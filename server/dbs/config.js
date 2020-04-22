module.exports = {
  dbs: 'mongodb://127.0.0.1:27017/mt-app',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get port () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '1186619892@qq.com'
    },
    get pass () {
      return 'moucnkgwbhlyhdec'
    },
    get code () {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase()
      }
    },
    get expire () {
      return () => {
        // 有效时间60分钟
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
