document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.getElementById('ajax-content');
    const navLinks = document.querySelectorAll('nav ul.nav-links li a');

function loadPage(page) {
    const PAGE_PATH = './'; // ou './pages/' se as páginas estiverem numa pasta
}

    
    // Add a single persistent transitionend event listener to remove 'transition-in' class
    content.addEventListener('transitionend', () => {
        content.classList.remove('transition-in');
    });

    function loadPage(page) {
        content.classList.add('transition-out');

        setTimeout(() => {
            if (page === 'home') {
                content.innerHTML = `
                    <h1>Bem-Vindo a Voices of the Dark Wiki</h1>
                    <p>Esta wiki é dedicada ao jogo Voices of the Dark, um modo de jogo altamente modificado do jogo Garry's Mod. Apresenta combate tático e jogabilidade de extração. Use a navegação para explorar craftings, sobre a empresa, mecânicas de jogo e muito mais.</p>
                `;
                content.classList.remove('transition-out');
                content.classList.add('transition-in');
                return;
            }

            fetch(page + '.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Page not found');
                    }
                    return response.text();
                })
                .then(html => {
                    content.innerHTML = html;

                    initFAQAccordion();

                    content.classList.remove('transition-out');
                    content.classList.add('transition-in');
                })
                .catch(error => {
                    content.innerHTML = '<p>Desculpe, tivemos um erro para carregar a pagina.</p>';
                    content.classList.remove('transition-out');
                    content.classList.add('transition-in');
                });
        }, 500);
    }

    // Attach click listeners to nav links excluding submenu toggles
    navLinks.forEach(link => {
        if (!link.classList.contains('submenu-toggle')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                loadPage(page);
            });
        }
    });

    // submenus porra
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    submenuToggles.forEach(submenuToggle => {
        const submenuParent = submenuToggle.parentElement;
        submenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            submenuParent.classList.toggle('open');
        });
    });

    // Add event listeners for submenu items
    const submenuLinks = document.querySelectorAll('.submenu-items li a');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    function initFAQAccordion() {
        const faqButtons = document.querySelectorAll('.faq-question');
        faqButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.parentElement;
                item.classList.toggle('active');
            });
        });
    }

    // Load home2 page on site load (do not question on what happend with home1 )
    loadPage('home2');

    // Login Modal Functionality
    const loginLink = document.getElementById('login-link');
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    // Open modal
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        loginError.textContent = '';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        loginError.textContent = '';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            loginError.textContent = '';
        }
    });

    // Handle login form submit
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('users.txt');
            const text = await response.text();
            const users = text.split('\n').map(line => line.trim()).filter(line => line);

            let authenticated = false;
            for (const user of users) {
                const [u, p] = user.split(':');
                if (u === username && p === password) {
                    authenticated = true;
                    break;
                }
            }

            if (authenticated) {
                modal.style.display = 'none';
                // Generate random number #0100 to #9999
                const randomNum = Math.floor(Math.random() * (9999 - 100 + 1)) + 100;
                const hashtag = `#${randomNum.toString().padStart(4, '0')}`;
                // Load terminal welcome screen
                content.classList.add('transition-out');
                setTimeout(() => {
                    content.innerHTML = `
                        <div class="terminal-screen">
> Bem-Vindo ${username}-${hashtag}
> Acesso concedido ao sistema.
> Preparando interface...
                        </div>
                    `;
                    content.classList.remove('transition-out');
                    content.classList.add('transition-in');
                    // After 3 seconds, load home2 page
                    setTimeout(() => {
                        loadPage('home2');
                    }, 3000);
                }, 500);
            } else {
                loginError.textContent = 'Login incorreto. Tente novamente.';
            }
        } catch (error) {
            loginError.textContent = 'Erro ao carregar dados de usuário.';
        }
    });
});

