# aMathyzin - Site Oficial

Site oficial do aMathyzin, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações fluidas
- **Three.js + React Three Fiber** - Elementos 3D
- **Swiper** - Carrossel de vídeos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção
npm start
```

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── downloads/         # Página de downloads
│   ├── sobre/             # Página sobre
│   └── not-found.tsx      # Página 404
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   │   ├── Navbar.tsx    # Barra de navegação
│   │   └── Footer.tsx    # Rodapé
│   ├── sections/         # Seções da página
│   │   ├── Hero.tsx      # Hero section
│   │   ├── FamousProjects.tsx
│   │   ├── About.tsx
│   │   ├── ProjectsInnovations.tsx
│   │   ├── RecentVideos.tsx
│   │   ├── YouTubeChannel.tsx
│   │   └── Community.tsx
│   ├── ui/               # Componentes de UI
│   │   ├── ProjectCard.tsx
│   │   └── LoadingScreen.tsx
│   └── effects/          # Efeitos visuais
│       └── ParticleBackground.tsx
```

## 🎨 Features

- ✅ Design moderno e responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Background de partículas interativo com Three.js
- ✅ Carrossel de vídeos do YouTube
- ✅ Sistema de busca e filtros na página de downloads
- ✅ SEO otimizado com metadata dinâmico
- ✅ Performance otimizada com lazy loading
- ✅ Página 404 personalizada com efeito glitch
- ✅ Integração com Discord widget
- ✅ Redirecionamentos para redes sociais

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto (opcional):

```env
# Adicione suas variáveis de ambiente aqui se necessário
```

### Deploy no Vercel

O projeto está configurado para deploy automático no Vercel:

1. Faça push do código para o GitHub
2. Conecte o repositório ao Vercel
3. O deploy será feito automaticamente

## 📱 Páginas

- **/** - Página inicial com todas as seções
- **/downloads** - Catálogo de downloads com filtros
- **/sobre** - Informações sobre o aMathyzin
- **/discord** - Redirecionamento para o Discord
- **/youtube** - Redirecionamento para o YouTube
- **/github** - Redirecionamento para o GitHub

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📄 Licença

© 2025 aMathyzin. Todos os direitos reservados.

## 🤝 Contato

- YouTube: [@aMathyzin](https://www.youtube.com/@aMathyzin)
- Discord: [Comunidade Oficial](https://discord.gg/WYbPYDhQ8y)
- GitHub: [amathyzin](https://github.com/amathyzin)