<template>
  <div class="container">
    <section class="hero-banner" :style="{ backgroundImage: 'url(/Summer_Camp/images/computer.jpg)' }">
      <div class="content-overlay" >
        <div class="banner1">
          <h1 id="data-h1">数据科学夏令营</h1>
          <!-- <h1 id="summer-h1">夏令营</h1> -->
          <h3>工业4.0时代下先人一步</h3>
          <div class="cta-buttons">
            <NuxtLink to="/enrollment/form" class="primary-btn">立即报名</NuxtLink>
            <!-- <NuxtLink to="/courses" class="secondary-btn">了解更多</NuxtLink> -->
          </div>
        </div>
        <aside class="banner-intro">
          <div class = "color-block"></div>
          <div class = "font-block">
            <p class="intro-p1">专为初高中生设计的AI与编程实践课程</p>
            <p class="intro-p2">顶尖高校导师亲自指导</p>
            <p class="intro-p3">掌握Python编程，机器学习，深度学习等核心技术</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="instructors-section" :style="{ backgroundImage: 'url(/Summer_Camp/images/img-1.jpg)' }">
      <div class="content-overlay">
        <div class="instructors-text">
          <h3>课程介绍</h3>
          <ul>
            <li>Python编程基础</li>
            <li>机器学习与深度学习</li>
            <li>智能无人小车搭建</li>
          </ul>
        </div>
        <div class="instructors-img">
          <div class="center-img"></div>
          <div class="right-img">
            <div class="right-img-1"></div>
            <div class="right-img-2"></div>
            <div class="right-img-3"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section" :style="{ backgroundImage: 'url(/Summer_Camp/images/img-3.jpg)' }">
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
.instructors-img .center-img, 
.right-img-1,
.right-img-2,
.right-img-3 {
  position: absolute; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.instructors-img .center-img {
  background-image: url('/Summer_Camp/images/img-2.jpg');
  width: 35vw;
  height: 35vw;
  left: 50%;
  transform: translateX(-50%); /* position+left+transform实现块儿元素的水平居中 */
  bottom: -8%;
  border-radius: 50%;
}

.right-img-1, .right-img-2, .right-img-3 {
  width: 16.5vw;
  height: 22vh;
  /* -webkit-mask: radial-gradient(circle at center, white 70%, transparent 100%);
  mask: radial-gradient(circle at center, white 70%, transparent 100%); */
  /* -webkit-mask: linear-gradient(to bottom, white 70%, transparent 100%);
  mask: linear-gradient(to bottom, white 70%, transparent 100%); */
}

.right-img-1 {
  background-image: url('/Summer_Camp/images/img-3.jpg');
  right: 10%;
  top: 10%;
}

.instructors-text{
  position: relative;
  text-align: left;
  left: 10%;
  top: 5%;
}

.instructors-text h3 {
  font-size: 3em;
  font-weight: 400;
  letter-spacing: 5px;
}

.instructors-text ul {
  font-size: 2em;
  font-weight: 100;
  letter-spacing: 3px;
  margin: 75px 0 0 0;
}

.instructors-text ul li {
  line-height: 2.7;
}

.banner-intro {
  color: white; /* 白色文字 */
  padding: 10px; /* 内边距 */
  position: absolute; /* 绝对定位 */
  right: 10vw; /* 靠右对齐 */
  bottom: -7vh; /* 从顶部开始50像素的位置，根据需要调整 */
  width: 30vw; /* 宽度，根据需要调整 */
  height: auto; /* 高度自适应内容 */
  margin-bottom: 3vh;
  text-align: left; /* 文字左对齐 */
}

.banner-intro .color-block {
  background-color: rgba(107, 52, 147, 0.9);
  width: 100%;
  height: 100%;
  transform: skew(-10deg);
  position: absolute; /* 绝对定位 */
  top: 0;
  left: 0;
}

.banner-intro p {
  margin: 30px; /* 去掉段落的上下外边距 */
  padding: 0px; /* 段落内边距 */
  font-size: 1.7em; /* 字体大小 */
  transform: skew(0deg);
  position: relative; /* 相对定位 */
}

.banner-intro .intro-p2 {
  left: -1%; /* 从左侧开始10%的位置 */
}

.banner-intro .intro-p3 {
  left: -3%; /* 从左侧开始10%的位置 */
}

.banner1 {
  position: relative; /* 确保相对定位，这样子元素的绝对定位会相对于此元素定位 */
  left: 10%; 
  top: 5%; 
}

.banner1 #data-h1,
.banner1 #summer-h1 {
  margin-top: 0;
  margin-bottom: 0;
}

.banner1 .cta-buttons {
  position: absolute;
}

.container {
  margin: 0 auto;
}

section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.banner1{
  padding-top: 60px;
  color: white;
  text-align: left;
}

.content-overlay {
  background: rgba(0, 0, 0, 0.6);
  /* padding-top: 60px; */
  color: white;
  height: 100vh;
  width: 100%;
}

.hero-banner {
  text-align: center;
}

.hero-banner h1 {
  font-size: 6.5em;
  letter-spacing: 5px;
}

.hero-banner h2 {
  font-size: 2em;
  margin-bottom: 15px;
  font-weight: 500;
}

.hero-banner h3 {
  font-size: 3em;
  margin-bottom: 60px;
  margin-top: 40px;
  font-weight: 400;
  letter-spacing: 5px;
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
  padding: 5px 70px;
  border-radius: 5px;
  font-size: 1.7em;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: rgba(107, 52, 147, 0.9);
  color: white;
  letter-spacing: 5px;
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

/* 清除各种格子占用空间 */
h2, h3, ul, li, p {
  /* text-align: center;
  color: white;
  margin-bottom: 30px;
  font-size: 2em; */
  margin: 0;
  /* padding: 0; */
}

/* .instructors-section ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-size: 1.2em;
} */

.instructors-section .content-overlay{
  background-color: rgba(107, 52, 147, 0.8);
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