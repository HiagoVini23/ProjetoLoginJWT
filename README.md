# ProjetoLoginJWT

# JWT-Autentication

Projeto realizado na matéria de Ferramentas de Programação III, tendo como foco principal o aprendizado de um login em um site com autorização e autenticação realizado com o token JWT, além de poder cadastrar, deletar e listar novos usuários quando logado.

### Tabela User

| Nome | Tipo |
| --- | --- |
| id | auto-increment |
| login | string |
| senha | string |

### Tecnologias Usadas:

- Typescript
- Ionic + Angular
- Mysql
- NodeJS

### Instruções para executar

Back-end

1. Modifique o /src/datasource.ts de acordo com o seu login e senha do banco de dados.
2. Execute a linha de comando abaixo para criar as migrations.<br>
`npm run typeorm -- -d ./src/data-source.ts migration:run`
3. Execute `npm i` para baixar as dependencias do projeto.
4. Para inicializar execute `npm run dev`

Front-end

1. Execute `npm i` para baixar as dependencias do projeto.
2. Execute `ionic serve` para inicializar o front.
