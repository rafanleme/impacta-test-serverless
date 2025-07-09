# 📚 BookExplorer – Deploy no Netlify com Serverless Functions

Este projeto demonstra como hospedar uma aplicação estática com funções serverless usando o [Netlify](https://www.netlify.com/). Aqui você encontrará o passo a passo para configurar, testar e publicar sua aplicação com HTML, JavaScript e funções back-end simples via Netlify Functions.

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) instalada:
  ```bash
  npm install -g netlify-cli
  ```
- Conta no [Netlify](https://app.netlify.com/)

---

## 🗂️ Estrutura do Projeto

```
bookexplorer/
├── public/
│   └── index.html
├── .netlify/
│   └── functions/
│       ├── books.js
│       └── ping.js
├── netlify.toml
```

---

## ⚙️ Configuração Inicial

### 1. Iniciar o projeto com Git

```bash
git init
git add .
git commit -m "Primeira versão"
```

### 2. Criar arquivo `netlify.toml`

```toml
[build]
  publish = "public"
  functions = ".netlify/functions"
```

### 3. Estrutura mínima da função (ex: `books.js`)

```js
// .netlify/functions/books.js
exports.handler = async function (event, context) {
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(books),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  };
};
```

---

## 🧪 Testar localmente (opcional)

```bash
netlify dev
```

Acesse:

- Página: [http://localhost:8888](http://localhost:8888)
- Function: [http://localhost:8888/.netlify/functions/books](http://localhost:8888/.netlify/functions/books)

---

## ☁️ Deploy para o Netlify

### 1. Login via CLI (se necessário)

```bash
netlify login
```

### 2. Inicializar o projeto com Netlify

```bash
netlify init
```

- Escolha: **Create & configure a new site**
- Informe nome do site
- `Directory to deploy:` → `public`
- `Functions folder:` → `.netlify/functions`

### 3. Publicar em produção

```bash
netlify deploy --prod
```

---

## 🌐 URLs finais

- Site: `https://SEU-SITE.netlify.app`
- Books API: `https://SEU-SITE.netlify.app/.netlify/functions/books`
- Ping API: `https://SEU-SITE.netlify.app/.netlify/functions/ping`

---

## ✅ Dica de .gitignore

```gitignore
# Ignorar configurações locais do Netlify, mas manter as funções versionadas
.netlify/*
!.netlify/functions/
```
