
# Undiscovered Cards

This project is designed to help users submit and discover indie TCG card games. Here's a simple outline of the major flows and steps.

---

## 🚀 Core Features and Flows

### 1. **Create Account:**
- Front-End: 
  - User fills registration form (username, email, password)
  - ---> Front-end validates input and sends it to the back-end

- Back-End:
  - ---> Back-end hashes the password and stores user info

- Database:
  - ---> User data is stored securely

---

### 2. **User Login:**
- Front-End: 
  - User enters credentials (email, password)
  - ---> Front-end sends it to back-end

- Back-End:
  - ---> Verifies credentials, sends JWT token if valid

- Database:
  - ---> User is fetched by email, password is validated

---

### 3. **Submit a Game:**
- Front-End: 
  - User fills game submission form
  - ---> Form data is sent to back-end

- Back-End:
  - ---> Game data is validated and stored

- Database:
  - ---> Game info is saved in database
  - ---> Images saved via cloud storage (e.g., S3, Firebase)

---

### 4. **View a Game Page:**
- Front-End: 
  - User clicks on a game
  - ---> Game data is fetched from back-end

- Back-End:
  - ---> Game metadata and related comments returned

- Database:
  - ---> Game data fetched by ID

---

### 5. **Comment on a Game:**
- Front-End:
  - User types comment
  - ---> Comment is sent to the back-end

- Back-End:
  - ---> Comment validated and stored

- Database:
  - ---> Comments saved linked to game and user

---

### 6. **Upvote a Game:**
- Front-End: 
  - User clicks on upvote
  - ---> Sends vote to the back-end

- Back-End:
  - ---> Stores vote

- Database:
  - ---> Updates game vote count

---

## 🛠 Milestones

1. **Milestone 1**: Set up user authentication (sign up, log in)
2. **Milestone 2**: Implement game submission
3. **Milestone 3**: Build game browsing and detail pages
4. **Milestone 4**: Add comments and likes functionality
5. **Milestone 5**: Create an admin dashboard for moderation

---

---

# Undiscovered Cards (PT-BR)

Este projeto é voltado para ajudar os usuários a enviar e descobrir jogos de cartas TCG indie. Aqui está um resumo simples dos principais fluxos e etapas.

---

## 🚀 Funcionalidades e Fluxos Principais

### 1. **Criar Conta:**
- Front-End: 
  - Usuário preenche formulário de registro (nome de usuário, e-mail, senha)
  - ---> Front-end valida os dados e envia para o back-end

- Back-End:
  - ---> Back-end armazena as informações e criptografa a senha

- Banco de Dados:
  - ---> Os dados do usuário são armazenados com segurança

---

### 2. **Login do Usuário:**
- Front-End: 
  - Usuário insere credenciais (e-mail, senha)
  - ---> Front-end envia para o back-end

- Back-End:
  - ---> Verifica credenciais e retorna um token JWT se válidas

- Banco de Dados:
  - ---> Usuário é recuperado pelo e-mail e senha é validada

---

### 3. **Enviar um Jogo:**
- Front-End: 
  - Usuário preenche o formulário de envio de jogo
  - ---> Dados do formulário são enviados ao back-end

- Back-End:
  - ---> Os dados do jogo são validados e armazenados

- Banco de Dados:
  - ---> Informações do jogo são salvas no banco de dados
  - ---> Imagens salvas via serviço em nuvem (ex: S3, Firebase)

---

### 4. **Visualizar Página de Jogo:**
- Front-End: 
  - Usuário clica em um jogo
  - ---> Dados do jogo são recuperados do back-end

- Back-End:
  - ---> Retorna metadados do jogo e comentários relacionados

- Banco de Dados:
  - ---> Dados do jogo são recuperados pelo ID

---

### 5. **Comentar em um Jogo:**
- Front-End:
  - Usuário escreve um comentário
  - ---> Comentário é enviado ao back-end

- Back-End:
  - ---> Comentário é validado e armazenado

- Banco de Dados:
  - ---> Comentários salvos e vinculados ao jogo e ao usuário

---

### 6. **Curtir um Jogo:**
- Front-End: 
  - Usuário clica em curtir
  - ---> Ação de curtir é enviada ao back-end

- Back-End:
  - ---> Armazena o voto

- Banco de Dados:
  - ---> Atualiza contagem de votos do jogo

---

## 🛠 Marcos

1. **Marco 1**: Configurar autenticação de usuário (registro, login)
2. **Marco 2**: Implementar envio de jogos
3. **Marco 3**: Criar páginas de navegação e detalhes de jogos
4. **Marco 4**: Adicionar funcionalidades de comentários e curtidas
5. **Marco 5**: Criar um painel de administração para moderação
