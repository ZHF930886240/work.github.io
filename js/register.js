// 注册功能
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const items = document.querySelectorAll('.form-item');

    const usernameInput = items[0].querySelector('input');
    const phoneInput = items[1].querySelector('input');
    const passwordInput = items[2].querySelector('input');
    const confirmInput = items[3].querySelector('input');
    const agreeCheckbox = document.querySelector('.agree input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        const confirm = confirmInput.value.trim();
        const agree = agreeCheckbox.checked;

        // 验证用户名
        if (!username) {
            alert('请输入用户名');
            usernameInput.focus();
            return;
        }
        if (username.length < 3 || username.length > 20) {
            alert('用户名长度应在3-20个字符之间');
            usernameInput.focus();
            return;
        }

        // 验证手机号
        if (!phone) {
            alert('请输入手机号');
            phoneInput.focus();
            return;
        }
        if (!/^1[3-9]\d{9}$/.test(phone)) {
            alert('请输入正确的手机号格式');
            phoneInput.focus();
            return;
        }

        // 验证密码
        if (!password) {
            alert('请输入密码');
            passwordInput.focus();
            return;
        }
        if (password.length < 6) {
            alert('密码长度不能少于6位');
            passwordInput.focus();
            return;
        }

        // 验证确认密码
        if (!confirm) {
            alert('请确认密码');
            confirmInput.focus();
            return;
        }
        if (password !== confirm) {
            alert('两次输入的密码不一致');
            confirmInput.focus();
            return;
        }

        // 验证协议
        if (!agree) {
            alert('请勾选用户服务协议');
            return;
        }

        // 获取已注册用户列表
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // 检查用户名是否已存在
        if (users.some(user => user.username === username)) {
            alert('该用户名已被注册，请换一个用户名');
            usernameInput.focus();
            return;
        }

        // 检查手机号是否已注册
        if (users.some(user => user.phone === phone)) {
            alert('该手机号已被注册');
            phoneInput.focus();
            return;
        }

        // 注册新用户
        const newUser = {
            username: username,
            phone: phone,
            password: password,
            registerTime: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('注册成功！即将跳转到登录页面');
        setTimeout(() => {
            location.href = './login.html';
        }, 500);
    });
});
