# Quiz MySQL

Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Introdução

O **Quiz MySQL** é uma aplicação interativa desenvolvida para testar e melhorar os conhecimentos dos usuários em MySQL. A aplicação carrega perguntas diretamente de um servidor, permitindo que os usuários respondam, recebam feedback em tempo real e acompanhem sua pontuação final.
Você pode testar a aplicação ao vivo em: https://quiz-mysql.vercel.app/

---

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/quiz-mysql.git
   cd quiz-mysql/quiz-mysql
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

---

## Uso

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para ver o aplicativo em ação.

---

## Estrutura do Projeto

A estrutura do projeto segue a seguinte organização:

```
quiz-mysql/
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Página principal do quiz
│   │   ├── congrats/
│   │   │   └── CongratsClient.tsx  # Página de parabéns ao final do quiz
├── tailwind.config.ts
└── tsconfig.json
```

---

## Contribuição

Contribuições são bem-vindas! Siga as etapas abaixo para contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:  
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:  
   ```bash
   git commit -m "Descrição da minha feature"
   ```
4. Envie para sua branch:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no repositório original.


---

💡 **Dica**: Caso encontre problemas ou tenha dúvidas, abra uma [issue](https://github.com/seu-usuario/quiz-mysql/issues). Estamos aqui para ajudar!
