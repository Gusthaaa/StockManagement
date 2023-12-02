# StockManagement

## Inicialização do Projeto Localmente

### 1. Configuração do Banco de Dados
Para começar, é necessário configurar um banco de dados MySQL 8.
Certifique-se de criar as tabelas "products" e "users" da seguinte maneira:
- Tabela "products" com as colunas: id, name, description, price, quantity.
- Tabela "users" com as colunas: id, username, password.

### 2. Iniciando a API Rest do Backend
Para iniciar a API Rest do backend:
1. Navegue até a pasta `backend` dentro do projeto.
2. Execute os seguintes comandos:
   ```bash
   npm install
   node index
