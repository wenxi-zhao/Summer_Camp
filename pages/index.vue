<template>
  <div class="container">
    <section class="hero">
      <h1>数据科学夏令营</h1>
      <p class="subtitle">探索数据科学的无限可能</p>
    </section>

    <section class="features">
      <h2>课程特色</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>实践导向</h3>
          <p>通过真实项目学习，培养实际解决问题的能力</p>
        </div>
        <div class="feature-card">
          <h3>专家指导</h3>
          <p>业内顶尖专家亲自授课，分享前沿知识</p>
        </div>
        <div class="feature-card">
          <h3>个性化学习</h3>
          <p>根据个人水平定制学习路径</p>
        </div>
        <div class="feature-card">
          <h3>团队协作</h3>
          <p>培养团队合作能力，共同完成项目</p>
        </div>
      </div>
    </section>

    <section class="course-intro">
      <h2>课程介绍</h2>
      <div class="course-list">
        <div class="course-item">
          <h3>Python 基础</h3>
          <p>掌握 Python 编程基础，为数据分析打下坚实基础</p>
        </div>
        <div class="course-item">
          <h3>数据分析</h3>
          <p>学习数据清洗、探索性分析、可视化等核心技能</p>
        </div>
        <div class="course-item">
          <h3>机器学习</h3>
          <p>深入学习各类机器学习算法及其应用</p>
        </div>
        <div class="course-item">
          <h3>深度学习</h3>
          <p>探索神经网络和深度学习的前沿应用</p>
        </div>
      </div>
    </section>

    <section class="timeline">
      <h2>学习路线</h2>
      <div class="timeline-items">
        <div class="timeline-item">
          <h3>第一阶段</h3>
          <p>Python 编程基础 + 数据结构与算法</p>
        </div>
        <div class="timeline-item">
          <h3>第二阶段</h3>
          <p>数据分析与可视化</p>
        </div>
        <div class="timeline-item">
          <h3>第三阶段</h3>
          <p>机器学习基础与应用</p>
        </div>
        <div class="timeline-item">
          <h3>第四阶段</h3>
          <p>深度学习与项目实战</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #004AAD 0%, #0066FF 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.5em;
  opacity: 0.9;
}

section {
  margin-bottom: 60px;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #004AAD;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.course-item {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.timeline-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h3 {
  color: #004AAD;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2em;
  }
  
  .subtitle {
    font-size: 1.2em;
  }
  
  .feature-grid,
  .course-list,
  .timeline-items {
    grid-template-columns: 1fr;
  }
}
</style>