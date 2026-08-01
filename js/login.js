document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Login attempt:', { email, password });

  // For now, fake login — just redirect to home
  // Later we'll add real validation / backend check
  alert('Login successful (fake for now)');
  window.location.href = 'index.html';
});