<script lang="ts" setup>

// nuxt 服务端渲染在  nitro引擎中
// 
const config = useRuntimeConfig()
console.log(config.count)

// 区分当时是服务端还是客户端
if (import.meta.server) {
  console.log('服务端')
} else {
  console.log('客户端')
}
// 路由在根目录创建pages 目录下的页面自动变成路由 index是首页 其他的文件名就是路由地址path
// 需要插入一个NuxtPage组件作为入口

//命名路由

// [aa].vue
// 可选路由 [[test]] 文件夹 ss.vue
// 全局路由 [...404].vue
/**
 * 手动指定路由
 * definePageMeta({
    path:'/ceee'
    })
 */
</script>
<template>
  <div>
    <header style="height:300px">
      <ul style="display:grid">
        <li><NuxtLink to="/aa">关于我们</NuxtLink></li>
        <li><NuxtLink to="/user/sfsf">用户中心</NuxtLink></li>
        <li><NuxtLink to="/">返回首页</NuxtLink></li>
      </ul>
    </header>
    <main style="height:calc(100vh - 500px )">
      <NuxtPage />
    </main>
    <footer style="height:200px">
      <h1>底部</h1>
    </footer>
  </div>
</template>
<style scoped lang="scss">
h1 {
  color: $sr
}
</style>