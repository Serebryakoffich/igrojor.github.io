// При загрузке каждой страницы проверяем, залогинен ли пользователь
document.addEventListener('DOMContentLoaded', () => {
    updateLoginButton();
  });
  
  function login() {
    const loginField = document.getElementById('loginField').value.trim();
    const passwordField = document.getElementById('passwordField').value.trim();
  
    if(!loginField || !passwordField) {
      alert('Введите логин и пароль');
      return;
    }
  
    // Простая логика:
    // Если логин/пароль == "admin", считаем админом
    // Иначе обычный пользователь
    localStorage.setItem('user', loginField);
    alert('Вы вошли как ' + loginField);
    window.location.href = 'index.html';
  }
  
  function registerUser() {
    const loginVal = document.getElementById('regLoginField').value.trim();
    const emailVal = document.getElementById('regEmailField').value.trim();
    const passVal = document.getElementById('regPasswordField').value.trim();
  
    if(!loginVal || !emailVal || !passVal) {
      alert('Заполните все поля');
      return;
    }
  
    // Сохраняем пользователя
    localStorage.setItem('user', loginVal);
    alert('Регистрация успешна!');
    window.location.href = 'index.html';
  }
  
  // Выход из аккаунта
  function logout() {
    localStorage.removeItem('user');
    alert('Вы вышли из аккаунта');
    window.location.href = 'index.html';
  }
  
  // Кнопка «Войти» / «Аккаунт»
  function updateLoginButton() {
    const user = localStorage.getItem('user');
    const loginBtn = document.getElementById('loginBtn');
    if(!loginBtn) return; // На случай, если на странице нет кнопки
  
    if(user) {
      // Пользователь залогинен -> «Аккаунт»
      loginBtn.innerText = '';
      loginBtn.onclick = () => {
        window.location.href = 'Аккаунт.html';
      };
    } else {
      // Пользователь не залогинен -> «Войти»
      loginBtn.innerText = '';
      loginBtn.onclick = () => {
        window.location.href = 'Логин.html';
      };
    }
  }
  
  // Страница аккаунта - заполнение полей
  document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    if(window.location.href.includes('account.html')) {
      if(!user) {
        // Если пользователь не авторизован - перебрасываем на login
        alert('Сначала войдите в систему');
        window.location.href = 'Логин.html';
        return;
      }
      document.getElementById('accLogin').value = user;
    }
  });
  
  function saveAccount() {
    alert('Данные сохранены (демо).');
  }
  
  function uploadAvatar() {
    alert('Загрузка аватара (демо).');
  }
  document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("accPassword");
    let type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    // Меняем значок 👁️ на 🔒, если пароль скрыт
    this.textContent = type === "password" ? "👁️" : "🔒";
});