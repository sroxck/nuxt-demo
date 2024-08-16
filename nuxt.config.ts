// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // 初始化样式用
  // css:['~/assets/css/base.scss'],// 引入全局样式
  // 在vite中配置css 可以引入带变量的css 预处理器
  modules:[
    '@element-plus/nuxt'
  ],
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@use "@/assets/css/base.scss" as *;'
        }
      }
    }
  },
  // 运行时全局变量
  runtimeConfig:{
    isServer:true,
    // 只能在服务器期间获取
    count:1,
    // public可以在服务器和客户端都获取
    public:{
      baseURL:'localhost:8080'
    }
  }
})
