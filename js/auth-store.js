const AUTH_KEY = 'store_user';

function loginUser(name, email) {
  const user = { name, email };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  updateAuthNav();
}

function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'index.html';
}

function getUser() {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
}

function updateAuthNav() {
  const authLink = document.getElementById('authLink');
  if (!authLink) return;

  const user = getUser();

  if (user) {
    authLink.textContent = `Logout (${user.name.split(' ')[0]})`;
    authLink.href = '#';
    authLink.onclick = (e) => {
      e.preventDefault();
      logoutUser();
    };
  } else {
    authLink.textContent = 'Login';
    authLink.href = 'login.html';
    authLink.onclick = null;
  }
}

document.addEventListener('DOMContentLoaded', updateAuthNav);