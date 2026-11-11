/**
 * Shared language selector and Portuguese (Brazil) translations for the site.
 */
(() => {
  const DEFAULT_LANGUAGE = 'pt-BR';
  const LANGUAGE_STORAGE_KEY = 'manga-garden-site-language';
  const TRANSLATABLE_ATTRIBUTES = new Set([
    'alt',
    'aria-description',
    'aria-label',
    'content',
    'data-edge-label',
    'data-node-context',
    'data-node-label',
    'data-node-sublabel',
    'placeholder',
    'title'
  ]);
  const TRANSLATIONS = Object.freeze({
    'Manga Garden: Read Any Manga in Your Language Directly in Browser': 'Manga Garden: leia qualquer mangá no seu idioma, direto no navegador',
    'Manga Garden': 'Manga Garden',
    'Showcase': 'Demonstração',
    'Features & UI': 'Recursos e interface',
    'Architecture': 'Arquitetura',
    'Install': 'Instalação',
    'Technology Stack': 'Tecnologias',
    'Pipeline Map': 'Mapa do fluxo',
    'Privacy': 'Privacidade',
    'Privacy Policy': 'Política de Privacidade',
    'Main navigation': 'Navegação principal',
    'Open navigation menu': 'Abrir menu de navegação',
    'Close navigation menu': 'Fechar menu de navegação',
    'Temporarily unavailable': 'Temporariamente indisponível',
    'Unavailable': 'Indisponível',
    'Chrome Web Store · Temporarily unavailable': 'Chrome Web Store · temporariamente indisponível',
    'Chrome Web Store Listing · Temporarily unavailable': 'Página da Chrome Web Store · temporariamente indisponível',
    'GitHub ⭐': 'GitHub ⭐',
    'Select language': 'Selecionar idioma',
    'Add to Chrome': 'Adicionar ao Chrome',
    'Manga Garden Manga Translator': 'Tradutor de mangá Manga Garden',
    'Read raw manga': 'Leia mangás sem tradução',
    'in your language': 'no seu idioma',
    'May language never be a barrier to discovering a story you love.': 'Que o idioma nunca seja uma barreira para alguém conhecer uma história que ama.',
    'The AI manga translator for your browser. Translate manga, manhwa, and webtoons with zero servers, clean polygon inpainting, and authentic comic lettering.': 'O tradutor de mangás com IA para o seu navegador. Traduza mangás, manhwas e webtoons sem servidores, com restauração precisa do fundo e letreiramento autêntico de quadrinhos.',
    'Available in the': 'Disponível na',
    'Chrome Web Store': 'Chrome Web Store',
    'Free': 'Grátis',
    'Install Options': 'Opções de instalação',
    'Verified Web Store Extension': 'Extensão verificada pela Chrome Web Store',
    '100% Free & Open Source': '100% gratuito e de código aberto',
    'WebGPU On-Device AI': 'IA no dispositivo com WebGPU',
    'Manga Garden Logo': 'Logo do Manga Garden',
    'English': 'Inglês',
    'Tiếng Việt': 'Vietnamita',
    '100% local-first in-browser manga and comic translator. Powered by WebGPU AI inpainting, PaddleOCR, and authentic comic typography with zero servers.': 'Tradutor de mangás e quadrinhos executado localmente no navegador, com restauração por IA via WebGPU, PaddleOCR e letreiramento autêntico, sem servidores.',
    'Story: 佐藤さんは知っていた by @09ra_19ra': 'História: 佐藤さんは知っていた, por @09ra_19ra',
    'Source: Pixiv #145272482 - Erases strictly inside character strokes': 'Origem: Pixiv #145272482 — apaga somente dentro dos traços dos caracteres',
    'Click the kite icon or drag the slider to compare.': 'Clique no ícone ou arraste o controle para comparar.',
    'Intuitive Experience': 'Experiência intuitiva',
    'Designed for Frictionless Reading': 'Feito para uma leitura sem interrupções',
    'From subtle in-page hover triggers to an interactive full-screen studio editor.': 'De ações discretas ao passar o cursor até um editor interativo em tela cheia.',
    '⭐️ In-Page Hover Button': '⭐️ Botão flutuante na página',
    'Instant In-Place Translation Without Clunky Popups': 'Tradução instantânea, sem janelas inconvenientes',
    'Hover over any comic panel on Twitter/X, Pixiv, or manga reader sites. An unobtrusive floating translation button appears seamlessly using modern CSS Anchor Positioning. Click it, and the panel translates right inside the artwork.': 'Passe o cursor sobre qualquer quadro em sites como Twitter/X, Pixiv ou leitores de mangá. Um botão discreto de tradução aparece junto à imagem usando o posicionamento moderno de âncoras do CSS. Clique nele para traduzir o quadro diretamente na arte.',
    '🖱️ Hover Button': '🖱️ Botão ao passar o cursor',
    'Floating badge appears on hovered images with zero page interference.': 'Um botão flutuante aparece sobre a imagem sem interferir na página.',
    '📌 Persistent Pins': '📌 Botões fixos',
    'Keep actionable translate pins on all comic images for quick reading.': 'Mantenha botões de tradução nas imagens para ler rapidamente.',
    '🚀 Auto-Translate': '🚀 Tradução automática',
    'Viewport observer queues and translates chapters as you scroll.': 'A página identifica, enfileira e traduz os quadros conforme você rola.',
    '✂️ Area Crop': '✂️ Recorte de área',
    'Translate protected canvas, WebGL games, or custom screen crops via Ctrl+Shift+X.': 'Traduza áreas protegidas, jogos WebGL ou recortes da tela com Ctrl+Shift+X.',
    '⚡ Reading Hotkeys': '⚡ Atalhos de leitura',
    "Press 'F' to peek at original raw scan, 'M' for full-screen chapter reader mode.": "Pressione 'F' para ver a imagem original ou 'M' para abrir o leitor de capítulos em tela cheia.",
    '🎯 Right-Click Menu': '🎯 Menu do botão direito',
    'Right-click any image on the web and select "Translate Image".': 'Clique com o botão direito em qualquer imagem e escolha “Traduzir imagem”.',
    'Quick Control Popup': 'Painel de controle rápido',
    'Switch target languages, toggle reading modes, or trigger on-demand viewport translations in one click.': 'Troque o idioma de destino, alterne os modos de leitura ou traduza a área visível com um clique.',
    'Chapter Reader & Fast Scan': 'Leitor de capítulos e leitura rápida',
    'Discover lazy-loaded panels across whole chapters, read in Webtoon mode, batch translate, and export 1-click chapter ZIPs.': 'Encontre quadros carregados sob demanda em capítulos inteiros, leia no modo Webtoon, traduza em lote e exporte capítulos em arquivos ZIP com um clique.',
    'Deep Engine Presets': 'Configurações avançadas dos mecanismos',
    'Configure PaddleOCR models (v3-v6), neural inpainting (LaMa / AOT-GAN), WebGPU acceleration, and custom API keys.': 'Configure modelos PaddleOCR (v3–v6), restauração neural do fundo (LaMa / AOT-GAN), aceleração WebGPU e chaves de API próprias.',
    'Interactive Post-Editor': 'Editor interativo',
    'Manga Garden Studio: Full Creative Control': 'Manga Garden Studio: controle criativo total',
    'Inspect clean background plates, edit dialogue directly on canvas, erase defects with AI inpaint brush, and export 1:1 lossless PNGs.': 'Inspecione fundos restaurados, edite diálogos diretamente na tela, remova imperfeições com o pincel de restauração por IA e exporte PNGs sem perdas em escala 1:1.',
    'Double-Click Inline Editing • AI Brush Inpainting • 1:1 PNG Export': 'Edição com clique duplo • restauração com pincel de IA • exportação PNG 1:1',
    'Manga Garden Studio Editor: Live Interactive Workspace': 'Editor Manga Garden Studio: espaço de trabalho interativo',
    'Under the Hood': 'Por dentro da tecnologia',
    'Built with Cutting-Edge Client-Side AI': 'Construído com IA de ponta executada no navegador',
    'Manga Garden eliminates heavy Python dependencies and expensive cloud servers by running optimized neural networks directly in Chromium via WebGPU.': 'O Manga Garden dispensa dependências pesadas de Python e servidores em nuvem caros ao executar redes neurais otimizadas diretamente no Chromium com WebGPU.',
    'WebGPU Hardware Acceleration': 'Aceleração de hardware com WebGPU',
    'Runs ONNX Runtime Web directly on your graphics card with seamless WASM fallback. No local CUDA or Python installation needed.': 'Executa o ONNX Runtime Web na placa de vídeo e usa WASM como alternativa. Não é necessário instalar CUDA ou Python.',
    'Kruskal-MST Spatial Clustering': 'Agrupamento espacial por Kruskal-MST',
    'Reconstructs reading order and merges fragmented text lines into unified dialogue balloons using graph-theoretic minimum spanning trees.': 'Reconstrói a ordem de leitura e une linhas fragmentadas em balões de diálogo usando árvores geradoras mínimas.',
    'Dynamic 64px Patch Inpainting': 'Restauração dinâmica em recortes de 64 px',
    'LaMa Manga and AOT-GAN neural inpainters operate on localized dynamic-bucketed crops at 1:1 scale, avoiding ugly gray blur boxes.': 'Os mecanismos neurais LaMa Manga e AOT-GAN processam recortes locais em escala 1:1, evitando caixas borradas e acinzentadas.',
    'Smart Translation Waterfall': 'Seleção inteligente de mecanismos de tradução',
    'Automatic failover across unlimited on-device WebLLM (Qwen 3.5, Gemma 3, Llama 3.2), unlimited Google Translate, our 100 free/day community cloud pool, or private API keys.': 'Alternância automática entre WebLLM ilimitado no dispositivo (Qwen 3.5, Gemma 3, Llama 3.2), Google Tradutor, cota comunitária na nuvem de 100 traduções gratuitas por dia ou suas próprias chaves de API.',
    '100% Private & Local-First': '100% privado e com prioridade local',
    'Your images never touch our servers. All OCR detections, clean backgrounds, and translations are stored locally in IndexedDB with 7-day TTL pruning.': 'Suas imagens nunca passam pelos nossos servidores. As detecções de OCR, os fundos restaurados e as traduções ficam no IndexedDB local e são removidos após 7 dias.',
    'Licensed under GPLv3. Auditable source code, zero hidden analytics, zero telemetry beacons, and zero monthly subscriptions.': 'Licenciado sob GPLv3. Código-fonte auditável, sem análises ocultas, telemetria ou mensalidades.',
    'Get Started': 'Comece agora',
    'Install Manga Garden in Seconds': 'Instale o Manga Garden em segundos',
    'The tools behind every translated page': 'As tecnologias por trás de cada página traduzida',
    'A browser-native toolkit for reading, recognizing, restoring, and translating manga — with local processing wherever possible.': 'Um conjunto de tecnologias nativas do navegador para ler, reconhecer, restaurar e traduzir mangás — com processamento local sempre que possível.',
    '01 / Platform': '01 / Plataforma',
    'Extension & interface': 'Extensão e interface',
    'A modern TypeScript extension, with its reader and editor running right in your browser.': 'Uma extensão moderna em TypeScript, com leitor e editor executados diretamente no navegador.',
    'Extension and interface technologies': 'Tecnologias da extensão e da interface',
    '02 / Computer vision': '02 / Visão computacional',
    'OCR & image restoration': 'OCR e restauração de imagem',
    'Detects dialogue and restores artwork with browser-based models and image-processing engines.': 'Detecta diálogos e restaura a arte com modelos e mecanismos de processamento de imagem executados no navegador.',
    'OCR and image restoration technologies': 'Tecnologias de OCR e restauração de imagem',
    '03 / Language': '03 / Idiomas',
    'Flexible translation': 'Tradução flexível',
    'Choose on-device models, built-in services, the community pool, or connect your own API keys.': 'Escolha modelos executados no dispositivo, serviços integrados, o pool comunitário ou conecte suas próprias chaves de API.',
    'Translation technologies and providers': 'Tecnologias e provedores de tradução',
    '04 / Data & tooling': '04 / Dados e ferramentas',
    'Local storage & build tools': 'Armazenamento local e ferramentas de build',
    'Keeps editable projects on your device and uses a fast, tested TypeScript build workflow.': 'Mantém projetos editáveis no seu dispositivo e usa um fluxo de build TypeScript rápido e testado.',
    'Storage and development technologies': 'Tecnologias de armazenamento e desenvolvimento',
    'Choose the installation method that fits your needs. 100% free, private, and open source.': 'Escolha o método de instalação ideal para você. 100% gratuito, privado e de código aberto.',
    'Recommended • 1-Click': 'Recomendado • 1 clique',
    'Fastest • Auto-Updating': 'Mais rápido • atualização automática',
    'The official Google Chrome Web Store release. One click to install, verified by Google security review, and stays continuously updated.': 'Versão oficial na Chrome Web Store. Instale com um clique, com análise de segurança do Google e atualizações contínuas.',
    '1-Click Install:': 'Instalação com 1 clique:',
    'No zip extraction or terminal needed': 'Sem extrair arquivos ZIP nem usar o terminal',
    'Automatic Updates:': 'Atualizações automáticas:',
    'Get new models and fixes seamlessly': 'Receba novos modelos e correções sem complicação',
    'Verified MV3:': 'Manifest V3 verificado:',
    'Adheres to strict Chrome extension sandboxing': 'Segue o isolamento rigoroso das extensões do Chrome',
    'Chromium Support:': 'Compatível com Chromium:',
    'Chrome, Brave, Edge, Arc & Opera': 'Chrome, Brave, Edge, Arc e Opera',
    'Add to Chrome (Free) ↗': 'Adicionar ao Chrome (grátis) ↗',
    'Release ZIP': 'Arquivo ZIP da versão',
    'Offline • Unpacked': 'Offline • sem compactação',
    'Pre-compiled distribution package ready for Developer Mode. Great for offline machines or testing specific version snapshots.': 'Pacote compilado pronto para o Modo do desenvolvedor. Ideal para máquinas offline ou para testar versões específicas.',
    'Download the latest release': 'Baixe a versão mais recente',
    'bundle': 'pacote',
    'Extract to a persistent local folder': 'Extraia para uma pasta local permanente',
    'Navigate to': 'Acesse',
    'Toggle': 'Ative',
    'Developer mode': 'Modo do desenvolvedor',
    '& click': 'e clique em',
    'Load unpacked': 'Carregar sem compactação',
    'Download Release .ZIP': 'Baixar arquivo ZIP da versão',
    'Build from Source': 'Compile a partir do código-fonte',
    'Developers • Open Source': 'Desenvolvedores • código aberto',
    'Complete auditable GPLv3 TypeScript source. Inspect algorithms, tune models, and build with Vite & Rolldown.': 'Código-fonte completo em TypeScript, auditável e licenciado sob GPLv3. Inspecione os algoritmos, ajuste os modelos e compile com Vite e Rolldown.',
    'GitHub Repository': 'Repositório no GitHub',
    'Releases': 'Versões',
    'Support & Issues': 'Suporte e problemas',
    '© 2026 Manga Garden: Local-First Manga Translator. Licensed under GNU GPLv3.': '© 2026 Manga Garden: tradutor de mangás com prioridade local. Licenciado sob GNU GPLv3.',
    'Built with ❤️ for manga, comic, and webtoon enthusiasts worldwide.': 'Feito com ❤️ para fãs de mangás, quadrinhos e webtoons do mundo todo.',
    'Original Japanese Manga Scan - Romance comedy panel': 'Página original de mangá japonês — quadro de comédia romântica',
    'Manga Garden English Translation - Balanced lettering and line breaks': 'Tradução para inglês do Manga Garden — letreiramento e quebras de linha equilibrados',
    'Original Japanese Manga Scan - Dialogue-heavy panel': 'Página original de mangá japonês — quadro com muitos diálogos',
    'Manga Garden Vietnamese Translation - Zero gray boxes, clean inpainting': 'Tradução para vietnamita do Manga Garden — sem caixas cinzas, com restauração limpa',
    'Compare raw manga with Manga Garden translation': 'Compare o mangá original com a tradução do Manga Garden',
    'Simulate in-page translation sweep': 'Simular animação de tradução na página',
    'Click to trigger translation sweep': 'Clique para iniciar a animação de tradução',
    'Choose a demo page': 'Escolha uma página de demonstração',
    'Romance comedy manga (Japanese to English)': 'Mangá de comédia romântica (japonês para inglês)',
    'Romance manga thumbnail': 'Miniatura do mangá de romance',
    'Dialogue-heavy manga (Japanese to Vietnamese)': 'Mangá com muitos diálogos (japonês para vietnamita)',
    'Dialogue manga thumbnail': 'Miniatura do mangá com diálogos',
    'Japanese manga (Japanese to Portuguese)': 'Mangá em japonês (japonês para português)',
    'Japanese manga thumbnail': 'Miniatura do mangá em japonês',
    'Portuguese': 'Português',
    'Japanese → Portuguese': 'Japonês → português',
    'Source: Pixiv #144884723': 'Origem: Pixiv #144884723',
    'Original Japanese manga page about autumn and school decisions': 'Página original de mangá em japonês sobre o outono e decisões escolares',
    'Manga Garden translation of a Japanese manga page into Portuguese': 'Tradução do Manga Garden de uma página de mangá em japonês para português',
    'Manga Garden In-Page Hover Translation Button': 'Botão flutuante de tradução do Manga Garden',
    'Manga Garden Quick Control Popup': 'Painel de controle rápido do Manga Garden',
    'Manga Garden Chapter Reader and Fast Scanner': 'Leitor de capítulos e leitura rápida do Manga Garden',
    'Manga Garden Deep Settings Panel': 'Painel de configurações avançadas do Manga Garden',
    'Manga Garden Studio Full-Screen Editor': 'Editor em tela cheia do Manga Garden Studio',
    'Privacy Policy — Manga Garden: Local-First Manga Translator': 'Política de Privacidade — Manga Garden: tradutor de mangás com prioridade local',
    'Privacy Policy for Manga Garden: Local-First Manga Translator Chrome Extension (pcaokchkdgnmfgjkljfpghlfohbdjcmj).': 'Política de Privacidade da extensão Manga Garden: tradutor de mangás com prioridade local (pcaokchkdgnmfgjkljfpghlfohbdjcmj).',
    '← Back to Manga Garden Homepage': '← Voltar à página inicial do Manga Garden',
    'Official Legal Document': 'Documento legal oficial',
    'Application Name:': 'Nome do aplicativo:',
    'Manga Garden: Local-First Manga Translator': 'Manga Garden: tradutor de mangás com prioridade local',
    'Extension ID:': 'ID da extensão:',
    'Chrome Web Store Listing': 'Página na Chrome Web Store',
    'Effective Date:': 'Data de vigência:',
    'September 13, 2026': '13 de setembro de 2026',
    'Developer Contact:': 'Contato do desenvolvedor:',
    '1. Overview & Core Philosophy': '1. Visão geral e filosofia',
    '("we", "our", or "the extension") is an open-source browser extension designed to translate comic and manga images directly inside your web browser. We operate under a strict': ' (“nós”, “nosso” ou “a extensão”) é uma extensão de navegador de código aberto que traduz imagens de quadrinhos e mangás diretamente no navegador. Seguimos uma política rigorosa de',
    'local-first, privacy-by-design': 'prioridade local e privacidade desde a concepção',
    'architecture.': '.',
    'The core of Manga Garden runs client-side using hardware-accelerated WebGPU and WebAssembly. Your images, reading history, and browsing data remain entirely under your control and never leave your local device.': 'O núcleo do Manga Garden é executado no dispositivo, usando WebGPU e WebAssembly acelerados por hardware. Suas imagens, seu histórico de leitura e seus dados de navegação permanecem sob seu controle e nunca saem do dispositivo.',
    '2. What User Data We Handle': '2. Dados do usuário que processamos',
    'A. Comic and Manga Images (100% Local)': 'A. Imagens de quadrinhos e mangás (100% local)',
    "Manga Garden performs Optical Character Recognition (PaddleOCR) and AI background inpainting (LaMa Manga / AOT-GAN)": 'O Manga Garden executa o reconhecimento óptico de caracteres (PaddleOCR) e a restauração do fundo com IA (LaMa Manga / AOT-GAN)',
    "entirely inside your browser's offscreen sandbox via WebGPU/WASM": 'inteiramente no ambiente isolado em segundo plano do navegador, por meio de WebGPU/WASM',
    'No Image Uploads:': 'Nenhum envio de imagens:',
    'Original comic pages, background artwork, and cropped image frames are processed in local memory and stored only in your browser\'s local IndexedDB. They are': 'As páginas originais, a arte de fundo e os recortes são processados na memória local e armazenados somente no IndexedDB do navegador. Eles',
    'never uploaded': 'nunca são enviados',
    'to any remote server or external image repository.': 'a servidores remotos nem a repositórios externos de imagens.',
    'Automatic 7-Day Pruning:': 'Remoção automática após 7 dias:',
    'All locally cached image blobs and workspace states in IndexedDB are automatically deleted after 7 days to preserve device disk space.': 'As imagens armazenadas localmente e os estados do espaço de trabalho no IndexedDB são excluídos automaticamente após 7 dias para economizar espaço no dispositivo.',
    'B. Extracted Text for Translation': 'B. Texto extraído para tradução',
    'When you choose to translate a comic panel, only the extracted text dialogue strings (without image data) are sent to your configured translation provider:': 'Quando você traduz um quadro, somente os diálogos extraídos (sem dados da imagem) são enviados ao provedor de tradução configurado:',
    'Local WebGPU (WebLLM):': 'WebGPU local (WebLLM):',
    '100% on-device. No network requests are made.': 'Processamento 100% local. Nenhuma solicitação de rede é feita.',
    'Google Translate (Default):': 'Google Tradutor (padrão):',
    'Extracted text strings are sent directly to Google Translate endpoints to retrieve translated strings.': 'Os textos extraídos são enviados diretamente aos serviços do Google Tradutor para obter a tradução.',
    'Manga Garden Cloud Shared Pool:': 'Pool compartilhado na nuvem do Manga Garden:',
    'Manga Garden Cloud Shared Pool': 'Pool compartilhado na nuvem do Manga Garden',
    'Text strings are sent over encrypted HTTPS to our Cloudflare Worker backend to route through community AI inference models. No user images or reading history are stored on the server.': 'Os textos são enviados por HTTPS criptografado ao backend Cloudflare Worker, que os encaminha a modelos de IA comunitários. Nenhuma imagem ou histórico de leitura é armazenado no servidor.',
    'Custom APIs (BYOK):': 'APIs próprias (BYOK):',
    'Text is sent directly to your configured provider (OpenAI, Anthropic Claude, Google Gemini) using your private API key.': 'O texto é enviado diretamente ao provedor configurado (OpenAI, Anthropic Claude ou Google Gemini), usando sua chave privada de API.',
    'C. Authentication Information (Optional Google Sign-in)': 'C. Dados de autenticação (login opcional do Google)',
    'Using Manga Garden is completely free and requires no account. If you optionally choose to access the free community': 'O Manga Garden é gratuito e não exige uma conta. Se você optar por acessar o serviço comunitário gratuito',
    ', we use': ', usamos',
    '(Google OAuth 2.0) to authenticate your Google account.': '(Google OAuth 2.0) para autenticar sua conta Google.',
    'We only receive a verified public identifier (': 'Recebemos somente um identificador público verificado (',
    '), email address, and display name solely to enforce daily rate-limiting quotas and prevent service abuse.': '), endereço de e-mail e nome de exibição, exclusivamente para aplicar os limites diários e evitar abusos do serviço.',
    'We': 'Nós',
    'never': 'nunca',
    'access your Google password, contacts, Google Drive files, search history, or any other personal Google account data.': 'acessamos sua senha do Google, seus contatos, arquivos do Google Drive, histórico de pesquisa ou qualquer outro dado pessoal da sua conta.',
    '3. Chrome Extension Permissions & Justifications': '3. Permissões da extensão do Chrome e justificativas',
    'Manga Garden declares only the minimum necessary permissions in': 'O Manga Garden solicita somente as permissões estritamente necessárias em',
    'activeTab': 'activeTab',
    'and': 'e',
    ': Required to discover comic': ': necessárias para encontrar elementos',
    'elements across arbitrary reading sites (such as X/Twitter, Pixiv, and comic hosts) and render translated text directly over the artwork without breaking page structure.': 'em diferentes sites de leitura (como X/Twitter, Pixiv e sites de quadrinhos) e exibir o texto traduzido sobre a arte sem alterar a estrutura da página.',
    'contextMenus': 'contextMenus',
    ': Provides a convenient right-click "Translate Image" option on web images.': ': adiciona a opção “Traduzir imagem” ao menu de contexto das imagens.',
    'offscreen': 'offscreen',
    ': Runs memory-intensive neural network models (WebGPU and WebAssembly) inside an isolated offscreen document, preventing browser service worker timeouts.': ': executa modelos neurais que consomem muita memória em um documento isolado fora da tela, evitando que o service worker do navegador expire.',
    'storage': 'storage',
    ': Stores your language preferences, engine choices, and private API keys locally on your device via': ': armazena suas preferências de idioma, mecanismos escolhidos e chaves privadas de API localmente no dispositivo, por meio de',
    'identity': 'identity',
    ': Used solely for optional Google OAuth authentication to access the community Cloudflare translation pool.': ': usada somente para a autenticação opcional via Google OAuth e o acesso ao pool comunitário de tradução na Cloudflare.',
    '4. Data Sharing, Sale, and Disclosure': '4. Compartilhamento, venda e divulgação de dados',
    'No Sale of Personal Data:': 'Não vendemos dados pessoais:',
    'We do not sell, rent, monetize, or trade any user data, personal information, reading history, or translations to third parties, advertisers, or data brokers.': 'Não vendemos, alugamos, monetizamos nem negociamos dados de usuários, informações pessoais, histórico de leitura ou traduções com terceiros, anunciantes ou corretores de dados.',
    'No Analytics or Tracking:': 'Sem análises ou rastreamento:',
    'Manga Garden contains zero analytics SDKs, tracking pixels, behavioral cookies, or background telemetry beacons.': 'O Manga Garden não contém SDKs de análise, pixels de rastreamento, cookies comportamentais nem telemetria em segundo plano.',
    'Compliance with Google Policies:': 'Conformidade com as políticas do Google:',
    'Manga Garden adheres to the': 'O Manga Garden segue as',
    'Chrome Web Store Developer Program Policies': 'Políticas do Programa para Desenvolvedores da Chrome Web Store',
    ', including the Limited Use and User Data Privacy requirements.': ', incluindo os requisitos de uso limitado e privacidade dos dados do usuário.',
    '5. Security of Your Information': '5. Segurança das suas informações',
    'All communications with external translation APIs and the Cloudflare Shared Pool are conducted over secure HTTPS with TLS 1.3 encryption. User settings and custom API keys reside exclusively in encrypted local browser storage (': 'Todas as comunicações com APIs externas de tradução e com o pool compartilhado da Cloudflare usam HTTPS seguro com criptografia TLS 1.3. As configurações do usuário e as chaves de API próprias ficam exclusivamente no armazenamento local criptografado do navegador (',
    '6. Open Source Verification': '6. Verificação do código aberto',
    'Manga Garden is licensed under the': 'O Manga Garden é licenciado sob a',
    'GNU General Public License v3.0 (GPLv3)': 'Licença Pública Geral GNU versão 3.0 (GPLv3)',
    '. Our complete codebase, including all background scripts, network handlers, and dependencies, is publicly available and auditable on GitHub:': '. Todo o código-fonte, incluindo scripts em segundo plano, manipuladores de rede e dependências, está disponível publicamente para auditoria no GitHub:',
    '7. Contact & Inquiries': '7. Contato e dúvidas',
    'If you have questions, concerns, or requests regarding this Privacy Policy, please contact the developer directly:': 'Se você tiver dúvidas, preocupações ou solicitações sobre esta Política de Privacidade, entre em contato diretamente com o desenvolvedor:',
    'Developer Email:': 'E-mail do desenvolvedor:',
    'GitHub Issue Tracker:': 'Rastreador de problemas no GitHub:',
    '© 2026 Manga Garden: Local-First Manga Translator. All rights reserved.': '© 2026 Manga Garden: tradutor de mangás com prioridade local. Todos os direitos reservados.',
    'Diagram actions': 'Ações do diagrama',
    'Frontend': 'Interface',
    'Backend': 'Backend',
    'Database': 'Banco de dados',
    'Cloud': 'Nuvem',
    'Security': 'Segurança',
    'Message bus': 'Barramento de mensagens',
    'External': 'Externo',
    'Neutral': 'Neutro',
    'Node': 'Nó',
    'Start': 'Início',
    'Active': 'Ativo',
    'Waiting': 'Aguardando',
    'Decision': 'Decisão',
    'Success': 'Sucesso',
    'Failure': 'Falha',
    'Toggle theme (T)': 'Alternar tema (T)',
    'Toggle color theme': 'Alternar tema de cores',
    'Clear semantic lens': 'Limpar lente semântica',
    'Dark': 'Escuro',
    'Light': 'Claro',
    'Choose visual style (S cycles)': 'Escolher estilo visual (S alterna)',
    'Choose visual style': 'Escolher estilo visual',
    'Style': 'Estilo',
    'Visual style': 'Estilo visual',
    'Visual identity': 'Identidade visual',
    'S cycles': 'S alterna',
    'Classic': 'Clássico',
    'Stable technical default': 'Padrão técnico estável',
    'Signal Flow': 'Fluxo de sinais',
    'Motion-forward presentation': 'Apresentação com movimento',
    'Blueprint': 'Projeto técnico',
    'Engineering review': 'Revisão de engenharia',
    'Editorial': 'Editorial',
    'Publication and launch notes': 'Notas de publicação e lançamento',
    'Live': 'Ao vivo',
    'Still': 'Parado',
    'Pause motion': 'Pausar animação',
    'Resume motion': 'Retomar animação',
    'Enter presentation stage': 'Entrar no modo de apresentação',
    'Exit presentation stage': 'Sair do modo de apresentação',
    'Presentation stage (F)': 'Modo de apresentação (F)',
    'Exit presentation stage (F or Escape)': 'Sair do modo de apresentação (F ou Esc)',
    'Present': 'Apresentar',
    'Exit': 'Sair',
    'Export': 'Exportar',
    'Export diagram (E)': 'Exportar diagrama (E)',
    'Export diagram': 'Exportar diagrama',
    'Portable, clean outputs': 'Arquivos portáteis e limpos',
    'Share': 'Compartilhar',
    'Share Card': 'Cartão de compartilhamento',
    'Route Share Card': 'Cartão de rota',
    'Reach Share Card': 'Cartão de alcance',
    'Copy Share Card': 'Copiar cartão de compartilhamento',
    'Copy diagram': 'Copiar diagrama',
    'PNG to clipboard': 'PNG para a área de transferência',
    'Raster images': 'Imagens rasterizadas',
    'Image': 'Imagem',
    'Lossless image': 'Imagem sem perdas',
    'Compact image': 'Imagem compacta',
    'Modern image': 'Imagem moderna',
    'Vector and motion': 'Vetor e animação',
    'Vector & motion': 'Vetor e movimento',
    'Editable vector': 'Vetor editável',
    '6s motion': 'Animação de 6 s',
    'Manga Garden Translation Pipeline — Algorithm Map Diagram': 'Fluxo de tradução do Manga Garden — mapa de algoritmos',
    'Manga Garden Translation Pipeline — Algorithm Map': 'Fluxo de tradução do Manga Garden — diagrama do mapa de algoritmos',
    '14-Gate + Kruskal MST · cut edge > mean+2σ · recurse · Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': '14 filtros + Kruskal MST · corte se aresta > média+2σ · recursivo · Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Bubble Fit & Typeset · Heuristic/YOLO · 4-pass fit · Offscreen Runtime › Fit, Bake & Persist': 'Ajuste de balões e letreiramento · heurística/YOLO · ajuste em 4 etapas · Execução fora da tela › Ajustar, compor e salvar',
    'Dexie IndexedDB · clean Blob + editable lines · Local Storage › Editable Project Data › Fit, Bake & Persist': 'IndexedDB com Dexie · Blob limpo + linhas editáveis · Armazenamento local › Dados editáveis do projeto › Ajustar, compor e salvar',
    'Index-Safe Translation · GTX · WebLLM · Cloud Pool · Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Tradução com índice preservado · GTX · WebLLM · pool na nuvem · Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'PP-OCRv6 + 1D Tiler · h≥2500px tiles · DBNet + CRNN · Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'PP-OCRv6 + divisão 1D · recortes h≥2500px · DBNet + CRNN · Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Polygon-Only Inpaint · median · FMM · dynamic patch · Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Restauração somente de polígonos · mediana · FMM · recorte dinâmico · Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Studio Editor · rerender saved TextBlocks · Local Storage › Editable Project Data › Fit, Bake & Persist': 'Editor Studio · recompõe blocos de texto salvos · Armazenamento local › Dados editáveis do projeto › Ajustar, compor e salvar',
    'Guided diagram views': 'Visões guiadas do diagrama',
    'Next guided view': 'Próxima visão guiada',
    'Next guided view (])': 'Próxima visão guiada (])',
    'Play guided story': 'Iniciar percurso guiado',
    'Play guided story (P)': 'Iniciar percurso guiado (P)',
    'Previous guided view': 'Visão guiada anterior',
    'Previous guided view ([)': 'Visão guiada anterior ([)',
    'Select a Story Beat to copy its exact link': 'Selecione uma etapa para copiar seu link exato',
    'Show entire diagram': 'Mostrar o diagrama inteiro',
    'Story chapters': 'Capítulos do percurso',
    'Story trail': 'Trilha do percurso',
    'Background Worker › Blob Queue › Select & Queue': 'Worker em segundo plano › Fila de blobs › Selecionar e enfileirar',
    'Local Storage › Editable Project Data › Fit, Bake & Persist': 'Armazenamento local › Dados editáveis do projeto › Ajustar, compor e salvar',
    'Offscreen Runtime › Fit, Bake & Persist': 'Execução fora da tela › Ajustar, compor e salvar',
    'Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Webpage Content › Fit, Bake & Persist': 'Conteúdo da página › Ajustar, compor e salvar',
    'Webpage Content › Select & Queue': 'Conteúdo da página › Selecionar e enfileirar',
    'Guided views': 'Visões guiadas',
    'Explore this system': 'Explore este sistema',
    'Step through curated paths without changing the source diagram.': 'Percorra caminhos selecionados sem alterar o diagrama original.',
    'Beat': 'Etapa',
    'Next': 'Próxima',
    'Play story': 'Iniciar percurso',
    'Copy moment': 'Copiar etapa',
    'Show all': 'Mostrar tudo',
    'A workflow diagram generated by Archify.': 'Diagrama do fluxo de trabalho gerado pelo Archify.',
    '01 / Webpage Content': '01 / Conteúdo da página',
    '02 / Background Worker': '02 / Worker em segundo plano',
    '03 / Offscreen Runtime': '03 / Execução fora da tela',
    '04 / Local Storage': '04 / Armazenamento local',
    'Select & Queue': 'Selecionar e enfileirar',
    'Detect, Merge & Compute': 'Detectar, agrupar e processar',
    'Fit, Bake & Persist': 'Ajustar, compor e salvar',
    'Blob Queue': 'Fila de blobs',
    'Promise.all Branches': 'Ramos do Promise.all',
    'Editable Project Data': 'Dados editáveis do projeto',
    'DOM Image Selection · img ≥150×150 · Webpage Content › Select & Queue': 'Seleção de imagem no DOM · img ≥150×150 · Conteúdo da página › Selecionar e enfileirar',
    'DOM Image Selection': 'Seleção de imagem no DOM',
    'img ≥150×150': 'img ≥150×150',
    'DOM Image Swap · baked PNG data URL · Webpage Content › Fit, Bake & Persist': 'Substituição de imagem no DOM · URL de dados PNG composta · Conteúdo da página › Ajustar, compor e salvar',
    'DOM Image Swap': 'Substituição de imagem no DOM',
    'baked PNG data URL': 'URL de dados do PNG composto',
    'Blob Job Queue · Dexie · 1–5 workers · Background Worker › Blob Queue › Select & Queue': 'Fila de tarefas Blob · Dexie · 1–5 workers · Worker em segundo plano › Fila de blobs › Selecionar e enfileirar',
    'Blob Job Queue': 'Fila de tarefas Blob',
    'Dexie · 1–5 workers': 'Dexie · 1–5 workers',
    '14-Gate + Kruskal MST': '14 filtros + Kruskal MST',
    'cut edge > mean+2σ · recurse': 'corte se aresta > média+2σ · recursivo',
    'PP-OCRv6 + 1D Tiler': 'PP-OCRv6 + divisão 1D',
    'h≥2500px tiles · DBNet + CRNN': 'recortes h≥2500px · DBNet + CRNN',
    'Polygon-Only Inpaint': 'Restauração somente de polígonos',
    'median · FMM · dynamic patch': 'mediana · FMM · recorte dinâmico',
    'Index-Safe Translation': 'Tradução com índice preservado',
    'GTX · WebLLM · Cloud Pool': 'GTX · WebLLM · pool na nuvem',
    'Bubble Fit & Typeset': 'Ajuste de balões e letreiramento',
    'Heuristic/YOLO · 4-pass fit': 'Heurística/YOLO · ajuste em 4 etapas',
    'Dexie IndexedDB': 'IndexedDB com Dexie',
    'clean Blob + editable lines': 'Blob limpo + linhas editáveis',
    'Studio Editor': 'Editor Studio',
    'rerender saved TextBlocks': 'recompõe blocos de texto salvos',
    'load editable project': 'carregar projeto editável',
    'surviving text-ink polygons': 'polígonos de tinta textual restantes',
    'merged reading-order blocks': 'blocos agrupados na ordem de leitura',
    'clean plate after erase': 'fundo limpo após a remoção',
    'DBNet quads + CRNN text': 'quadriláteros do DBNet + texto do CRNN',
    'PROCESS_JOB · jobId only': 'PROCESS_JOB · somente jobId',
    'translated texts by index': 'textos traduzidos por índice',
    'TRANSLATE_IMAGE · image URL': 'TRANSLATE_IMAGE · URL da imagem',
    'clean plate + fitted TextBlocks': 'fundo limpo + blocos de texto ajustados',
    'Legend': 'Legenda',
    'User UI': 'Interface do usuário',
    'Agent logic': 'Lógica do agente',
    'Policy': 'Política',
    'Context / trace': 'Contexto / rastreamento',
    'Cloud service': 'Serviço na nuvem',
    'Ready': 'Pronto',
    'Chapter 01 / 01': 'Capítulo 01 / 01',
    'Guided chapter': 'Capítulo guiado',
    'Diagram guide': 'Guia do diagrama',
    'Inspecting compiled semantics': 'Inspecionando a semântica compilada',
    'Find any node': 'Encontrar qualquer nó',
    'Search labels, responsibilities, kinds, and stable IDs.': 'Pesquise rótulos, responsabilidades, tipos e IDs estáveis.',
    'Trace a route': 'Rastrear um caminho',
    'Ask how two semantic nodes connect in authored direction.': 'Veja como dois nós semânticos se conectam na direção definida.',
    'See the whole system': 'Ver o sistema inteiro',
    'Open Semantic Radar with a live viewport and stable nodes.': 'Abra o Radar Semântico com a área visível e os nós estáveis.',
    'Compare semantic kinds': 'Comparar tipos semânticos',
    'Count roles, reveal their traffic, and compare direct authored links.': 'Conte as funções, veja suas conexões e compare os links diretos definidos.',
    'Play the guided story': 'Iniciar o percurso guiado',
    'Walk the authored chapters and real relationships.': 'Percorra os capítulos definidos e as relações reais.',
    'Enter Presentation Stage': 'Acessar o modo de apresentação',
    'Give the live diagram the viewport without changing export.': 'Exiba o diagrama em tela cheia sem alterar a exportação.',
    'Theme': 'Tema',
    'Reset': 'Redefinir',
    'Zoom in': 'Aumentar zoom',
    'Zoom out': 'Diminuir zoom',
    'Close': 'Fechar',
    'No matching nodes': 'Nenhum nó correspondente',
    'Semantic passport': 'Ficha semântica',
    'Verified source': 'Fonte verificada',
    'Authored reach': 'Alcance definido',
    'Upstream': 'Anterior',
    'Downstream': 'Posterior',
    'Copy link': 'Copiar link',
    'Relations': 'Relações',
    'Route probe': 'Rastreamento de caminho',
    'Choose a start node': 'Escolha um nó inicial',
    'Find start': 'Encontrar início',
    'Clear': 'Limpar',
    'Pick two semantic nodes on the diagram': 'Selecione dois nós semânticos no diagrama',
    'Journey': 'Percurso',
    'Overview': 'Visão geral',
    'Choose the source, then the destination. Direction matters.': 'Escolha a origem e depois o destino. A direção importa.',
    'Semantic lens': 'Lente semântica',
    'Compare system roles': 'Comparar funções do sistema',
    'Choose a kind to inspect its nodes and touching relationships.': 'Escolha um tipo para inspecionar seus nós e as relações conectadas.',
    'Choose up to two semantic kinds. One reveals its real traffic; two compare only direct authored relationships.': 'Escolha até dois tipos semânticos. Um revela suas conexões; dois comparam somente as relações diretas definidas.',
    'Semantic kinds': 'Tipos semânticos',
    'Semantic radar': 'Radar semântico',
    'Building overview': 'Montando visão geral',
    'Open radar': 'Abrir radar',
    'Click node': 'Clique em um nó',
    'Drag to pan': 'Arraste para mover',
    'Semantic radar needs more MAP space.': 'O radar semântico precisa de mais espaço no mapa.',
    'PATH': 'CAMINHO',
    'MAP': 'MAPA',
    'LENS': 'LENTE',
    'READ': 'LER',
    'OCR Detection, 1D Tiling & 14-Layer Noise Battery': 'Detecção OCR, divisão 1D e 14 filtros de ruído',
    'Line Grouping — Cotrans Graph + Kruskal MST': 'Agrupamento de linhas — grafo e Kruskal MST',
    'Bubble Expansion & Typesetting Layout': 'Expansão de balões e composição do texto',
    'Parallel Compute + Output Contract': 'Processamento paralelo e contrato de saída',
    '• 1D Webtoon Tiler: images with h ≥2500 px are sliced into 1000 px vertical tiles with 300 px overlap, merging boundary polygons via IoU dedup.': '• Divisão 1D para Webtoon: imagens com h ≥2500 px são cortadas em faixas verticais de 1000 px, com sobreposição de 300 px; polígonos nas bordas são agrupados por deduplicação IoU.',
    '• DBNet: max side 960 → probability ≥0.3 → 4-connected blobs ≥15 px → convex hull + minimum-area rectangle → score ≥0.5 → unclip 1.5.': '• DBNet: lado máximo 960 → probabilidade ≥0,3 → regiões conectadas em 4 direções ≥15 px → envoltória convexa + retângulo de área mínima → pontuação ≥0,5 → expansão 1,5.',
    '• Crop recognition: projective homography + bicubic sampling; rotate vertical crops 90° when height/width ≥1.5.': '• Reconhecimento de recortes: homografia projetiva + amostragem bicúbica; recortes verticais giram 90° quando altura/largura ≥1,5.',
    '• 1–5 Geometry: stray cleanup; giant ≥60% width and ≥120 px; tilt 12°/10°; margin ≤5 px; thin-sliver overlap rejection.': '• Geometria 1–5: remoção de ruídos; região gigante ≥60% da largura e ≥120 px; inclinação 12°/10°; margem ≤5 px; rejeição de sobreposição em faixas estreitas.',
    '• 6–14 Text & Language: punctuation recovery; valuable text; short ASCII gate; watermark suffix rescale; furigana <0.45×; pure-Latin prune; weak-neighbor suppression.': '• Texto e idioma 6–14: recuperação de pontuação; avaliação de texto útil; filtro de ASCII curto; redimensionamento de sufixo de marca d’água; furigana <0,45×; remoção de texto só em latim; supressão de vizinhos fracos.',
    '• Direction graph: gap 2, char gap 0.6, alignment 1.5, font ratio 1.5, aspect tolerance 1; connected-component majority assigns horizontal/vertical.': '• Grafo de direção: intervalo 2, distância entre caracteres 0,6, alinhamento 1,5, proporção de fonte 1,5, tolerância de proporção 1; a maioria dos componentes conectados define a orientação horizontal ou vertical.',
    '• Merge graph: aspect tolerance 1.3, font ratio 2, char gaps 1/3; rotated candidates require angle ≤15° and relative font delta ≤0.25.': '• Grafo de agrupamento: tolerância de proporção 1,3, proporção de fonte 2, intervalos entre caracteres 1/3; candidatos girados exigem ângulo ≤15° e variação relativa de fonte ≤0,25.',
    '• For 3+ lines, build complete weighted graph → Kruskal MST → keep if max edge ≤ mean + 2σ or ≤1.5× font; else cut largest edge and recurse.': '• Para 3 ou mais linhas, cria um grafo completo ponderado → Kruskal MST → mantém se a maior aresta ≤ média + 2σ ou ≤1,5× a fonte; caso contrário, corta a maior aresta e repete.',
    '• Assemble blocks top-to-bottom or right-to-left; CJK joins without spaces; minimum line font wins; angle <3° snaps to zero; fit minimum-area rectangle.': '• Monta blocos de cima para baixo ou da direita para a esquerda; textos CJK são unidos sem espaços; prevalece a menor fonte; ângulos <3° são zerados; ajusta ao retângulo de área mínima.',
    '• Bubble expansion: Tier 1 Heuristic (adaptive luminance, erosion R=14, 12% safe core) + Tier 2 Neural YOLO (detector-v4-s_int8 WebGPU, class 0 only).': '• Expansão de balões: nível 1 heurístico (luminância adaptativa, erosão R=14, núcleo seguro de 12%) + nível 2 YOLO neural (detector-v4-s_int8 WebGPU, somente classe 0).',
    '• BubbleLayoutService: single-bubble expansion with font fit gate; clean single-axis X/Y partition for connected lobes (gap ≥6px); diagonal/complex lobes fall back to Disabled.': '• BubbleLayoutService: expansão de um balão com verificação de ajuste da fonte; separação limpa em um único eixo X/Y para lóbulos conectados (intervalo ≥6 px); lóbulos diagonais ou complexos usam o modo desativado.',
    '• Font fitter: 5% inset, line height 1.2, search 6 px…max; Pass 1 clean binary fit; Pass 2 tall-box geometric cap when H/W ≥2.0.': '• Ajuste de fonte: margem interna de 5%, altura de linha 1,2, busca de 6 px ao máximo; etapa 1: ajuste binário limpo; etapa 2: limite geométrico para caixas altas quando A/L ≥2,0.',
    '• Pass 3 scans down with six-stage hyphenation for words ≥7 chars when H/W ≥1.5; Pass 4 runs fallback binary search to the 6 px floor.': '• Etapa 3: reduz o texto com hifenização em seis etapas para palavras ≥7 caracteres quando A/L ≥1,5; etapa 4: busca binária alternativa até o mínimo de 6 px.',
    '• Balanced wrap: greedy line count N → binary-search minimum width preserving ≤N lines; locked axis-aligned typesetBox (0°) bypasses decollision shifts.': '• Quebra equilibrada: contagem gulosa de N linhas → busca binária da largura mínima que mantém ≤N linhas; uma typesetBox alinhada e travada (0°) ignora ajustes anticolisão.',
    '• Translation: Google GTX chunks ≤1800 chars with ⟦index⟧ delimiters; LLM batches 15 tagged segments and writes results back by tag index.': '• Tradução: o Google GTX divide em blocos de até 1800 caracteres delimitados por ⟦índice⟧; o LLM processa lotes de 15 segmentos identificados e devolve os resultados pelo índice.',
    '• Inpaint: raw surviving line polygons only; Simple uses luminance ≥180 RGB median, Telea-like FMM radius 3, neural tiers (LaMa/AOT-GAN) use 64px dynamic patch bucketing with UNCLIP 1.8 stroke expansion.': '• Restauração: somente os polígonos restantes das linhas de texto; o modo simples usa luminância ≥180 e mediana RGB, FMM semelhante ao Telea com raio 3, e os modelos neurais (LaMa/AOT-GAN) usam recortes dinâmicos de 64 px e expansão de traço UNCLIP 1,8.',
    '• Promise.all waits for translated text and clean plate; raw DBNet mask forwarding remains rejected to avoid erasing non-text bubble art.': '• Promise.all aguarda o texto traduzido e o fundo limpo; a máscara DBNet original não é encaminhada, para evitar apagar elementos não textuais dos balões.',
    '• Persist clean image plus editable fitted lines in Dexie; return a separate baked PNG data URL for immediate DOM replacement.': '• Salva a imagem limpa e as linhas ajustadas e editáveis no Dexie; retorna uma URL de dados PNG composta separadamente para substituir a imagem no DOM.',
    'Find a node': 'Encontrar um nó',
    'Search labels or IDs': 'Pesquisar rótulos ou IDs',
    'Search diagram nodes': 'Pesquisar nós do diagrama',
    'Diagram nodes': 'Nós do diagrama',
    'Node metadata': 'Metadados do nó',
    'Verified source evidence': 'Evidências da fonte verificada',
    'Trace authored reachability': 'Rastrear alcance definido',
    'Trace upstream authored reachability': 'Rastrear alcance anterior definido',
    'Trace downstream authored reachability': 'Rastrear alcance posterior definido',
    'Close semantic passport': 'Fechar ficha semântica',
    'Copy link to focused node': 'Copiar link do nó em foco',
    'Show connected relationships': 'Mostrar relações conectadas',
    'Connected relationships': 'Relações conectadas',
    'Find a route start': 'Encontrar início do caminho',
    'Copy link to traced route': 'Copiar link do caminho rastreado',
    'Clear route probe': 'Limpar rastreamento de caminho',
    'Traced route': 'Caminho rastreado',
    'Route journey controls': 'Controles do percurso',
    'Previous route position': 'Posição anterior do caminho',
    'Play route journey': 'Iniciar percurso do caminho',
    'Next route position': 'Próxima posição do caminho',
    'Show complete route overview': 'Mostrar visão geral do caminho',
    'Close semantic lens': 'Fechar lente semântica',
    'Copy link to semantic lens': 'Copiar link da lente semântica',
    'Open full semantic radar': 'Abrir radar semântico completo',
    'Close semantic radar': 'Fechar radar semântico',
    'Diagram overview. Click a node to focus it, or use arrow keys to pan.': 'Visão geral do diagrama. Clique em um nó para destacá-lo ou use as setas para mover o mapa.',
    'Diagram view controls': 'Controles de visualização do diagrama',
    'Trace a directed route': 'Rastrear um caminho direcionado',
    'Trace route (R)': 'Rastrear caminho (R)',
    'Open semantic radar': 'Abrir radar semântico',
    'Semantic radar (M)': 'Radar semântico (M)',
    'Open semantic lens': 'Abrir lente semântica',
    'Semantic lens (L)': 'Lente semântica (L)',
    'Find a node (/)': 'Encontrar um nó (/)',
    'Open diagram guide': 'Abrir guia do diagrama',
    'Diagram guide (?)': 'Guia do diagrama (?)',
    'Reset diagram view': 'Redefinir visualização do diagrama',
    'Reset view (0)': 'Redefinir visualização (0)',
    'Zoom out (-)': 'Diminuir zoom (-)',
    'Zoom in (+)': 'Aumentar zoom (+)',
    'Close diagram guide': 'Fechar guia do diagrama',
    'Diagram exploration actions': 'Ações de exploração do diagrama',
    'Additional keyboard shortcuts': 'Atalhos de teclado adicionais',
    'Close node finder': 'Fechar busca de nós',
    'Focus DOM Image Selection, img ≥150×150, Webpage Content › Select & Queue': 'Destacar seleção de imagem no DOM, img ≥150×150, Conteúdo da página › Selecionar e enfileirar',
    'Focus DOM Image Swap, baked PNG data URL, Webpage Content › Fit, Bake & Persist': 'Destacar substituição de imagem no DOM, URL de dados PNG composta, Conteúdo da página › Ajustar, compor e salvar',
    'Focus Blob Job Queue, Dexie · 1–5 workers, Background Worker › Blob Queue › Select & Queue': 'Destacar fila de tarefas Blob, Dexie · 1–5 workers, Worker em segundo plano › Fila de blobs › Selecionar e enfileirar',
    'Focus 14-Gate + Kruskal MST, cut edge > mean+2σ · recurse, Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Destacar 14 filtros + Kruskal MST, corte se aresta > média+2σ · recursivo, Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Focus PP-OCRv6 + 1D Tiler, h≥2500px tiles · DBNet + CRNN, Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Destacar PP-OCRv6 + divisão 1D, recortes h≥2500px · DBNet + CRNN, Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Focus Polygon-Only Inpaint, median · FMM · dynamic patch, Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Destacar restauração somente de polígonos, mediana · FMM · recorte dinâmico, Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Focus Index-Safe Translation, GTX · WebLLM · Cloud Pool, Offscreen Runtime › Promise.all Branches › Detect, Merge & Compute': 'Destacar tradução com índice preservado, GTX · WebLLM · pool na nuvem, Execução fora da tela › Ramos do Promise.all › Detectar, agrupar e processar',
    'Focus Bubble Fit & Typeset, Heuristic/YOLO · 4-pass fit, Offscreen Runtime › Fit, Bake & Persist': 'Destacar ajuste de balões e letreiramento, heurística/YOLO · ajuste em 4 etapas, Execução fora da tela › Ajustar, compor e salvar',
    'Focus Dexie IndexedDB, clean Blob + editable lines, Local Storage › Editable Project Data › Fit, Bake & Persist': 'Destacar IndexedDB com Dexie, Blob limpo + linhas editáveis, Armazenamento local › Dados editáveis do projeto › Ajustar, compor e salvar',
    'Focus Studio Editor, rerender saved TextBlocks, Local Storage › Editable Project Data › Fit, Bake & Persist': 'Destacar Editor Studio, recompõe blocos de texto salvos, Armazenamento local › Dados editáveis do projeto › Ajustar, compor e salvar',
    'End-to-End Flow': 'Fluxo de ponta a ponta',
    'OCR Filters': 'Filtros de OCR',
    'Bubble & Typeset': 'Balões e composição do texto',
    'Parallel AI': 'IA paralela',
    'Storage': 'Armazenamento',
    'Flow': 'Fluxo',
    'SIGNAL FLOW': 'FLUXO DE SINAIS',
    'BLUEPRINT / REV 01': 'PROJETO TÉCNICO / REV. 01',
    'EDITORIAL / FIELD NOTE': 'EDITORIAL / NOTA DE CAMPO',
    'ARCHIFY / PLATE 04': 'ARCHIFY / PRANCHA 04',
    'Visual style: {style}. Choose visual style': 'Estilo visual: {style}. Escolha o estilo visual',
    'the guided story': 'o percurso guiado',
    'the active chapter': 'o capítulo atual',
    'the chapter delta preview': 'a prévia das mudanças do capítulo',
    'Route Probe': 'Sondagem de caminho',
    'Semantic Lens': 'Lente semântica interativa',
    'Motion paused by reduced-motion preference': 'Animação pausada pela preferência de movimento reduzido',
    'Motion paused while this page is hidden': 'Animação pausada enquanto esta página está oculta',
    'Pause motion; currently yielding to {owner}': 'Pausar animação; controle cedido a {owner}',
    'Live preview enabled · yielding to {owner}': 'Prévia ao vivo ativada · controle cedido a {owner}',
    'Pause guided story': 'Pausar percurso guiado',
    'Pause guided story (P)': 'Pausar percurso guiado (P)',
    'Replay guided story': 'Repetir percurso guiado',
    'Replay guided story (P)': 'Repetir percurso guiado (P)',
    'Replay story': 'Repetir percurso',
    'Story playback unavailable while motion is Still': 'A reprodução do percurso não está disponível com a animação parada',
    'Switch motion to Live to play the guided story': 'Ative a animação ao vivo para iniciar o percurso guiado',
    'Moment link copied': 'Link da etapa copiado',
    'Could not copy story moment link': 'Não foi possível copiar o link da etapa',
    'Copied': 'Copiado',
    'Copy failed': 'Falha ao copiar',
    'Story trail for {label}: {count} beats': 'Trilha de {label}: {count} etapas',
    'Open chapter {index} of {total}: {label}, {count} stops': 'Abrir capítulo {index} de {total}: {label}, {count} etapas',
    'Current chapter {index} of {total}: {label}, {count} stops': 'Capítulo atual {index} de {total}: {label}, {count} etapas',
    '{count} selected nodes': '{count} nós selecionados',
    '{count} stops': '{count} etapas',
    '{count} stop': '{count} etapa',
    '{label} — current chapter, {count} stops': '{label} — capítulo atual, {count} etapas',
    '{stay} stay, {enter} enter, {leave} leave': '{stay} permanecem, {enter} entram, {leave} saem',
    'Open chapter {index} of {total}: {label}. Chapter focus delta: {delta}': 'Abrir capítulo {index} de {total}: {label}. Variação do foco: {delta}',
    '{label} — {delta} chapter focus': '{label} — variação do foco do capítulo: {delta}',
    '{from} → {to} · via {label}': '{from} → {to} · por {label}',
    'Chapter {index} / {total}': 'Capítulo {index} / {total}',
    'Playing': 'Reproduzindo',
    'Settled': 'Estável',
    'Paused': 'Pausado',
    'Pinned': 'Fixado',
    'Step {index} / {total} · {label}': 'Etapa {index} / {total} · {label}',
    '{step} · Static moment': '{step} · etapa estática',
    '{count} steps complete · {note}': '{count} etapas concluídas · {note}',
    'Path settled for reading.': 'Percurso pronto para leitura.',
    '{count} steps · Static path': '{count} etapas · percurso estático',
    '{count} steps · Ready': '{count} etapas · pronto',
    '{state} chapter {index} of {total}: {label}. {beat}. {route}': '{state} capítulo {index} de {total}: {label}. {beat}. {route}',
    'Beat {index} / {total} · {label} · starting point': 'Etapa {index} / {total} · {label} · ponto inicial',
    'Beat {index} / {total} · {from} → {to}': 'Etapa {index} / {total} · {from} → {to}',
    'Beat {index} / {total} · {from} → {to} · reverse authored link': 'Etapa {index} / {total} · {from} → {to} · link definido no sentido inverso',
    'Beat {index} / {total} · {from} ⇄ {to} · {count} authored links': 'Etapa {index} / {total} · {from} ⇄ {to} · {count} links definidos',
    'Beat {index} / {total} · {from} · {to} · grouped · no direct link': 'Etapa {index} / {total} · {from} · {to} · agrupado · sem link direto',
    'Story beat {index} of {total}: {label}. ': 'Etapa {index} de {total} do percurso: {label}. ',
    'Starting point.': 'Ponto inicial.',
    'From {from} through one authored forward relationship.': 'De {from}, por uma relação direta definida.',
    'From {from}; the authored relationship points from {to} to {from}.': 'De {from}; a relação definida aponta de {to} para {from}.',
    'From {from} through {count} authored relationships; shown without arbitrary motion.': 'De {from}, por {count} relações definidas; exibidas sem movimento arbitrário.',
    'Grouped from {from} with no direct authored relationship.': 'Agrupado a partir de {from}, sem relação direta definida.',
    'Grouped transition · no direct authored link': 'Transição agrupada · sem link direto definido',
    ' +{count} more': ' +{count} a mais',
    'Reverse authored relationship': 'Relação definida no sentido inverso',
    '{count} authored relationships': '{count} relações definidas',
    'Authored relationship': 'Relação definida',
    'authored direction: {from} → {to}': 'sentido definido: {from} → {to}',
    'Authored starting point': 'Ponto inicial definido',
    'Copy link to current story moment: Beat {index} of {total}: {label}': 'Copiar link da etapa atual: etapa {index} de {total}: {label}',
    'This diagram has no authored guided story.': 'Este diagrama não tem um percurso guiado definido.',
    '{nodes} · {relationships} · {views}': '{nodes} · {relationships} · {views}',
    '{count} semantic node': '{count} nó semântico',
    '{count} semantic nodes': '{count} nós semânticos',
    '{count} relationship': '{count} vínculo',
    '{count} relationships': '{count} vínculos',
    '{count} guided view': '{count} visão guiada',
    '{count} guided views': '{count} visões guiadas',
    'Walk {count} authored chapter and its real relationships.': 'Percorra {count} capítulo definido e suas relações reais.',
    'Walk {count} authored chapters and their real relationships.': 'Percorra {count} capítulos definidos e suas relações reais.',
    'No authored guided story in this diagram.': 'Não há percurso guiado definido neste diagrama.',
    'Focus {label}': 'Destacar {label}',
    'Choose {label} as route start': 'Escolher {label} como início do caminho',
    'Choose {label} as route destination, {links}': 'Escolher {label} como destino do caminho, {links}',
    '{count} matching node': '{count} nó correspondente',
    '{count} matching nodes': '{count} nós correspondentes',
    'nodes': 'nós',
    '{count} link': '{count} link',
    '{count} links': '{count} links',
    'Focus {label}, {count} related connection': 'Destacar {label}, {count} conexão relacionada',
    'Focus {label}, {count} related connections': 'Destacar {label}, {count} conexões relacionadas',
    '{visible} of {available} {noun}': '{visible} de {available} {noun}',
    '{available} {noun}': '{available} {noun}',
    'Pick a semantic node on the diagram': 'Selecione um nó semântico no diagrama',
    'Pause route journey': 'Pausar percurso do caminho',
    'Replay route journey': 'Repetir percurso do caminho',
    'Pause': 'Pausar',
    'Replay': 'Repetir',
    'Choose a destination from {label}': 'Escolha um destino a partir de {label}',
    'Find target': 'Encontrar destino',
    'Find a reachable route destination': 'Encontrar um destino alcançável',
    'Choose a different destination': 'Escolha outro destino',
    'A route needs two distinct semantic nodes.': 'Um caminho precisa de dois nós semânticos diferentes.',
    'No directed route to {label}': 'Não há caminho direcionado até {label}',
    '{target} is not reachable from {source}. Pick a highlighted destination.': '{target} não pode ser alcançado a partir de {source}. Escolha um destino destacado.',
    'Select the source. The next step will reveal only directed destinations.': 'Selecione a origem. A próxima etapa mostrará somente destinos direcionados.',
    'Traced route link copied': 'Link do caminho rastreado copiado',
    'Could not copy traced route link': 'Não foi possível copiar o link do caminho rastreado',
    'Route position {index} of {total}: {label}': 'Posição {index} de {total} no caminho: {label}',
    'Step {index} of {total} · {phase} · {label}': 'Etapa {index} de {total} · {phase} · {label}',
    'Automatic journey requires Live motion': 'O percurso automático exige animação ao vivo',
    'Clear traced route': 'Limpar caminho rastreado',
    '{nodes} · {hops} · shortest authored route': '{nodes} · {hops} · menor caminho definido',
    '{count} directed hop': '{count} salto direcionado',
    '{count} directed hops': '{count} saltos direcionados',
    'Complete': 'Concluído',
    'Inspecting': 'Inspecionando',
    '{count} directed destination available. Pick a highlighted node.': '{count} destino direcionado disponível. Escolha um nó destacado.',
    '{count} directed destinations available. Pick a highlighted node.': '{count} destinos direcionados disponíveis. Escolha um nó destacado.',
    'No outgoing route starts here. Clear and choose another source.': 'Não há caminhos de saída neste nó. Limpe e escolha outra origem.',
    '{source} to {target}': '{source} até {target}',
    'Choose route start': 'Escolha o início do caminho',
    'Search route sources': 'Pesquisar origens do caminho',
    'No matching route sources': 'Nenhuma origem de caminho correspondente',
    'Nodes that can start a route': 'Nós que podem iniciar um caminho',
    'route sources': 'origens do caminho',
    'start': 'início',
    'Destination from {label}': 'Destino a partir de {label}',
    'Search reachable destinations': 'Pesquisar destinos alcançáveis',
    'No matching reachable destinations': 'Nenhum destino alcançável correspondente',
    'Reachable route destinations': 'Destinos alcançáveis',
    'reachable destinations': 'destinos alcançáveis',
    '{count} hop': '{count} salto',
    '{count} hops': '{count} saltos',
    'Open active semantic lens': 'Abrir lente semântica ativa',
    'Semantic legend': 'Legenda semântica',
    'Inspect {label}, {count} node': 'Inspecionar {label}, {count} nó',
    'Inspect {label}, {count} nodes': 'Inspecionar {label}, {count} nós',
    '{label}, {count} node': '{label}, {count} nó',
    '{label}, {count} nodes': '{label}, {count} nós',
    '{first} → {second}: {forward} · {second} → {first}: {reverse} · {count} direct relationship': '{first} → {second}: {forward} · {second} → {first}: {reverse} · {count} relação direta',
    '{first} → {second}: {forward} · {second} → {first}: {reverse} · {count} direct relationships': '{first} → {second}: {forward} · {second} → {first}: {reverse} · {count} relações diretas',
    '{nodes} · {relationships} · connected peers remain visible': '{nodes} · {relationships} · itens conectados continuam visíveis',
    '{count} {label} node': '{count} nó {label}',
    '{count} {label} nodes': '{count} nós {label}',
    '{count} touching relationship': '{count} relação conectada',
    '{count} touching relationships': '{count} relações conectadas',
    'Semantic diagram radar nodes': 'Nós do radar semântico do diagrama',
    'Focus {label} from Semantic Radar': 'Destacar {label} no Radar Semântico',
    '{count} nodes · {viewport}': '{count} nós · {viewport}',
    '{count} nodes · full map': '{count} nós · mapa completo',
    'Radar compacted to avoid covering the Semantic Passport or MAP controls.': 'Radar reduzido para não cobrir a ficha semântica nem os controles do mapa.',
    'Cancel semantic radar waiting for more MAP space': 'Cancelar espera do radar semântico por mais espaço no mapa',
    'Semantic radar needs more visible MAP space': 'O radar semântico precisa de mais espaço visível no mapa',
    'full map': 'mapa completo',
    '{percent}% width': '{percent}% da largura',
    '{percent}% viewport': '{percent}% da área visível',
    'the chapter handoff': 'a passagem do capítulo',
    'Relationship Preview': 'Prévia de relações',
    'Intent Trace': 'Rastreamento de intenção',
    'semantic focus': 'foco semântico',
    'legend preview': 'prévia da legenda',
    'reader interaction': 'interação do leitor',
    'Not supported by this browser': 'Não é compatível com este navegador',
    'Clipboard image write not supported by this browser': 'Este navegador não permite gravar imagens na área de transferência',
    'Clipboard image write not supported by this browser.': 'Este navegador não permite gravar imagens na área de transferência.',
    'Clipboard image write not supported in this browser.': 'Este navegador não é compatível com a gravação de imagens na área de transferência.',
    'Motion capture unavailable in this browser': 'A captura de movimento não está disponível neste navegador',
    'WebM unavailable in this browser': 'WebM não está disponível neste navegador',
    'Export failed: {message}': 'Falha ao exportar: {message}',
    'Unknown Share Card variant: {variant}': 'Variante de cartão de compartilhamento desconhecida: {variant}',
    'Trace a route before exporting a Route Share Card': 'Rastreie um caminho antes de exportar um cartão de compartilhamento de caminho',
    'Trace authored reach before exporting a Reach Share Card': 'Rastreie o alcance definido antes de exportar um cartão de compartilhamento de alcance',
    'unknown': 'desconhecido',
    'Route Share Card export failed: {message}': 'Falha ao exportar o cartão de compartilhamento de caminho: {message}',
    'Reach Share Card export failed: {message}': 'Falha ao exportar o cartão de compartilhamento de alcance: {message}',
    'Copy failed: {message}': 'Falha ao copiar: {message}',
    'Copied PNG to clipboard': 'PNG copiado para a área de transferência',
    'Copied Share Card': 'Cartão de compartilhamento copiado',
    'Downloaded Share Card': 'Cartão de compartilhamento baixado',
    'Downloaded Route Share Card': 'Cartão de compartilhamento de caminho baixado',
    'Downloaded Reach Share Card': 'Cartão de compartilhamento de alcance baixado',
    'Downloaded WebM': 'Arquivo WebM baixado',
    'Recording 6 seconds of motion…': 'Gravando 6 segundos de animação…',
    'Route: {source} → {target} · {count} directed hop': 'Caminho: {source} → {target} · {count} salto direcionado',
    'Route: {source} → {target} · {count} directed hops': 'Caminho: {source} → {target} · {count} saltos direcionados',
    'Authored {direction} from {origin} · {nodes} · {links} · max {hops}': 'Percurso definido {direction} a partir de {origin} · {nodes} · {links} · máximo de {hops}',
    '{count} node': '{count} nó',
    '{count} nodes': '{count} nós',
    'ARCHIFY · ROUTE · {hops}': 'ARCHIFY · CAMINHO · {hops}',
    'ARCHIFY · {direction} REACH': 'ARCHIFY · ALCANCE {direction}',
    'ARCHIFY · {preset} · {theme}': 'ARCHIFY · {preset} · {theme}',
    'Canvas unavailable for {label}': 'Canvas indisponível para {label}',
    '2D canvas context unavailable for {label}': 'Contexto 2D do canvas indisponível para {label}',
    'canvas.toBlob unavailable for {label}': 'canvas.toBlob indisponível para {label}',
    'canvas.toBlob returned no data for {label}': 'canvas.toBlob não retornou dados para {label}',
    'Share Card variants cannot be combined': 'As variantes do cartão de compartilhamento não podem ser combinadas',
    'Share Card export could not remove temporary viewer state': 'A exportação do cartão de compartilhamento não conseguiu remover o estado temporário do visualizador',
    'Route Card export could not preserve the resolved route safely': 'A exportação do cartão de caminho não conseguiu preservar o caminho resolvido com segurança',
    'Reach Card export could not preserve authored reach safely': 'A exportação do cartão de alcance não conseguiu preservar com segurança o alcance definido',
    'WebM motion export requires a trace animation and browser MediaRecorder support': 'A exportação de animação WebM exige uma animação de caminho rastreado e suporte do navegador a MediaRecorder',
    'MediaRecorder failed': 'O MediaRecorder falhou',
    'MediaRecorder produced an empty WebM': 'O MediaRecorder gerou um WebM vazio',
    'SVG background could not be loaded for WebM export': 'Não foi possível carregar o fundo SVG para exportar em WebM',
    'Starting point': 'Ponto inicial',
    'Hide connected relationships': 'Ocultar relações conectadas',
    'Copy relation': 'Copiar relação',
    'Copy node': 'Copiar nó',
    'Copy link to pinned relationship': 'Copiar link da relação fixada',
    'Copy link to source node': 'Copiar link do nó de origem',
    'Focused node link copied': 'Link do nó em destaque copiado',
    'Pinned relationship link copied': 'Link da relação fixada copiado',
    'Could not copy focused node link': 'Não foi possível copiar o link do nó em destaque',
    'Could not copy pinned relationship link': 'Não foi possível copiar o link da relação fixada',
    'No connected relationships': 'Nenhuma relação conectada',
    '{count} relation': '{count} relação',
    '{count} relations': '{count} relações',
    'Show {count} connected relationship': 'Mostrar {count} relação conectada',
    'Show {count} connected relationships': 'Mostrar {count} relações conectadas',
    'Direct relationship explorer': 'Explorador de relações diretas',
    'Use arrow keys to explore relationships. Press Enter or Space to pin details; Escape clears.': 'Use as setas para explorar as relações. Pressione Enter ou Espaço para fixar os detalhes; Esc para limpar.',
    'loops back': 'retorna ao início',
    'connects to': 'conecta a',
    'connects from': 'conecta de',
    'Pinned relationship · {from} → {to} · {label}': 'Relação fixada · {from} → {to} · {label}',
    'Inspect relationship {index} of {total}: {from} to {to}, {label}. Press Enter for details.': 'Inspecione a relação {index} de {total}: {from} para {to}, {label}. Pressione Enter para ver os detalhes.',
    'Outgoing': 'Saída',
    'Incoming': 'Entrada',
    'Self loops': 'Ciclos próprios',
    '{group}: {relationship}, {neighbor}': '{group}: {relationship}, {neighbor}',
    'OUT →': 'SAÍDA →',
    '← IN': '← ENTRADA',
    'LOOP': 'CICLO',
    '{count} verified source reference': '{count} referência de fonte verificada',
    '{count} verified source references': '{count} referências de fonte verificadas',
    'SRC': 'FONTE',
    '{count} verified source; focus this node to inspect': '{count} fonte verificada; destaque este nó para inspecioná-la',
    '{count} verified sources; focus this node to inspect': '{count} fontes verificadas; destaque este nó para inspecioná-las',
    'Open verified repository revision {revision}': 'Abrir revisão verificada do repositório {revision}',
    'Open verified source {path} at revision {revision}': 'Abrir fonte verificada {path} na revisão {revision}',
    'Open ↗': 'Abrir ↗',
    'Trace {count} upstream authored node': 'Rastrear {count} nó definido a montante',
    'Trace {count} upstream authored nodes': 'Rastrear {count} nós definidos a montante',
    'Trace {count} downstream authored node': 'Rastrear {count} nó definido a jusante',
    'Trace {count} downstream authored nodes': 'Rastrear {count} nós definidos a jusante',
    'No upstream authored nodes': 'Nenhum nó definido a montante',
    'No downstream authored nodes': 'Nenhum nó definido a jusante',
    '{direction} · {nodes} nodes · {links} links · max {hops} hops': '{direction} · {nodes} nós · {links} links · máximo de {hops} saltos',
    '{hint}. Reset diagram view': '{hint}. Redefinir visualização do diagrama',
    '{semantic}{hint} · reset view (0)': '{semantic}{hint} · redefinir visualização (0)',
    'Semantic camera active · ': 'Câmera semântica ativa · ',
    'FULL': 'COMPLETO',
    'AUTO': 'AUTO',
    'Zoom in to reveal relationship labels and node context': 'Aumente o zoom para ver os rótulos das relações e o contexto dos nós',
    'Zoom in again to reveal tags and annotations': 'Aumente o zoom novamente para ver as tags e anotações',
    'Full diagram detail': 'Detalhamento completo do diagrama',
    '{label}. {out} outgoing, {in} incoming{loops}. {total} connections. Press Enter for details.': '{label}. {out} de saída, {in} de entrada{loops}. {total} conexões. Pressione Enter para ver os detalhes.',
    '{out} outgoing · {in} incoming{loops}': '{out} de saída · {in} de entrada{loops}',
    ', {count} self loop': ', {count} ciclo próprio',
    ' · {count} loop': ' · {count} ciclo',
    'Trace a DOM image through Blob queueing, PP-OCRv6, noise filtering, MST grouping, parallel compute, typesetting, and swap.': 'Acompanhe uma imagem do DOM pela fila Blob, PP-OCRv6, filtragem de ruído, agrupamento MST, processamento paralelo, composição do texto e substituição.',
    'Inspect 1D webtoon tiling, DBNet polygon extraction, projective crop recognition, the 14-stage noise battery, and text polygons.': 'Inspecione a divisão 1D de webtoons, a extração de polígonos do DBNet, o reconhecimento projetivo de recortes, os 14 filtros de ruído e os polígonos de texto.',
    'Follow speech bubble safe-core expansion, four-pass font fitting, balanced-wrap width search, and locked affine text placement.': 'Acompanhe a expansão do núcleo seguro dos balões, o ajuste de fonte em quatro etapas, a busca por largura com quebra equilibrada e o posicionamento afim fixo do texto.',
    'Promise.all waits for index-safe translation and polygon-only inpainting before canvas composition.': 'O Promise.all aguarda a tradução com índices preservados e a restauração somente dos polígonos antes de compor a imagem.',
    'Raw Blob enters Dexie; clean plate and editable TextBlock lines persist separately from the baked PNG returned to the page.': 'O Blob original entra no Dexie; o fundo limpo e as linhas editáveis de TextBlock são salvos separadamente do PNG composto que retorna à página.'
  });
  const ENGLISH_TRANSLATIONS = new Map();
  for (const [english, portuguese] of Object.entries(TRANSLATIONS)) {
    if (!ENGLISH_TRANSLATIONS.has(portuguese)) ENGLISH_TRANSLATIONS.set(portuguese, english);
  }

  const textRecords = new WeakMap();
  const attributeRecords = new WeakMap();
  const viewerMessageSources = new WeakMap();
  let currentLanguage = DEFAULT_LANGUAGE;
  let observer;

  /**
   * Reads the persisted site language, defaulting to Brazilian Portuguese.
   * @returns {'en'|'pt-BR'} The saved language or the first-visit default.
   */
  function getInitialLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return savedLanguage === 'en' || savedLanguage === 'pt-BR' ? savedLanguage : DEFAULT_LANGUAGE;
    } catch (error) {
      console.warn('Could not read the saved site language; using pt-BR.', error);
      return DEFAULT_LANGUAGE;
    }
  }

  /**
   * Translates a text node while preserving its original whitespace.
   * @param {string} source Original English text.
   * @param {'en'|'pt-BR'} language Active language.
   * @returns {string} Text in the requested language when a translation exists.
   */
  function translateText(source, language) {
    const trimmed = source.trim();
    const translated = language === 'en'
      ? ENGLISH_TRANSLATIONS.get(trimmed)
      : TRANSLATIONS[trimmed];
    if (!translated) return source;
    const start = source.indexOf(trimmed);
    return `${source.slice(0, start)}${translated}${source.slice(start + trimmed.length)}`;
  }

  /**
   * Updates one text node and remembers its source for later language changes.
   * @param {Text} node Text node to update.
   * @returns {void}
   */
  function updateTextNode(node) {
    if (!node.isConnected || !node.parentElement?.closest('body, head')) return;
    if (node.parentElement.closest('script, style, noscript, template, select')) return;

    const currentText = node.nodeValue || '';
    const record = textRecords.get(node);
    const source = record && currentText === record.applied
      ? record.source
      : currentText;
    const translated = translateText(source, currentLanguage);

    textRecords.set(node, { source, applied: translated });
    if (currentText !== translated) node.nodeValue = translated;
  }

  /**
   * Translates a supported element attribute and preserves its original value.
   * @param {Element} element Element whose attribute changed.
   * @param {string} name Attribute name.
   * @returns {void}
   */
  function updateAttribute(element, name) {
    if (!TRANSLATABLE_ATTRIBUTES.has(name) || !element.hasAttribute(name)) return;
    let records = attributeRecords.get(element);
    if (!records) {
      records = new Map();
      attributeRecords.set(element, records);
    }
    const currentValue = element.getAttribute(name) || '';
    const record = records.get(name);
    const source = record && currentValue === record.applied
      ? record.source
      : currentValue;
    const translated = translateText(source, currentLanguage);

    records.set(name, { source, applied: translated });
    if (currentValue !== translated) element.setAttribute(name, translated);
  }

  /**
   * Translates visible text and supported attributes in an element subtree.
   * @param {ParentNode} root Root to scan.
   * @returns {void}
   */
  function translateSubtree(root) {
    if (root instanceof Element) {
      for (const attribute of root.attributes) updateAttribute(root, attribute.name);
      if (root.matches('svg[role="img"]')) root.setAttribute('lang', currentLanguage);
      root.querySelectorAll('svg[role="img"]').forEach((diagram) => {
        diagram.setAttribute('lang', currentLanguage);
      });
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      updateTextNode(node);
      node = walker.nextNode();
    }
    if (root instanceof Element) {
      root.querySelectorAll('*').forEach((element) => {
        for (const attribute of element.attributes) updateAttribute(element, attribute.name);
      });
    }
  }

  /**
   * Applies a language across the page, updates selectors, and persists it.
   * @param {'en'|'pt-BR'} language Language selected by the user.
   * @returns {void}
   */
  function setLanguage(language) {
    if (language !== 'en' && language !== 'pt-BR') return;
    currentLanguage = language;
    document.documentElement.lang = language;
    document.querySelectorAll('svg[role="img"][lang]').forEach((diagram) => {
      diagram.setAttribute('lang', language);
    });
    document.querySelectorAll('[data-site-language]').forEach((selector) => {
      selector.value = language;
    });

    window.dispatchEvent(new CustomEvent('manga-garden:language-change', {
      detail: { language }
    }));
    translateSubtree(document.documentElement);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      console.error('Could not save the selected site language.', error);
    }
  }

  /**
   * Updates the embedded diagram viewer's runtime messages when available.
   * @param {'en'|'pt-BR'} language Active language.
   * @returns {void}
   */
  function updateViewerMessages(language) {
    const data = window.archifyI18nData;
    if (!data || !data.messages || typeof data.messages !== 'object') return;

    let sources = viewerMessageSources.get(data);
    if (!sources) {
      sources = { ...data.messages };
      viewerMessageSources.set(data, sources);
    }
    for (const [key, value] of Object.entries(sources)) {
      data.messages[key] = translateText(value, language);
    }
    if (window.Archify) window.Archify.locale = language;
  }

  /**
   * Handles language changes dispatched by the shared selector.
   * @param {CustomEvent<{language: 'en'|'pt-BR'}>} event Language change event.
   * @returns {void}
   */
  function handleLanguageChange(event) {
    updateViewerMessages(event.detail.language);
  }

  /**
   * Handles updates from another site tab sharing the stored preference.
   * @param {StorageEvent} event Storage event.
   * @returns {void}
   */
  function handleStorageChange(event) {
    if (event.key === LANGUAGE_STORAGE_KEY && (event.newValue === 'en' || event.newValue === 'pt-BR')) {
      setLanguage(event.newValue);
    }
  }

  /**
   * Localizes DOM nodes added or changed by interactive page scripts.
   * @param {MutationRecord[]} mutations Observed DOM mutations.
   * @returns {void}
   */
  function handleMutations(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') {
        updateTextNode(mutation.target);
      } else if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'lang' && mutation.target.matches?.('svg[role="img"]')) {
          if (mutation.target.getAttribute('lang') !== currentLanguage) {
            mutation.target.setAttribute('lang', currentLanguage);
          }
        } else {
          updateAttribute(mutation.target, mutation.attributeName);
        }
      } else {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) translateSubtree(node);
          else if (node.nodeType === Node.TEXT_NODE) updateTextNode(node);
        });
      }
    }
  }

  /**
   * Connects the selectors and starts localization once the document is ready.
   * @returns {void}
   */
  function initializeLanguage() {
    document.querySelectorAll('[data-site-language]').forEach((selector) => {
      selector.addEventListener('change', () => setLanguage(selector.value));
    });
    window.addEventListener('manga-garden:language-change', (event) => {
      handleLanguageChange(event);
    });
    window.addEventListener('storage', handleStorageChange);
    currentLanguage = getInitialLanguage();
    setLanguage(currentLanguage);

    observer = new MutationObserver(handleMutations);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES, 'lang'],
      characterData: true,
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage, { once: true });
  } else {
    initializeLanguage();
  }
})();
