# Instruções de configuração do WAF de borda da Cloudflare

Para proteger sua cota gratuita do Worker (100.000 requisições/dia) contra abuso de custos, bots e ataques de força bruta, configure regras do WAF de borda da Cloudflare no painel da Cloudflare.

As regras do WAF de borda são executadas no perímetro da rede da Cloudflare, **antes** de o Worker ser iniciado. Requisições bloqueadas consomem **0 execuções do Worker** e **0 requisições ao Durable Object**.

---

## 1. Regra de limitação de requisições (plano gratuito da Cloudflare)

O plano gratuito da Cloudflare inclui **1 regra de limitação de requisições**.

### Etapas de configuração:
1. Abra a zona `12094852.xyz` no [painel da Cloudflare](https://dash.cloudflare.com/).
2. Acesse **Security** $\to$ **WAF** $\to$ **Rate limiting rules**.
3. Clique em **Create rule**:
   * **Nome da regra**: `Limit Translation Endpoint Bursts`
   * **Quando as requisições recebidas corresponderem a**:
     * Hostname igual a `api.12094852.xyz`
     * Caminho URI igual a `/v1/chat/completions`
     * Método igual a `POST`
   * **Com as mesmas características**:
     * Contar por: `IP`
   * **Requisições**:
     * Maior que: `15` requisições
     * Período: `10 seconds`
     * Esse é o equivalente, no plano gratuito da Cloudflare, ao limite do Worker de `5 requests / 3 seconds`, pois o WAF gratuito exige uma janela de medição de 10 segundos.
   * **Ação**:
     * Escolha: `Block`
     * Duração: `10 seconds` (ou resposta personalizada: `HTTP 429 Too Many Requests`)
4. Clique em **Deploy**.

Depois que o endpoint no domínio personalizado passar em um teste de tradução autenticado, desative as URLs de produção e de pré-visualização `workers.dev` em **Workers & Pages** $\to$ **manga-garden-translate-pool** $\to$ **Domains**. Manter ativa a URL de produção `workers.dev` permite que clientes contornem essa regra do WAF configurada na zona.

---

## 2. Regras de segurança personalizadas do WAF (5 regras no plano gratuito)

O plano gratuito da Cloudflare permite **5 regras personalizadas**.

### Regra A: bloquear cabeçalho Content-Type ausente ou malformado
* **Nome da regra**: `Enforce JSON Content-Type`
* **Expressão**:
  ```text
  (http.request.uri.path eq "/v1/chat/completions" and http.request.method eq "POST" and not any(http.request.headers["content-type"][*] contains "application/json"))
  ```
* **Ação**: `Block` (HTTP 400)

### Regra B: bloquear métodos diferentes de POST/OPTIONS
* **Nome da regra**: `Strict HTTP Methods on Translation`
* **Expressão**:
  ```text
  (http.request.uri.path eq "/v1/chat/completions" and not http.request.method in {"POST" "OPTIONS"})
  ```
* **Ação**: `Block` (HTTP 405)

---

## 3. Comandos para configurar os segredos do Worker

Depois de criar o Worker na Cloudflare, configure os segredos pelo terminal:

```bash
cd worker

# ID do cliente de autenticação do Google (público/audience)
npx wrangler secret put GOOGLE_CLIENT_ID

# Salt HMAC para acompanhar a cota de usuários anônimos
npx wrangler secret put JWT_SALT

# Chaves dos provedores de IA ativos (conforme necessário)
npx wrangler secret put NVIDIA_API_KEY
npx wrangler secret put OPENROUTER_API_KEY
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put GROQ_API_KEY
```

`JWT_SALT` deve ser um valor privado, gerado aleatoriamente, e permanecer estável: alterá-lo muda os identificadores derivados usados no controle de cotas. Se esse segredo estiver ausente, o Worker retornará um erro de configuração; ele não usa um valor público alternativo.

---

## 4. Desenvolvimento local

Execute o Worker localmente usando Durable Objects com SQLite local:

```bash
cd worker
npm install
npx wrangler dev
```
