  A API de Gerenciamento de Álbuns de Rock foi desenvolvida para permitir o cadastro, consulta, atualização e remoção de álbuns de rock. Ela utiliza Node.js com Express.js para a criação das rotas e SQLite como banco de dados para armazenamento das informações dos álbuns. Essa API é ideal para aplicativos ou sistemas que precisam gerenciar um catálogo de álbuns musicais de forma simples e eficiente.

Passos para iniciar o projeto.
 1. npm install
 2. npx nodemon server.js

Explicação das rotas disponíveis e exemplos de requisições.
 1. Criar um Novo Álbum = Invoke-RestMethod -Uri "http://localhost:3000/albums" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"title": "Abbey Road", "artist": "The Beatles", "year": 1969, "genre": "Rock"}'
 2. Listar Todos os Álbuns = Invoke-RestMethod -Uri "http://localhost:3000/albums" -Method Get
 3. Buscar um Álbum por ID = Invoke-RestMethod -Uri "http://localhost:3000/albums/1" -Method Get
 4. Atualizar um Álbum = Invoke-RestMethod -Uri "http://localhost:3000/albums/1" -Method Put -Headers @{"Content-Type"="application/json"} -Body '{"title": "Revolver", "artist": "The Beatles", "year": 1966, "genre": "Rock"}'
 5. Excluir um Álbum = Invoke-RestMethod -Uri "http://localhost:3000/albums/1" -Method Delete
