// Utilidades
const $ = (sel, scope=document) => scope.querySelector(sel)
const $$ = (sel, scope=document) => [...scope.querySelectorAll(sel)]

// Ano atual no rodapé
$('#ano').textContent = new Date().getFullYear()

// Menu móvel
const navToggle = $('#navToggle')
const nav = $('#primaryNav')
navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open')
  navToggle.setAttribute('aria-expanded', String(isOpen))
})

// Modal de Login
const loginModal = $('#loginModal')
const openButtons = ['#openLogin', '#openLoginHero'].map(id => $(id)).filter(Boolean)
const closeButton = $('#closeLogin')

function openModal(){
  loginModal.classList.add('open')
  loginModal.setAttribute('aria-hidden', 'false')
  // Foco no primeiro campo
  setTimeout(() => $('input[name="email"]', loginModal)?.focus(), 50)
}
function closeModal(){
  loginModal.classList.remove('open')
  loginModal.setAttribute('aria-hidden', 'true')
}
openButtons.forEach(btn => btn.addEventListener('click', openModal))
closeButton?.addEventListener('click', closeModal)
loginModal?.addEventListener('click', (e) => {
  if (e.target.matches('[data-close-modal]')) closeModal()
})
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && loginModal?.classList.contains('open')) closeModal()
})

// Mostrar/ocultar senha
const togglePassBtn = $('.toggle-pass')
const passInput = $('input[name="senha"]')

togglePassBtn?.addEventListener('click', () => {
  const isPass = passInput.getAttribute('type') === 'password'
  passInput.setAttribute('type', isPass ? 'text' : 'password')
})

// Validação simples de formulário
const loginForm = $('#loginForm')
loginForm?.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = loginForm.email.value.trim()
  const senha = loginForm.senha.value.trim()

  let ok = true

  // E-mail
  const emailError = $('[data-error-for="email"]', loginForm)
  if (!email){
    emailError.textContent = 'Informe seu e‑mail.'
    ok = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){
    emailError.textContent = 'E‑mail inválido.'
    ok = false
  } else {
    emailError.textContent = ''
  }

  // Senha
  const passError = $('[data-error-for="senha"]', loginForm)
  if (!senha){
    passError.textContent = 'Informe sua senha.'
    ok = false
  } else if (senha.length < 6){
    passError.textContent = 'Mínimo de 6 caracteres.'
    ok = false
  } else {
    passError.textContent = ''
  }

  if (!ok) return

  // Simula sucesso de autenticação
  loginForm.querySelector('button[type="submit"]').disabled = true
  loginForm.querySelector('button[type="submit"]').textContent = 'Entrando…'

  setTimeout(() => {
    alert('Login realizado com sucesso!')
    loginForm.reset()
    loginForm.querySelector('button[type="submit"]').disabled = false
    loginForm.querySelector('button[type="submit"]').textContent = 'Entrar'
    closeModal()
  }, 800)
})
