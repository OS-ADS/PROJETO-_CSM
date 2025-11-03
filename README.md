# Voices of the Dark Wiki

Uma wiki interativa e completa para o modo de jogo **Voices of the Dark**, um mod altamente modificado do Garry's Mod, focado em combate tático e jogabilidade de extração.

## 📌 Sobre o Projeto

Este projeto é uma wiki desenvolvida pelos alunos do curso de Análise e Desenvolvimento de Sistemas (ADS) como parte de um trabalho acadêmico. A wiki serve como um guia completo para jogadores do servidor Voices of the Dark, oferecendo informações sobre mecânicas de jogo, crafting, mapas, armas e muito mais.

### ✨ Funcionalidades

- **Sistema de Login**: Autenticação básica com modal estilizado, checagem de usuário e senha contra um banco de dados simples (.txt).
- **Carregamento Dinâmico de Conteúdo**: Navegação AJAX para carregar páginas sem recarregar a página inteira.
- **Design Temático**: Interface escura com acentos laranja, inspirada no estilo do jogo.
- **Tela de Boas-Vindas Terminal**: Após login bem-sucedido, exibe uma tela estilo terminal com nome do usuário e hashtag aleatório (#0100-#9999).
- **Navegação Responsiva**: Sidebar com submenus para fácil navegação em dispositivos móveis.
- **Transições Suaves**: Animações de fade-in/out para uma experiência fluida.

## 👥 Membros da Equipe

- **[Jorge Augusto](https://github.com/JorgeBackendDev)** – Owner/Developer  
  🔹 Linguagens: Kotlin, Python, Lua, JavaScript  
  🔹 Ferramentas: GitHub, MySQL, Docker, VSCode, Bootstrap  

- **[Ygor Belarmino](https://github.com/Mercurykz)** – Dev-Full Stack  
  🔹 Linguagens: C#, Java, HTML, CSS, JavaScript  
  🔹 Ferramentas: Git, MySQL, VSCode  

- **[Kauan Martes](https://github.com/KauanM99)** – Developer/Back-end  
  🔹 Linguagens: Java, PHP, JavaScript  
  🔹 Ferramentas: Postman, Figma, VSCode  

- **[Guilherme Nogueira](https://github.com/GuilhermeNgr)** – Developer/Back-end  
  🔹 Linguagens: Java, HTML, CSS, JavaScript  
  🔹 Ferramentas: GitHub, VSCode, Git  

## 🛠️ Tecnologias Utilizadas

- **Linguagens**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks/Bibliotecas**: Bootstrap.
- **Ferramentas**: VSCode, Git, GitHub
- **Outros**: Fetch API para carregamento dinâmico, Local Storage para persistência (futuro)

## 🚀 Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge)
- Servidor local (opcional, mas recomendado para evitar restrições CORS)

### Passos para Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/voices-of-the-dark-wiki.git
   cd voices-of-the-dark-wiki
   ```

2. **Abra o projeto**:
   - Abra o arquivo `index.html` diretamente no navegador, ou
   - Use um servidor local (ex: Live Server no VSCode, ou Python: `python -m http.server`)

3. **Configuração do Login**:
   - Edite o arquivo `users.txt` para adicionar/remover usuários no formato `usuario:senha` (uma por linha).
   - Nota: Este é um sistema básico para demonstração; não use em produção.

4. **Navegação**:
   - Clique em "LOGIN" no header para acessar o sistema de autenticação.
   - Use a sidebar para navegar pelas seções da wiki.

## 📖 Como Usar

1. **Login**: Clique em "LOGIN", insira usuário e senha válidos (ex: admin:password).
2. **Boas-Vindas**: Após login, veja a tela terminal com seu nome e hashtag aleatório.
3. **Exploração**: Navegue pelas seções usando a sidebar (Introdução, Mecânicas, Mapas, etc.).
4. **Conteúdo Dinâmico**: Cada link carrega conteúdo via AJAX para uma experiência fluida.

## 📂 Estrutura do Projeto

```
voices-of-the-dark-wiki/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── users.txt           # Banco de dados simples de usuários
├── image/              # Imagens e assets
├── *.html              # Páginas de conteúdo (crafting.html, etc.)
└── README.md           # Este arquivo
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é para fins educacionais e não possui licença específica. Todos os direitos reservados aos desenvolvedores.

---

**Projeto desenvolvido como trabalho acadêmico para o curso de ADS.**


