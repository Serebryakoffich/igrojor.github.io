document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    const adminControls = document.getElementById('adminControls');
    const submitCommentBtn = document.getElementById('submitCommentBtn');
    const notLoggedMessage = document.getElementById('notLoggedMessage');
    const commentText = document.getElementById('commentText');
    const commentsList = document.getElementById('commentsList');
  
    // Проверяем, если пользователь - админ
    if(user === 'admin') {
      adminControls.style.display = 'block';
    }
  
    // Если пользователь не авторизован, запрещаем отправку комментариев
    if(!user) {
      submitCommentBtn.disabled = true;
      notLoggedMessage.style.display = 'block';
    }
  
    // Отправка комментария
    submitCommentBtn.addEventListener('click', () => {
      const text = commentText.value.trim();
      if(text === '') {
        alert('Введите текст комментария');
        return;
      }
      // Создаём новый блок комментария
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
  
      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'comment-avatar';
      const avatarImg = document.createElement('img');
      avatarImg.src = '../Image/avatar.png';
      avatarImg.alt = 'Аватар';
      avatarDiv.appendChild(avatarImg);
  
      const textDiv = document.createElement('div');
      textDiv.className = 'comment-text';
      textDiv.innerHTML = `<strong>${user || 'Гость'}</strong>: ${text}`;
  
      commentDiv.appendChild(avatarDiv);
      commentDiv.appendChild(textDiv);
  
      commentsList.appendChild(commentDiv);
      commentText.value = '';
    });
  });
  
  // Функции для админ-кнопок
  function editArticle() {
    alert('Редактирование статьи (только для демонстрации).');
  }
  function publishArticle() {
    alert('Публикация статьи (только для демонстрации).');
  }
  