<template>
  <div>
    <nav class="navbar" :class="{ 'nav-hidden': !showNav }">
      <div class="nav-brand">
        <NuxtLink to="/" class="brand-link">数据科学夏令营</NuxtLink>
      </div>
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link">首页</NuxtLink>
        <div class="dropdown">
          <span class="nav-link">课程体系 <span class="dropdown-arrow">▼</span></span>
          <div class="dropdown-content">
            <NuxtLink to="/" class="dropdown-item">课程概览</NuxtLink>
            <NuxtLink to="/" class="dropdown-item">机器学习课程</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/" class="nav-link">报名选拔</NuxtLink>
        <NuxtLink to="/" class="nav-link">学习资源</NuxtLink>
        <NuxtLink to="/" class="nav-link">活动动态</NuxtLink>
        <NuxtLink to="/" class="nav-link">学习追踪</NuxtLink>
      </div>
      <div class="nav-right">
        <div class="search-container" :class="{ 'active': isSearchActive }">
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              @focus="isSearchActive = true"
              @blur="handleSearchBlur"
              placeholder="搜索..."
              class="search-input"
            >
            <div v-if="isSearchActive && searchResults.length > 0" class="search-results">
              <div class="results-count">{{ searchResults.length }} 匹配的文档</div>
              <div 
                v-for="result in searchResults" 
                :key="result.id"
                class="search-result-item"
                @mousedown="handleResultClick(result)"
              >
                <div class="result-title">{{ result.title }}</div>
                <div class="result-content">{{ result.content }}</div>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/" class="nav-link">中文</NuxtLink>
        <NuxtLink to="/" class="nav-link">English</NuxtLink>
        <a href="https://github.com/your-repo" target="_blank" class="nav-link">
          <img src="/github-mark.svg" alt="GitHub" class="github-icon">
        </a>
      </div>
    </nav>
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const showNav = ref(true)
let lastScrollY = ref(0)
const searchQuery = ref('')
const isSearchActive = ref(false)
const searchResults = ref([])

// 模拟搜索数据
const searchData = [
  {
    id: 1,
    title: 'Data Science in Action Summer Camp',
    content: 'A comprehensive program to introduce programming and machine learning to high school students. Join us in exploring the fascinating world of data science and artificial intelligence!',
    path: '/'
  },
  {
    id: 2,
    title: 'Eligibility Requirements',
    content: 'High school student (rising freshman - senior) Basic algebra knowledge Interest in STEM fields No prior programming experience required Students from diverse backgrounds are encouraged...',
    path: '/enrollment'
  }
]

// 监听搜索输入
watch(searchQuery, (newQuery) => {
  if (!newQuery.trim()) {
    searchResults.value = []
    return
  }
  
  // 模拟搜索逻辑
  searchResults.value = searchData.filter(item => {
    const query = newQuery.toLowerCase()
    return item.title.toLowerCase().includes(query) || 
           item.content.toLowerCase().includes(query)
  })
})

const handleSearchBlur = () => {
  // 延迟关闭搜索框，以允许点击结果
  setTimeout(() => {
    isSearchActive.value = false
  }, 200)
}

const handleResultClick = (result) => {
  // 处理结果点击，这里可以添加导航逻辑
  navigateTo(result.path)
  searchQuery.value = ''
  isSearchActive.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    showNav.value = currentScrollY < lastScrollY.value || currentScrollY < 50
    lastScrollY.value = currentScrollY
  })
})
</script>

<style scoped>
.navbar {
  background-color: #004AAD;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

.nav-hidden {
  transform: translateY(-100%);
}

.main-content {
  margin-top: 4rem;
  min-height: 200vh;
  padding: 2rem;
}

.nav-brand .brand-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #e0e0e0;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.github-icon {
  width: 24px;
  height: 24px;
  filter: invert(1);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-arrow {
  font-size: 0.8em;
  margin-left: 4px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1;
  border-radius: 4px;
  top: 100%;
  left: 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-item {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

body {
  margin: 0;
  padding: 0;
}

.search-container {
  position: relative;
  margin-right: 1rem;
}

.search-box {
  position: relative;
}

.search-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  padding: 8px 12px;
  width: 200px;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  outline: none;
}

.search-results {
  position: absolute;
  top: 100%;
  right: 0;
  width: 400px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
}

.results-count {
  padding: 8px 12px;
  color: #666;
  border-bottom: 1px solid #eee;
  font-size: 0.9em;
}

.search-result-item {
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.search-result-item:hover {
  background: #f5f5f5;
}

.result-title {
  color: #004AAD;
  font-weight: 500;
  margin-bottom: 4px;
}

.result-content {
  color: #666;
  font-size: 0.9em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
