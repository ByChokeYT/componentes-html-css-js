function switchAuthTab(tab) {
  const tabSignin = document.getElementById('tab-signin');
  const tabSignup = document.getElementById('tab-signup');
  const tabIndicator = document.getElementById('tab-indicator');
  
  const formSignin = document.getElementById('form-signin');
  const formSignup = document.getElementById('form-signup');
  
  const heroImg = document.getElementById('hero-img');
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');

  if (tab === 'signin') {
    tabSignin.classList.add('active');
    tabSignup.classList.remove('active');
    tabIndicator.style.transform = 'translateX(0)';

    formSignin.classList.add('active');
    formSignup.classList.remove('active');

    if (heroImg) heroImg.src = 'assets/signin.svg';
    if (heroTitle) heroTitle.textContent = 'Accede a tu Panel de Control';
    if (heroDesc) heroDesc.textContent = 'Gestiona tus proyectos, componentes y aplicaciones web en un solo lugar.';
  } else {
    tabSignup.classList.add('active');
    tabSignin.classList.remove('active');
    tabIndicator.style.transform = 'translateX(100%)';

    formSignup.classList.add('active');
    formSignin.classList.remove('active');

    if (heroImg) heroImg.src = 'assets/signup.svg';
    if (heroTitle) heroTitle.textContent = 'Únete a nuestra Comunidad';
    if (heroDesc) heroDesc.textContent = 'Crea tu cuenta gratuita hoy y accede a decenas de recursos exclusivos.';
  }
}

function togglePasswordVisibility(inputId, button) {
  const input = document.getElementById(inputId);
  const icon = button.querySelector('i');

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'bx bx-show';
  } else {
    input.type = 'password';
    icon.className = 'bx bx-hide';
  }
}
