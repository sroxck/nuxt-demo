import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("test middleware");
  if(to.path == '/aa'){
    return navigateTo('/')
  }

});

