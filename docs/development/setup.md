# Guia de configuração do ambiente de desenvolvimento 🛠️

Este guia explica como configurar o ambiente local para desenvolver, compilar e depurar o **MangaLume 2.0**.

---

## 💻 Pré-requisitos

| Requisito | Versão recomendada | Observações |
| :--- | :--- | :--- |
| **Node.js** | **`v22.14.0 LTS`** | Versão definida em `.nvmrc`. O Vite 8 exige Node 20.19+ ou 22.12+. |
| **npm** | `v10.x` ou posterior | Incluído no Node.js. |
| **Navegador Chromium** | Versão mais recente do Google Chrome, Brave ou Edge | Deve oferecer suporte ao Manifest V3 e WebGPU. |
| **Sistema operacional** | macOS (Apple Silicon/Intel), Linux ou Windows 11 | Os testes WebGPU exigem aceleração de hardware pela GPU. |

---

## 🚀 Instalação passo a passo

### 1. Clone o repositório
Use a URL do seu próprio repositório:
```bash
git clone https://github.com/SEU-USUARIO/MangaLume-2.0.git
cd MangaLume-2.0
```

### 2. Verifique a versão do Node.js
Se você usa `nvm` (Node Version Manager):
```bash
nvm use
```
Ou verifique manualmente:
```bash
node -v  # Deve exibir v22.14.0 ou uma versão compatível
```

### 3. Instale as dependências
Use `npm ci` para instalar as versões registradas em `package-lock.json`:
```bash
npm ci
```

### 4. Compile os arquivos da extensão
A compilação copia os arquivos WASM, verifica os tipos TypeScript e executa a compilação com Vite/Rolldown:
```bash
npm run build
```
A extensão compilada, pronta para carregar, ficará na pasta `dist/`.

---

## 🔌 Carregue a extensão no Chrome

1. Abra o navegador Chromium e acesse `chrome://extensions/`.
2. Ative o **Modo do desenvolvedor** no canto superior direito.
3. Clique em **Carregar sem compactação**.
4. Selecione a pasta `dist/` dentro da pasta do projeto MangaLume 2.0.
5. A extensão **MangaLume 2.0** deverá aparecer na lista.
6. Clique no ícone de extensões da barra do navegador e fixe o MangaLume 2.0.

---

## ⚡ Ative a aceleração de hardware WebGPU

Para executar modelos locais do ONNX Runtime Web e WebLLM na GPU:

1. Abra `chrome://flags/` no navegador.
2. Pesquise estas opções:
   - **`#enable-unsafe-webgpu`** $\to$ selecione **Enabled**.
   - **`#enable-webgpu-developer-features`** $\to$ selecione **Enabled** (útil para depurar shaders).
3. Reinicie o navegador.
4. Acesse `chrome://gpu/` e confirme que o WebGPU aparece como acelerado por hardware.

---

## 🔄 Fluxo diário de desenvolvimento

### Inicie o servidor de desenvolvimento do Vite
```bash
npm run dev
```
- Inicia o servidor Vite em `http://localhost:5173/`.
- O Hot Module Replacement (HMR) atualiza arquivos de interface em `src/popup/` e `src/App.tsx`.
- **Sobre recarregar a extensão:** depois de alterar arquivos em `src/background/` ou `src/content/`, clique no ícone 🔄 **Atualizar** do MangaLume 2.0 em `chrome://extensions/` para recarregar o contexto da extensão no Chrome.

### Execute verificações rápidas de qualidade
```bash
# Verifique a sintaxe e as regras do código com Oxlint
npm run lint

# Execute os testes automatizados do Vitest
npm test
```

---

## ☁️ (Opcional) Backend do pool compartilhado da Cloudflare

Para testar ou executar o pool comunitário de fallback com vários provedores:

```bash
cd worker
npm ci
cp .dev.vars.example .dev.vars

# Preencha .dev.vars com as chaves de API de teste dos provedores
npm run dev
```
Para informações sobre implantação em produção, consulte [`worker/WAF_RULES.md`](../../worker/WAF_RULES.md).
