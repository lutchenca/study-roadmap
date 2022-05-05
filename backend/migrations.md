## Resources
- [Managing schemas - Migrations](https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli)
- [https://docs.nestjs.com/migration-guide](https://docs.nestjs.com/migration-guide)
- [Migrations (Solução para Versionamento de Banco de Dados) // Dicionário do Programador (CÓDIGO FONTE TV)](https://youtu.be/HRw1Dcxxu2k) 
- [Knex.js - Query Builder SQL para JavaScript e TypeScript](https://www.youtube.com/watch?v=PaOLPWVUt9k)  
- [What Are Database Migrations? | Database Migrations in Node](https://www.youtube.com/watch?v=YEh7yPr8oGE)

# Migrations Database

Permite troca de versões entre a estrutura do banco de dados, além de armazenar abstrações, permitindo suporte a diversas linguagens e sistemas.

Surgiram no contexto de facilitar a manutenção de modelagem e estruturação do banco de dados. 

Os frameworks mais conhecidos possuem implementações de migrations, podem variar mas normalmente são feitas por uma CLI do próprio framework. 

### Como funciona

A implementação normalmente tem vários arquivos em que cada um representa uma versão da estrutura do banco de dados, dentro desses arquivos ficam uma abstração da modelagem do banco (uma representação da sua estrutura na linguagem em que foi implementada), através dessa abstração é possível fazer tudo que normalmente faŕiamos para modelar um banco de dados em um arquivo SQL. 

Normalmente esses arquivos tem duas funções:

- UP: responsável por aplicar as alterações
- DOWN: esponsável por reverter as alterações

### Knex

- Instalação: yarn add knex

Knex é agnóstico, ou seja, pode ser usado com qualquer banco de dados (SQL, MySQL, etc), então toda vez que vc instalar, tem que também instalar algum database driver