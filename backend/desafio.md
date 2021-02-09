DESAFIO DE UM PROCESSO SELETIVO AO VIVO

Primeira Etapa - 5 minutos
1 - Criar um repositório no github
2 - Clonar o repositório para a máquina

Segunda Etapa - 10 minutos
1 - Iniciem um arquivo package.json (através do npm)
2 - Importar os módulos express, cors
3 - Criar um arquivo src/index.js
4 - Tornar o index.js o servidor
5 - Startar o servidor

Terceira Etapa - 3 minutos
1 - Criar a propriedade start no package.json 
para a aplicação rodar com o comando npm start
2 - Adicionar na propriedade start o nodemon para que não 
tenhamos necessidade de ficar atualizando o projeto

Quarta Etapa - 8 minutos
1 - Criar uma arquivo src/routes/index.js
2 - Criar uma rota '/' que retorne Hello World na tela
(podem fazer a função no segundo parâmetro sem criar controller)
3 - Importar as rotas no arquivo src/index.js

Quinta Etapa - 20 minutos
1 - Criar o banco de dados to_do_list
2 - Criar o arquivo .sequelizerc na raíz do projeto, exportando as informações de config, models-path e migrations-path
3 - Criar o arquivo src/config/database.js efetuando conexao com o banco de dados to_do_list
4 - Importar o módulo sequelize
5 - Criar uma migration de tasks, nome do arquivo deverá ser database/create_tasks_table.js
nessa migration devemos ter as colunas: 
  id -  Primary Key, Auto Increment, Integer, 
  title - String, 
  description - String, 
  done - Boolean,
  deleted - Boolean
6 - Migrar a tabela tasks para o banco de dados

