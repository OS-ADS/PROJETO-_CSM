// Conteúdo dos modais - pode ser expandido conforme necessário
//    novoModal: {
//    title: "Título do Pop-up",
//    content: "Seu conteúdo HTML aqui..."
//}
const modalContent = {
    update1: {
        title: "🚀 Update BETA 0.75 - MultiThread Revolution",
        content: `
            <h3>🎯 Principais Melhorias</h3>
            <ul>
                <li><strong>MultiThread Support:</strong> Otimização completa do motor Lua para suporte nativo a múltiplas threads</li>
                <li><strong>Performance Boost:</strong> Ganho de 40-60% em FPS em servidores lotados</li>
                <li><strong>Redução de Lag:</strong> Diminuição significativa de micro-stutters</li>
            </ul>

            <h3>🔧 Mudanças Técnicas</h3>
            <ul>
                <li>Refatoração do sistema de entidades</li>
                <li>Novo gerenciador de memória</li>
                <li>Otimização de renderização de partículas</li>
            </ul>

            <h3>📊 Métricas de Performance</h3>
            <div class="performance-stats">
                <div class="stat">
                    <span class="stat-label">FPS Médio:</span>
                    <span class="stat-value">+45%</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Tempo de Carregamento:</span>
                    <span class="stat-value">-30%</span>
                </div>
            </div>

            <div class="media-gallery">
                <img src="image/teste.jpg" alt="Gráfico de Performance" class="modal-image">
                <img src="image/multithread-demo.gif" alt="Demonstração MultiThread" class="modal-image">
            </div>
        `
    },
    event1: {
        title: "🎮 Evento: Invasão Zumbi",
        content: `
            <h3>📅 Período do Evento</h3>
            <p><strong>Início:</strong> 15 de Junho de 2025<br>
            <strong>Término:</strong> 30 de Junho de 2025</p>

            <h3>🧟‍♂️ Mecânicas do Evento</h3>
            <ul>
                <li><strong>Hordas de Zumbis:</strong> Ataques aleatórios a cada 30 minutos</li>
                <li><strong>Bosses Especiais:</strong> Zumbis mutados com habilidades únicas</li>
                <li><strong>Loot Exclusivo:</strong> Armas e itens temáticos do apocalipse</li>
            </ul>

            <h3>🏆 Recompensas</h3>
            <div class="rewards-grid">
                <div class="reward-item">
                    <img src="image/zombie-slayer-skin.png" alt="Skin Exclusiva" class="reward-image">
                    <span>Skin "Zombie Slayer"</span>
                </div>
                <div class="reward-item">
                    <img src="image/apocalypse-weapon.png" alt="Arma Exclusiva" class="reward-image">
                    <span>Shotgun "Apocalypse"</span>
                </div>
            </div>

            <h3>📍 Locais de Spawn</h3>
            <ul>
                <li>🌆 Cidade Abandonada (GM_Fork)</li>
                <li>🏭 Complexo Industrial (RP_Apocalypse)</li>
                <li>🏥 Hospital Em Ruínas (GM_Boreas)</li>
            </ul>
        `
    },
    bug1: {
        title: "🛠️ Hotfix 0.74.1 - Correções Críticas",
        content: `
            <h3>🚨 Bugs Corrigidos</h3>
            <ul>
                <li><strong>Crash ao Craftar:</strong> Corrigido crash ao craftar itens raros com materiais específicos</li>
                <li><strong>Duplicação:</strong> Resolvido exploit de duplicação de itens</li>
                <li><strong>Sync de Inventário:</strong> Melhoria na sincronização entre cliente-servidor</li>
            </ul>

            <h3>🔧 Ajustes de Balanceamento</h3>
            <ul>
                <li>Reduzido dano do AK-47 em 15%</li>
                <li>Aumentado peso de munição .308</li>
                <li>Ajustado spawn rate de itens médicos</li>
            </ul>

            <h3>📊 Impacto nos Servidores</h3>
            <p>Todos os servidores foram reiniciados para aplicar as correções. Tempo de downtime: ~5 minutos.</p>
        `
    },
    balance1: {
        title: "⚖️ Balanceamento de Armas - Julho 2025",
        content: `
            <h3>🔫 Armas Ajustadas</h3>
            <div class="balance-changes">
                <div class="weapon-change">
                    <h4>AK-47</h4>
                    <ul>
                        <li>Dano reduzido de 35 → 30 (-14.3%)</li>
                        <li>Recoil aumentado em 10%</li>
                    </ul>
                </div>
                <div class="weapon-change">
                    <h4>M4A1</h4>
                    <ul>
                        <li>Dano aumentado de 28 → 30 (+7.1%)</li>
                        <li>Taxa de fogo reduzida em 5%</li>
                    </ul>
                </div>
                <div class="weapon-change">
                    <h4>AWP</h4>
                    <ul>
                        <li>Dano mantido (one-shot headshot)</li>
                        <li>Tempo de reload aumentado em 0.5s</li>
                    </ul>
                </div>
            </div>

            <h3>📈 Justificativas</h3>
            <p>Essas mudanças visam equilibrar o meta atual, onde rifles de assalto estavam dominando tanto em curta quanto em longa distância.</p>

            <div class="media-gallery">
                <img src="image/balance-chart.png" alt="Gráfico de Balanceamento" class="modal-image">
            </div>
        `
    }
};

// Função para abrir modal usando Bootstrap Modal API
function openModal(modalId) {
    const modalElement = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    if (modalContent[modalId]) {
        modalTitle.textContent = modalContent[modalId].title;
        modalBody.innerHTML = modalContent[modalId].content;
        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();
    }
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
});

// Função para adicionar imagens em galeria
function createImageGallery(images) {
    return images.map(img => 
        `<img src="${img.src}" alt="${img.alt}" class="modal-image" onclick="openImageModal('${img.src}')">`
    ).join('');
}

// Função para modal de imagem ampliada usando Bootstrap
function openImageModal(src) {
    const modalElement = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = 'Visualizar Imagem';
    modalBody.innerHTML = `<img src="${src}" alt="Imagem ampliada" style="width: 100%; height: auto; border-radius: 8px;">`;
    const bsModal = new bootstrap.Modal(modalElement);
    bsModal.show();
}
