// 全局滚动插件
export default () => {
    if (process.client) {
      let ticking = false;
      let velocity = 0; // 滚动速度
      let isScrolling = false; // 是否正在滚动
      const friction = 0.95; // 滚动摩擦力
      const step = 15; // 滚动步长
  
      const smoothScroll = () => {
        if (Math.abs(velocity) > 0.1) {
          window.scrollBy(0, velocity); // 滚动页面
          velocity *= friction; // 模拟减速
          requestAnimationFrame(smoothScroll); // 递归调用
        } else {
          isScrolling = false; // 停止滚动
        }
      };
  
      window.addEventListener(
        "wheel",
        (event) => {
          event.preventDefault();
  
          if (!isScrolling) {
            velocity = 0; // 初始化速度
            isScrolling = true;
            requestAnimationFrame(smoothScroll); // 开始平滑滚动
          }
  
          // 增加速度（根据滚轮方向）
          velocity += event.deltaY > 0 ? step : -step;
        },
        { passive: false }
      );
    }
  };
  