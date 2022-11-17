
//提交验证
function login() {
    var password = document.getElementById("password");
    var username = document.getElementById("username");
    if (username.value.replace(/\s/g, "") == "") {
        alert("用户名不能为空");
        return;
    }
    if (password.value.replace(/\s/g, "") == "") {
        alert("密码不能为空");
        return;
    }
    alert("登录成功")
}