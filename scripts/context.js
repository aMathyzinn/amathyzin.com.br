(function() {
    // Cria elementos do menu
    const menu = document.createElement('div');
    const discordItem = document.createElement('div');
    const youtubeItem = document.createElement('div');
    
    // Estilização do menu
    menu.style.cssText = `
        position: absolute;
        background: rgba(25, 25, 25, 0.95);
        border: 1px solid #ff6b6b;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 0 15px rgba(255, 107, 107, 0.3);
        display: none;
        z-index: 9999;
        min-width: 150px;
        backdrop-filter: blur(10px);
    `;

    // Estilização dos itens
    const itemStyle = `
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        color: white;
        font-family: 'Poppins', sans-serif;
    `;

    discordItem.style.cssText = itemStyle;
    youtubeItem.style.cssText = itemStyle;

    // Ícones usando Font Awesome
    discordItem.innerHTML = `<i class="fab fa-discord" style="color: #5865F2;"></i> Abrir Discord`;
    youtubeItem.innerHTML = `<i class="fab fa-youtube" style="color: #FF0000;"></i> Abrir YouTube`;

    // Efeito hover
    [discordItem, youtubeItem].forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(255, 107, 107, 0.2)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
    });

    // Ações dos itens
    discordItem.onclick = () => window.open('./redirects/discord.html', '_blank');
    youtubeItem.onclick = () => window.open('./redirects/youtube.html', '_blank');

    // Adiciona itens ao menu
    menu.appendChild(discordItem);
    menu.appendChild(youtubeItem);
    document.body.appendChild(menu);

    // Mostrar/ocultar menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        
        // Posiciona o menu
        menu.style.display = 'block';
        
        // Ajusta as coordenadas com base no scroll da página
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        
        const x = e.clientX + scrollX;
        const y = e.clientY + scrollY;
        
        const menuWidth = menu.offsetWidth;
        const menuHeight = menu.offsetHeight;
        
        // Verifica limites da tela
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        menu.style.left = `${x + menuWidth > windowWidth + scrollX ? x - menuWidth : x}px`;
        menu.style.top = `${y + menuHeight > windowHeight + scrollY ? y - menuHeight : y}px`;
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target)) {
            menu.style.display = 'none';
        }
    });

    // Fechar menu com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.style.display = 'none';
        }
    });

    // Adiciona estilo dos ícones se não existir
    if (!document.querySelector('#fa-styles')) {
        const link = document.createElement('link');
        link.id = 'fa-styles';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(link);
    }
})();
