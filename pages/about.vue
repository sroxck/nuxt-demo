<script setup>
// definePageMeta({
//   middleware: [
//     'route',
//   ],
//   path: '/aa'
// })

// navigateTo  在客户端和服务端都可以用
// router.push 只能在客户端用
onMounted(() => {
  const route = useRoute()
  ElMessage.error(route.query.code)
})
</script>
<template>
  <div>about</div>
</template>
<style scoped></style>