<template>
  <div class="container">
    <section class="contact-section" :style="{ backgroundImage: 'url(images/hour-of-ai.jpg)' }">
      <div class="content-overlay">
        <div class="info-container"> <!-- 用于包含文字和图片的容器 -->
          <div class="info-text"> <!-- 文字内容 -->
            <h3>报名条件：</h3>
            <p>1.1 青岛市范围内新初二、新初三学生；海尔学校在校高一、高二学生以及部分优秀学生。</p>
            <p>1.2 品学兼优，具备优秀数学学科素养、一定的计算机编程基础和良好的英语听说能力。</p>
            <h3>报名方式：</h3>
            <p>2.1 学校推荐：符合上述报名条件的学生可由所在学校进行推荐。</p>
            <p>2.2 个人自荐：未获得学校推荐，但符合上述报名条件的学生，可通过个人提交简历的方式进行报名。</p>
            <p>2.3 简历提交：学校推荐或个人自荐的学生均需要通过线上方式（扫描右侧二维码）提交学生简历，简历提交截止于2024年7月3日12:00。（说明：海尔学校在校学生将单独组织报名。）</p>
          </div>
          <div class="info-image"> <!-- 二维码图片 -->
            <img src="/images/报名.jpg" alt="QR Code for Registration" />
          </div>
        </div>
      </div>
    </section>
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
.three-line {
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
</style>
