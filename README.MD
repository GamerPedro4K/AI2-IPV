# Projeto Site de Filmes simbolico
O site tem como finalidade utilizar os conceitos de react, express, axios, postgress e sequelize. 

# Instalação
```
cd .\Express\
npm i
cd ..
cd .\frontend\
npm i
```
# Express/.env
Por favor, lembre-se de personalizar o arquivo `.env` com as configurações específicas do seu ambiente. O `.env` atual contém apenas exemplos e deve ser ajustado de acordo com suas próprias definições. Certifique-se de fornecer as credenciais corretas para o banco de dados e outras configurações necessárias.
```
NODE_ENV=development
PORT=3001

# Database
DB_PASSWORD=passsword
DB_DATABASE=databasename
DB_USER=user
DB_HOST=ip
DB_PORT=5432
DB_SSL=false
```
# Caregar base de dados para PostegresSQL (Express)
```
npx sequelize db:migrate
```
# Caregar dados de backend
### Comando para caregar dados (seeders)
```
npx sequelize db:seed:all
```
## Para apagar todos os dados
```
npx sequelize db:seed:undo:all
```

# Iniciar o servidor backend
```
cd Express
npm run dev
```

# Iniciar o frontend
```
cd frontend
npm start
```
