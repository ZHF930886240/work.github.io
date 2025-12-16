document.addEventListener('DOMContentLoaded', function () {
    // -------------------------------------------------------------
    // Standalone Login Logic
    // -------------------------------------------------------------
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get inputs
            const usernameInput = form.querySelector('input[type="text"]');
            const passwordInput = form.querySelector('input[type="password"]');
            const agreeInput = form.querySelector('input[type="checkbox"]');

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Validation
            if (!username) {
                alert('请输入用户名/手机号');
                return;
            }
            if (!password) {
                alert('请输入密码');
                return;
            }
            if (!agreeInput.checked) {
                alert('请勾选用户服务协议');
                return;
            }

            // Auth Check
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.username === username || u.phone === username);

            if (!user) {
                alert('用户不存在，请先注册');
                return;
            }
            if (user.password !== password) {
                alert('密码错误');
                return;
            }

            // Success
            const loginInfo = {
                username: user.username,
                phone: user.phone,
                loginTime: new Date().toISOString()
            };
            localStorage.setItem('currentUser', JSON.stringify(loginInfo));

            alert('登录成功！');

            // Redirect to index
            location.href = './index.html';
        });
    }
});
