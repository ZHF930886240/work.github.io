// 轮播图逻辑
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.pic li');
    const dots = document.querySelectorAll('.banner ol li');
    let currentIndex = 0;
    let timer = null;

    // 切换到指定索引
    function show(index) {
        // 移除当前活动状态
        items[currentIndex].classList.remove('show');
        dots[currentIndex].classList.remove('active');

        // 更新索引
        currentIndex = index;

        // 添加新的活动状态
        items[currentIndex].classList.add('show');
        dots[currentIndex].classList.add('active');
    }

    // 自动播放
    function autoPlay() {
        timer = setInterval(() => {
            let nextIndex = (currentIndex + 1) % items.length;
            show(nextIndex);
        }, 2000); // 2秒切换一次
    }

    // 绑定圆点点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            show(index);
        });
    });

    // 绑定左右箭头点击事件
    const prevBtn = document.querySelector('.banner .prev');
    const nextBtn = document.querySelector('.banner .next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let prevIndex = (currentIndex - 1 + items.length) % items.length;
            show(prevIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let nextIndex = (currentIndex + 1) % items.length;
            show(nextIndex);
        });
    }

    // 鼠标悬停暂停/继续
    const banner = document.querySelector('.banner');
    banner.addEventListener('mouseenter', () => {
        clearInterval(timer);
    });

    banner.addEventListener('mouseleave', () => {
        autoPlay();
    });

    // 启动自动播放
    autoPlay();
});
