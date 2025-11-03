// Enhanced Changelogs JavaScript
function toggleDetails(element) {
    const details = element.parentElement.nextElementSibling;
    const isVisible = details.style.display !== 'none';
    
    details.style.display = isVisible ? 'none' : 'block';
    element.textContent = isVisible ? 'Ver mais...' : 'Ver menos...';
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const updateItems = document.querySelectorAll('.update-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            updateItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Auto-expire "NEW" badges after 7 days
    const newBadges = document.querySelectorAll('.update-badge.new');
    newBadges.forEach(badge => {
        const updateDate = new Date(badge.closest('.update-item').querySelector('time').getAttribute('datetime'));
        const daysSinceUpdate = (new Date() - updateDate) / (1000 * 60 * 60 * 24);
        
        if (daysSinceUpdate > 7) {
            badge.style.display = 'none';
        }
    });
    
    // Reaction system
    const reactionBtns = document.querySelectorAll('.reaction-btn');
    reactionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const count = parseInt(btn.textContent.split(' ')[1]);
            btn.textContent = `${btn.getAttribute('data-reaction')} ${count + 1}`;
            btn.style.background = 'rgba(255, 79, 0, 0.3)';
        });
    });
    
    // Email automatico ainda para ser feito (Lembrar de fazer isso depois)
    // lembrar de separar o javascript pq esqueci
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado por se inscrever! Você receberá notificações de novas atualizações.');
            newsletterForm.reset();
        });
    }
});

// Animação de rolagens (ir para cima e baixo com o site)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.update-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Event listeners para modais
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar event listeners para elementos com data-modal
    document.querySelectorAll('[data-modal]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = element.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Fechar modal ao clicar no X
    document.querySelector('.close-modal')?.addEventListener('click', closeModal);

    // Fechar modal ao clicar fora
    document.getElementById('modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            closeModal();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Função para adicionar imagens em galeria
function createImageGallery(images) {
    return images.map(img => 
        `<img src="${img.src}" alt="${img.alt}" class="modal-image" onclick="openImageModal('${img.src}')">`
    ).join('');
}

// Função para modal de imagem ampliada
function openImageModal(src) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = 'Visualizar Imagem';
    modalBody.innerHTML = `<img src="${src}" alt="Imagem ampliada" style="width: 100%; height: auto; border-radius: 8px;">`;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}
// Função para abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalTitle = document.getElementById(`${modalId}-title`);
    const modalBody = document.getElementById(`${modalId}-body`);
    const modalFooter = document.getElementById(`${modalId}-footer`);
    if (modal && modalTitle && modalBody) {
        // Exemplo de conteúdo dinâmico
        if (modalId === 'novoModal') {
            modalTitle.textContent = 'Novidades da Atualização';
            modalBody.innerHTML = `
                <p>Aqui estão as novidades da última atualização:</p>
                <ul>
                    <li>Adicionado novo mapa "Cidade Abandonada".</li>
                    <li>Melhorias na performance do servidor.</li>
                    <li>Correção de bugs menores.</li>
                </ul>
            `;
            if (modalFooter) {
                modalFooter.innerHTML = `<button class="close-modal">Fechar</button>`;
            }
        } else if (modalId === 'imagemModal') {
            modalTitle.textContent = 'Imagem da Atualização';
            modalBody.innerHTML = `
                <img src="image/update-image.jpg" alt="Imagem da atualização" style="width: 100%; height: auto; border-radius: 8px;">
            `;
            if (modalFooter) {
                modalFooter.innerHTML = `<button class="close-modal">Fechar</button>`;
            }
        }
    }
}

