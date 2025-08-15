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
const donorForm = document.getElementById('Register');

donorForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const bloodgroup = document.getElementById('bloodgroup').value;
    const division = document.getElementById('division').value;
    const district = document.getElementById('districtname').value.trim();
    const upazila = document.getElementById('upuzillaname').value.trim();
    const availability = document.getElementById('availability').value;

    
    if (!fullname || !email || !phone || !bloodgroup || !division || !district || !upazila || !availability) {
        alert("Please fill in all the fields properly before submitting!");
        return; 
    }
    else
    showSection('AfterRegister');

    donorForm.reset();
});
