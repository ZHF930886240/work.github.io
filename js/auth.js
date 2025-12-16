// 认证工具函数
(function () {
    // 检查登录状态并更新页面
    function checkLoginStatus() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const loginLink = document.querySelector('.shortcut a[href*="login"]');
        const registerLink = document.querySelector('.shortcut a[href*="register"]');

        if (currentUser && loginLink && registerLink) {
            // 用户已登录，修改显示
            loginLink.textContent = '欢迎，' + currentUser.username;
            loginLink.href = '#';
            loginLink.style.color = '#5EB69C';

            registerLink.textContent = '退出登录';
            registerLink.href = '#';
            registerLink.addEventListener('click', function (e) {
                e.preventDefault();
                if (confirm('确定要退出登录吗？')) {
                    localStorage.removeItem('currentUser');
                    alert('已退出登录');
                    location.reload();
                }
            });
        }

        // 拦截订单链接点击
        const orderLink = document.querySelector('.shortcut a[href*="order"]');
        if (orderLink) {
            orderLink.addEventListener('click', function (e) {
                if (!currentUser) {
                    e.preventDefault();
                    alert('请先登录查看您的订单');
                    location.href = './login.html';
                }
            });
        }
    }

    // 页面加载时检查登录状态
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkLoginStatus);
    } else {
        checkLoginStatus();
    }
})();
