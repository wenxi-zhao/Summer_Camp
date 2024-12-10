<template>
  <div class="container">
    <section class="hero-banner" :style="{ backgroundImage: 'url(/Summer_Camp/images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <h1>数据科学与人工智能夏令营</h1>
        <h2>为初高中生打造的AI实战课程</h2>
        <h3>顶尖高校导师亲自指导</h3>
        <div class="features-list">
          <div class="feature">🎯 参与实际项目开发</div>
          <div class="feature">🎯 撰写研究论文</div>
          <div class="feature">🎯 提升升学竞争力</div>
          <div class="feature">🧑‍🏫 线上线下结合教学</div>
        </div>
        <div class="cta-buttons">
          <NuxtLink to="/enrollment/form" class="primary-btn">立即报名</NuxtLink>
          <NuxtLink to="/courses" class="secondary-btn">了解更多</NuxtLink>
        </div>
      </div>
    </section>

    <section class="instructors-section" :style="{ backgroundImage: 'url(/Summer_Camp/images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <h2>导师团队</h2>
        <ul>
          <li>清华大学计算机系教授</li>
          <li>北京大学人工智能研究院研究员</li>
          <li>业界资深工程师</li>
        </ul>
      </div>
    </section>

    <section class="features-section" :style="{ backgroundImage: 'url(/Summer_Camp/images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <h2>课程特色</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔬 理论与实践结合</h3>
            <ul>
              <li>Python编程基础</li>
              <li>机器学习算法</li>
              <li>深度学习原理</li>
              <li>实战项目开发</li>
            </ul>
          </div>
          <div class="feature-card">
            <h3>📊 项目实战驱动</h3>
            <ul>
              <li>真实数据集</li>
              <li>实际应用场景</li>
              <li>团队协作开发</li>
              <li>成果展示汇报</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials-section" :style="{ backgroundImage: 'url(/Summer_Camp/images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <h2>学员反馈</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <p>"夏令营让我对AI有了全新的认识，不仅学到了实用的编程技能，更重要的是培养了解决问题的思维方式。"</p>
            <div class="testimonial-author">-- 张同学，2023届学员</div>
          </div>
          <div class="testimonial-card">
            <p>"导师们都很专业，课程安排也很合理，特别是实战项目的经历对我申请大学很有帮助。"</p>
            <div class="testimonial-author">-- 李同学，2023届学员</div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section" :style="{ backgroundImage: 'url(/Summer_Camp/images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <h2>联系我们</h2>
        <div class="contact-info">
          <p>📧 Email: info@aicamp.edu.cn</p>
          <p>📱 电话: xxxxxx</p>
          <p>📍 地址: xxxxx</p>
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

section {
  margin-bottom: 60px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.content-overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 60px 20px;
  color: white;
}

.hero-banner {
  text-align: center;
}

.hero-banner h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero-banner h2 {
  font-size: 2em;
  margin-bottom: 15px;
  font-weight: 500;
}

.hero-banner h3 {
  font-size: 1.5em;
  margin-bottom: 30px;
  font-weight: 400;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  align-items: center;
}

.feature {
  font-size: 1.2em;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.primary-btn, .secondary-btn {
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1em;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: #00dc82;
  color: white;
}

.secondary-btn {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

h2 {
  text-align: center;
  color: white;
  margin-bottom: 30px;
  font-size: 2em;
}

.instructors-section {
  text-align: center;
}

.instructors-section ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-size: 1.2em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.3);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  color: #333;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #004AAD;
  margin-bottom: 20px;
}

.feature-card ul {
  list-style: none;
  padding: 0;
}

.feature-card li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.feature-card li::before {
  content: "•";
  color: #004AAD;
  position: absolute;
  left: 0;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.3);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;
}

.testimonial-card p {
  font-style: italic;
  margin-bottom: 15px;
  line-height: 1.6;
}

.testimonial-author {
  color: #666;
  text-align: right;
}

.contact-section {
  text-align: center;
}

.contact-info p {
  margin: 10px 0;
  font-size: 1.1em;
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2em;
  }
  
  .hero-banner h2 {
    font-size: 1.5em;
  }
  
  .hero-banner h3 {
    font-size: 1.2em;
  }
  
  .feature-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    text-align: center;
  }
}
</style>