# Jobs API - Freecodecamp.org


Estudo de backend Node-JS com o projeto **Freecodecamp**, para criar uma API completa para um serviço de dados ligado a empregabilidade dos usuários. E, além da API propriamente dita, a aplicação vai utilizar autenticação JSON Web Token (JWT) para logar nas rotas restritas, além de usar Bcryptjs como forma de hashear dados de senhas a serem armazenados no banco de dados, todo isso que faz parte de uma importante função para desenvolvimento suguro de aplicações web.[^1]


<br />




Novamente, este projeto trás a mesma implementação modular para a aplicação vistas anteriormente na série de projetos estudados, ou seja, separando módulo para rota, para controladores para as rotas, e embora neste projeto não seja implementado banco de dados, foi deixado separado o módulo para a conexão com o banco de dados MongoDB.


<br />

Aqui nós também reaproveitamos os módulos customizados para tratamento de erro criados no projeto **Task Manager**. Assim, os configuramos no middleware do Express-JS para tratar exceções **404** e **500** de servidor.

<br />

Finalmente, culminando o projeto com a integração com o Frontend, criado pelo professor Smilga e que é servido pelo servidor através do middleware Static do Express-JS.



<br />

[Freecodecamp.org](https://www.freecodecamp.org/learn/back-end-development-and-apis/)



<br />


Dependências:

- Bcryptjs
- Cors
- Dotenv
- Express JS
- Express-async-errors
- Express-rate-limit
- Helmet
- Http-status-codes
- Joi
- Jsonwebtoken
- Mongoose
- Nodemon
- Rate-limiter
- Swagger-ui-express
- Xss-clean
- Yamljs


<br />
Desse modo, o usuário deve primeiramente realizar uma requizição POST para a URL:

<br />

```
/api/v1/auth/register
```

<br  />

Passando no corpo da requisição um JSON com as propriedades **name**, **email** e **password**, para receber na resposta um token JWT (JSON Web Token):


```
{
	"name": "Tila",
	"email": "tila@gmail.com",
	"password": "123456"
}
```

<br />

O token recebido na resposta da requisição POST é usado para se poder acessar os dados desta API. Ademais, o token também pode ser conseguido para usuários anteriormente credenciados que façam o seu devido login:

<br />

```
/api/v1/auth/login
```

<br  />

Passando no corpo da requisição um JSON com as propriedades **email** e **password**, para receber na resposta um token JWT (JSON Web Token):


```
{
	"email": "tila@gmail.com",
	"password": "123456"
}
```

<br />

**Observe que o valor de email é usado como propriedade Unique no banco de dados para garantir um ID único a cada usuário.**


<br />

De qualquer forma, o token retornado deve ser utilizado nas requisições de dados posterioris para acesso aos dados. Por exemplo, no uso de uma ferramenta de teste de requisições como Postman, o token deve ser copiado e colocado no cabeçalho das requisições GET ou ser passado como uma variável interna para a ferramenta, para só assim ser disponibilizado o acesso para as 04 rotas de dados, segindo a devida sintaxe abaixo:

<br />

```
headers.authorization = 'Bearer <valor do token>';
```

<br />

### Abaixo, temos um exemplo de requisição feita com o framework Postman usando de variável interna configurada:

![ Abaixo, temos um exemplo de requisição feita com o framework Postman](/public/images/jobs-api-01.png)


<br />


As rotas foram construídas encima das seguintes URLs:

1. Get All Jobs
```
/api/v1/jobs
```

<br />

2. POST - Create Job
```
/api/v1/launches/jobs
```

<br />

3. GET Single Job
```
/api/v1/launches/jobs/61898ce0a41ef953e4560598
```

<br />

4. PATCH - Update Job
```
/api/v1/launches/jobs/61898cd2a41ef953e4560596
```

<br />

4. DELETE Job
```
/api/v1/launches/jobs/61898caaa41ef953e4560592
```

<br />

Também foi utilizado a dependência Cors para Node-JS, para permitir testar a requisição no ambiente local!


<br />



<br />
<br />

[^1] John Smilga - Freecodecamp.org.






