<template>
    <div class="container">
      <h1>关于我们</h1>
      <div class="content">
        <p>这是一个使用 Nuxt 3 构建的示例项目</p>
        <NuxtLink to="/" class="btn">
          返回首页
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .content {
    text-align: center;
    margin-top: 40px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #00dc82;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  h1 {
    color: #374151;
  }
  </style>