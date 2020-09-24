# star-wars-api


## Sobre

Star Wars API é uma API NodeJS desenvolvida para armazenar e disponibilizar os dados de planetas do universo de Star Wars. Seus dados são inseridos manualmente, clonados de acordo com o nome a partir da API encontrada em https://swapi.dev/about ou inseridos automaticamente via script seed.

## Pré-Requisitos

Requisitos necessários para rodar a aplicação.

```
NodeJS
NPM
MongoDB
```

## Instalação

```
git clone https://github.com/albuquerque-david/star-wars-api
```

Entre na pasta clonada

```
npm install
```

## Como usar

A API possui dois scripts de inicialização.

```
npm run start-dev
```

Inicializa o servidor da aplicação em modo de desenvolvimento.

```
npm run seed:planets
```

Adiciona todos os planetas de Star Wars no banco de dados MongoDB da aplicação.

## Documentação

### GET

```
/planet - Retorna todos os planetas armazenados
/planet/?name=<value> - Busca um planeta com o nome específico
/planet/<id>  - Busca um planeta com o ID específico
```

### POST

```
/planet - Cria um novo planeta no banco
```

### PUT

```
/planet/<id> - Editar um planeta existente no banco pelo seu ID
```

### DELETE

```
/planet/<id> - Deleta um planeta existente no banco pelo seu ID
```

### FORMATO DO INPUT

As requisições do tipo POST/PUT aceitam corpos de requisição no formato JSON com a seguinte estrutura:

```
{
    "name":"<name>",
    "climate":"<climate>",
    "terrain":"<terrain>"
}
```


