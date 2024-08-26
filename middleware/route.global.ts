import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const passUrl: string[] = ["/", "/login", "/about", "/index"];
  if (!passUrl.includes(to.path)) {
    let token;

    if (import.meta.client) {
      token = localStorage.getItem("token");
    }
    if (!token) {
      // ElMessage.error("请先登录");
      return navigateTo({
        path: "/about",
        query: {
          code: 401,
        },
      });
    }
  }
});
