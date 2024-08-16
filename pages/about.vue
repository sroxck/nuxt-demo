<script script>
definePageMeta({
  middleware: [
    'route',
  ],
  path: '/aa'
})
if (import.meta.server) {
  console.log('服务端')
} else {
  console.log('客户端')
}
// navigateTo  在客户端和服务端都可以用
// router.push 只能在客户端用


</script>
<template>
  <div>about</div>
</template>
<style scoped></style>