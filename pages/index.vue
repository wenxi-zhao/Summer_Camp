<template>
  <div class="container">
    <section class="hero-banner" :style="{ backgroundImage: 'url(images/computer.jpg)' }">
      <div class="content-overlay" >
        <div class="banner1">
          <h1 id="data-h1">数据科学夏令营</h1>
          <h3>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—— 用编程与实践掌握未来，助力科学梦想起航</h3>
          <div class="cta-buttons">
            <NuxtLink to="/enrollment/form" class="primary-btn">立即报名</NuxtLink>
          </div>
        </div>
        <aside class="banner-intro">
          <div class = "color-block"></div>
          <div class = "font-block">
            <p class="intro-p1">专为初高中生设计的AI与编程实践课程，通过动手制作智能小车，在趣味十足的项目中学习Python编程、机器学习、深度学习等前沿技术，课程由顶尖高校导师亲自指导，带领学生走在科技最前沿。</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="instructors-section" :style="{ backgroundImage: 'url(images/computer.jpg)' }">
      <div class="content-overlay">
        <div class="instructors-text">
          <h3>课程介绍</h3>
          <h4 class="h4-1">理论与实践并重</h4>
          <ul>
            <li class="li-f">Python编程基础与应用</li>
            <li>机器学习与深度学习算法</li>
            <li class="li-e">实战项目驱动，技术应用全面提升</li>
          </ul>
          <h4 class="h4-2">动手实践，寓教于乐</h4>
          <ul>
            <li class="li-f">搭建树莓派驱动的智能小车，探索硬件与编程的结合</li>
            <li>使用真实数据集进行建模与分析，解决实际问题</li>
            <li>团队协作，提升工程开发能力</li>
            <li class="li-e">成果展示与英文小组汇报，提升演讲技能与语言表达能力，培养国际化沟通技巧</li>
          </ul>
        </div>
        <div class="center-img-redcircle"></div>
        <div class="center-line"></div>
        <div class="center-img"></div>
        <div class="right-img">
          <div class="right-img-1"></div>
          <div class="right-img-2"></div>
          <div class="right-img-3"></div>
        </div>
      </div>
    </section>

    <section class="features-section" :style="{ backgroundImage: 'url(images/computer.jpg)' }">
      <div class="content-overlay">
        <div class="professors-list">
          <div class="three-tutor1"></div>
          <ul>
            <li>哈佛大学生物医学信息学教授</li>
            <li>哈佛大学生物统计学助理教授</li>
            <li>多伦多大学统计科学系助理教授</li>
            <li>杜克大学教授</li>
            <li>浙江大学统计学教授</li>
            <li>业界资深工程师</li>
          </ul>
          <div class="three-line"></div>
        </div>
        <div class = "team">
          <h3>导师团队</h3>
          <div class = "color-block"></div>
        </div>
        <div class="three-tutor2"></div>
        <aside class="tutor-intro">
          <div class = "color-block"></div>
          <div class = "font-block">
            <p class="intro-p1">我们的导师团队由多位世界名校的教授及业界资深工程师组成，拥有丰富的教学经验和实践背景，致力于为学生提供优质的教育。</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="testimonials-section" :style="{ backgroundImage: 'url(images/computer.jpg)' }">
      <div class="content-overlay">
        <div class="four-line"></div>
        <div class="four-fish"></div>
        <div class = "student-feedback">
          <h3>学员反馈</h3>
          <div class = "color-block"></div>
        </div>
        <div class="feedback-block">
          <div class="feedback-block-1"><span>"夏令营让我对AI有了全新的认识，不仅学到了实用的编程技能，更重要的是培养了解决问题的思维方式。"</span></div>
          <div class="feedback-block-2"><span>"导师们都很专业，课程安排也很合理，特别是实战项目的经历对我申请大学很有帮助。"</span></div>
          <div class="feedback-block-3"><span>"人都超级好！我真的好喜欢好爱，帅哥老师还有美女姐姐老师人都很好相处，很耐心地回答问题！互动式的教学真的很有效很喜欢！"</span></div>
        </div>
        <div class="feedback-block2">
          <div class="feedback-block2-1"><span>"哈哈哈哈其实我觉得现在这个schedule我还是很满意的，又轻松又充实。第二周有一天好多lecture会有点累，课程贴合了国外大学所以也算好。食物也好吃！团队还是很重要的！其他还是很不错啦！喜欢！！！"</span></div>
          <div class="feedback-block2-2"><span>"充实的~能够获得足够的情绪价值的，能学到真正知识的，不搞任何形式主义的，是一个提升自己的好的机会。老师认真辅导，帮助同学理解问题，这次真的很满意！"</span></div>
          <div class="feedback-block2-3"><span>"非常好，课程形式特别喜欢，认识了好棒的老师，结交了朋友，依依不舍。"</span></div>
          <div class="feedback-block2-4"><span>"老师和助教们都很友善亲切，教学方式让我们很放松，保持很好的学习状态，激发了我们的学习兴趣，有点难，但总体很好。</span></div>
        </div>
      </div>
    </section>

    <section class="contact-section" :style="{ backgroundImage: 'url(images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <div class="info-container">
          <div class="info-text">
            <h3>报名条件：</h3>
            <ul>
              <li> 青岛市范围内新初二、新初三学生；海尔学校在校高一、高二学生以及部分优秀学生。</li>
              <li> 品学兼优，具备优秀数学学科素养、一定的计算机编程基础和良好的英语听说能力。</li>
            </ul>
            <h3>报名方式：</h3>
            <ul>
              <li> 学校推荐：符合上述报名条件的学生可由所在学校进行推荐。</li>
              <li> 个人自荐：未获得学校推荐，但符合上述报名条件的学生，可通过个人提交简历的方式进行报名。</li>
              <li> 简历提交：学校推荐或个人自荐的学生均需要通过线上方式（扫描右侧二维码）提交学生简历，简历提交截止于2024年7月3日12:00。（说明：海尔学校在校学生将单独组织报名。）</li>
            </ul>
          </div>
        </div>
        <div class="qr-code-image">
          <img src="/images/报名.jpg" alt="QR Code for Registration" />
        </div>
      </div>
    </section>

    <!-- <section class="contact-section" :style="{ backgroundImage: 'url(images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <h2>联系我们</h2>
        <div class="contact-info">
          <p>📧 Email: info@aicamp.edu.cn</p>
          <p>📱 电话: xxxxxx</p>
          <p>📍 地址: xxxxx</p>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.three-line {
  position: absolute; 
  background-image: url('images/three-line.png');
  width: 25vw;
  height: 25vw;
  bottom: -30%;
  z-index: -1;
}

.three-tutor1 {
  background-image: url('images/three-tutor1.png');
  width: 45vw;
  height: 54vh;
}

.features-section {
  position: relative;
}

.team {
  position: relative;
  top: -65%;
  right: 8%;
  text-align: right;
}

.features-section .team h3 {
  font-size: 2.4em;
  letter-spacing: 5px;
  position: relative;
  z-index: 1;
  text-shadow: 5px 4px 4px #000000; 
  font-weight: 400;
}

.team .color-block {
  background-color: rgba(107, 52, 147, 0.9);
  width: 13vw;
  height: 2.6vh;
  position: absolute; /* 绝对定位 */
  top: 55%;
  left: 86.8%;
  z-index: 0;
}

.student-feedback {
  position: relative;
  top: 10%;
  left: 13%;
  display: inline-block;
  z-index: 1; 
}

.testimonials-section .student-feedback h3 {
  font-size: 2.4em;
  letter-spacing: 5px;
  position: relative;
  z-index: 1;
  text-shadow: 5px 4px 4px #000000; 
  font-weight: 400;
}

.student-feedback .color-block {
  background-color: rgba(107, 52, 147, 0.9);
  width: 12vw;
  height: 2.6vh;
  position: absolute; /* 绝对定位 */
  top: 54%;
  left: -32%;
  z-index: 0;
}

.three-tutor2{
  background-image: url('images/three-tutor2.png');
  width: 32vw;
  height: 32vh;
  position: absolute;
  right:8vw;
  top: 27%;
}

.tutor-intro {
  color: white; /* 白色文字 */
  padding: 10px; /* 内边距 */
  position: absolute; /* 绝对定位 */
  right: 5vw; /* 靠右对齐 */
  bottom: -1.3vh; /* 从顶部开始50像素的位置，根据需要调整 */
  width: 30vw; /* 宽度，根据需要调整 */
  height: auto; /* 高度自适应内容 */
  margin-bottom: 6vh;
  text-align: left; /* 文字左对齐 */
}

.tutor-intro .color-block {
  background-color: rgba(107, 52, 147, 0.9);
  width: 100%;
  height: 100%;
  transform: skew(-10deg);
  position: absolute; /* 绝对定位 */
  top: 0;
  left: 0;
}

.tutor-intro p {
  margin: 30px; /* 去掉段落的上下外边距 */
  padding: 0px; /* 段落内边距 */
  font-size: 1.7em; /* 字体大小 */
  transform: skew(0deg);
  position: relative; /* 相对定位 */
}

.center-img, 
.right-img-1,
.right-img-2,
.right-img-3,
.center-img-redcircle,
.center-line,
.three-tutor1,
.three-tutor2,
.three-line,
.feedback-block-1,
.feedback-block-2,
.feedback-block-3,
.feedback-block2-1,
.feedback-block2-2,
.feedback-block2-3,
.feedback-block2-4,
.four-line,
.four-fish{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.right-img{
  position: absolute; 
  top: 17vh;
  left: 75vw;
}

.center-img {
  position: absolute; 
  background-image: url('images/img-2.jpg');
  width: 36vw;
  height: 36vw;
  left: 50%;
  transform: translateX(-50%); /* position+left+transform实现块儿元素的水平居中 */
  bottom: -8%;
  border-radius: 50%;
}

.center-img-redcircle {
  position: absolute; 
  background-image: url('images/2-redcircle.png');
  width: 40vw;
  height: 40vw;
  left: 63%;
  transform: translateX(-50%); /* position+left+transform实现块儿元素的水平居中 */
  bottom: -8%;
}

.center-line {
  position: absolute; 
  background-image: url('images/2-line.png');
  width: 15vw;
  height: 15vw;
  left: 74%;
  transform: translateX(-50%); /* position+left+transform实现块儿元素的水平居中 */
  top: 1%;
}

.four-line {
  position: absolute; 
  background-image: url('images/four-line.png');
  width: 25vw;
  height: 14vw;
  left: 9%;
  top: 8%;
}

.four-fish {
  position: absolute; 
  background-image: url('images/four-fish.png');
  width: 28vw;
  height: 10vw;
  left: 70%;
  top: 82%;
}

.right-img-1, .right-img-2, .right-img-3 {
  width: 16.5vw;
  height: 22vh;
}

.right-img-1, .right-img-2{
  margin-bottom: 6vh;
}

.right-img-1, .right-img-3{
  position:relative;
  right:3vw;
}

.right-img-1 {
  background-image: url('images/2-small-img-1.png');
}

.right-img-2 {
  background-image: url('images/2-small-img-2.png');
}

.right-img-3 {
  background-image: url('images/2-small-img-3.png');
}

.feedback-block{
  position: absolute; 
  top: 22vh;
  left: 12vw;
  
}

.feedback-block span {
  position: relative;
  left: 10%;
  width: 85%;
  line-height: 1.7;
  text-shadow: 0px 0px 2px #000000;
  font-size: 1.1em;
  font-weight: 100;
  letter-spacing: 1.2px;
  color: black;
}

.feedback-block-1, .feedback-block-2, .feedback-block-3 {
  width: 28vw;
  height: 13vh;
  background-image: url('images/four-chatbox.png');
  position:relative;
  display: flex;
  align-items: center;
}

.feedback-block-3 span{
  top: 10%;
}

.feedback-block-1, .feedback-block-2{
  margin-bottom: 13vh;
}

.feedback-block2{
  position: absolute; 
  top: 11vh;
  left: 50vw;
  
}

.feedback-block2 span {
  position: relative;
  left: 10%;
  width: 85%;
  line-height: 1.7;
  text-shadow: 0px 0px 2px #000000;
  font-size: 1.1em;
  font-weight: 100;
  letter-spacing: 1.2px;
  color: black;
}

.feedback-block2-1, .feedback-block2-2, .feedback-block2-3, .feedback-block2-4 {
  width: 28vw;
  height: 13vh;
  
  position:relative;
  display: flex;
  align-items: center;
}

.feedback-block2-1, .feedback-block2-2{
  background-image: url('images/four-chatboxlong.png');
  width: 40vw;
  height: 14vh;
}

.feedback-block2-3, .feedback-block2-4{
  background-image: url('images/four-chatbox.png');
  width: 28vw;
  height: 13vh;
}

.feedback-block2-1 span, .feedback-block2-2 span{
  top: 10%;
}

.feedback-block2-4 span{
  top: 10%;
}

.feedback-block2-1, .feedback-block2-2, .feedback-block2-3{
  margin-bottom: 9vh;
}

.instructors-text,
.professors-list{
  position: relative;
  text-align: left;
  left: 10%;
  top: 10%;
  display: inline-block;
  width: 30vw; 
  z-index: 1;
}

.instructors-text h3 {
  font-size: 3em;
  font-weight: 400;
  letter-spacing: 5px;
  text-shadow: 5px 4px 4px #000000; 
}

.instructors-text h4 {
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 3px;
  background-color: rgba(107, 52, 147, 0.9);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.instructors-text .h4-1{
  margin-top: 6vh;
  width: 10vw;
}

.instructors-text .h4-2{
  margin-top: 3vh;
  width: 13vw;
}

.professors-list ul{
  font-size: 1.3em;
  font-weight: 400;
  letter-spacing: 3px;
  margin: 30px 0 0 10px;
  list-style-type: none; /* 去掉默认的圆点 */
  padding: 0; /* 去掉默认的内边距 */
}

.professors-list ul li {
  line-height: 1.7;
  text-shadow: 5px 4px 4px #000000; 
  padding-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
}

.professors-list ul li::before {
    content: '•'; /* 使用自定义字符作为点 */
    font-size: 10px; /* 调整字符大小 */
    position: absolute;
    left: 0;
}

.instructors-text ul {
  font-size: 1.3em;
  font-weight: 100;
  letter-spacing: 3px;
  margin: 15px 0 0 0;
  list-style-type: none; /* 去掉默认的圆点 */
  padding: 0; /* 去掉默认的内边距 */
}

.instructors-text ul li {
  line-height: 1.7;
  text-shadow: 5px 4px 4px #000000; 
  padding-left: 20px;
  position: relative;
}

/* 点变线 */
.instructors-text ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: white;
}

.instructors-text ul .li-f::before {
  height:2vh;
  top: auto;
}

.instructors-text ul .li-e::before {
  height:2vh;
  bottom: auto;
}

.banner-intro {
  color: white; /* 白色文字 */
  padding: 10px; /* 内边距 */
  position: absolute; /* 绝对定位 */
  right: 5vw; /* 靠右对齐 */
  bottom: -7vh; /* 从顶部开始50像素的位置，根据需要调整 */
  width: 30vw; /* 宽度，根据需要调整 */
  height: auto; /* 高度自适应内容 */
  margin-bottom: 6vh;
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
h2, h3, h4, ul, li, p {
  margin: 0;
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

/* 报名信息 */
.content-overlay {
  width: 100%; /* 根据需要调整宽度 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-container {
  display: flex;
  align-items: center;
  width: 100%; /* 限制容器宽度 */
}

.info-text {
  flex: 0 0 40%;
  position: relative; /* 设置相对定位，以便伪元素可以相对于此元素定位 */
  padding: 20px; /* 根据需要调整内边距 */
  background-color: rgba(107, 52, 147, 0.5); /* 设置背景颜色 */
  border-radius: 0 0 100px 0; /* 设置三个角为直角，右下角为圆角20px */
  color: white; /* 设置文字颜色，确保在深色背景上可见 */
  flex: 0 0 45%; /* 限制文字区域为页面宽度的三分之一 */
  padding-right: 50px; /* 根据需要调整与图片的间距 */
  padding-left: 5%;
  text-align: left; /* 文字左对齐 */
  vertical-align: middle; /* 垂直居中 */
}

.qr-code-image img {
  position: absolute; /* 绝对定位，使图片相对于最近的已定位祖先元素定位 */
  right: 15%; /* 图片距离右侧边缘5% */
  top: 50%; /* 图片距离顶部50% */
  transform: translateY(-50%); /* 垂直方向上移动自身高度的50%，实现垂直居中 */
  width: 15%; /* 图片宽度为容器宽度的20% */
  height: auto; /* 高度自动调整，保持宽高比 */
  max-width: 100%; /* 确保图片不会超出容器宽度 */
  flex: 0 0 auto; /* 图片区域不伸缩 */
}

.info-text ul {
  margin-bottom: 20px; /* 为每个无序列表添加下外边距 */
}

.info-text h3 {
  font-size: 1.5em;
}
</style>
