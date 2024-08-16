import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("test middleware");
  console.log(to,from,'test')
  if (to.path == "/aa") {
    return navigateTo("/");
  }
});
