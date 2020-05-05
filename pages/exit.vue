<template>
  <div class="">退出成功，2秒后退出页面</div>
</template>

<script>
export default {
  layout: 'blank',
  middleware: async (ctx) => {
    let { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      setTimeout(() => {
        // window.location.href = '/'
        this.$router.push('/')
      }, 2000)
    }
  },
  methods: {
  }
}
</script>
