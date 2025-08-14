function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'flex';
  const navbar = document.getElementById('header');
  if (id === 'Register') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
}
window.onload = () => {
  showSection('hero');

  const registerbtn = document.getElementById('register-btn');
  if (registerbtn) {
    registerbtn.addEventListener('click', function () {
      showSection('Register');
    });
  }
}