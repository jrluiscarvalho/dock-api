# dock-api

## Rotas

# Pessoas

 * /person/ - POST

# Contas

* /account/ - POST
* /account/draft/ - PUT
* /account/deposit/ - PUT
* /account/status/ - PUT
* /account/balance/{idAccount} - GET

# Transações

* /transaction/ - POST
* /transaction/{idAccount}/{startDate}/{endDate}/ - GET
* /transaction/{idAccount}/ - GET


## Descrição

A Api tem como finalidade a inserção de pessoas, contas e transações (nessa ordem). 

## Caracteristicas

* Foi desenvolvido com node, usando express, ORM Sequelize e banco de dados Postgres.

* Para usar a api basta usar o comando 'npm i & npm start'.

* Possui swagger no endpoit 'localhost:3000/api-docs'.

* Existe uma collection na raiz do projeto para inserir no Postman ou Insomnia para usar a Api.

* Foi usado Docker no banco de dados para facilitar a montagem do ambiente. Para executar o script do banco, deve entrar na pasta db e em seguida executar docker-compose -f postgres.yml up.

* Para o script do banco foram usado migrations. Pode ser executado com 'npx sequelize db:migrate''.

* Para executar os testes basta estar na raiz do projeto e usar o comando 'npm run test''.

* As exceções foram tratadas para dar um feedback amigavel ao client. Foi utilizado Sentry para controle de possiveis erros não previstos. O sentry capitura esses erros e o mostra em sua interface (sentry.io), e pode notificar a equipe com emails, mensagens no slack e algumas opções a mais.