document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const name = email.split('@')[0];
  loginUser(name, email);

  window.location.href = 'index.html';
});