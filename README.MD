# Jobs API - Freecodecamp.org


Estudo de backend Node-JS com o projeto **Freecodecamp**, para criar uma aplicação de estudo para treinar o padrão de autenticação JSON Web Token (JWT), uma importante parte dentro do desenvolvimento de aplicações web quanto ao quesito de segurança.[^1]


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

### Aqui vemos na tela do professor Smilga o objetivo final do projeto, que é a realização de uma requisição GET para uma rota restrita com a passagem de um JWT válido:              
![Imagem o objetivo final do projeto](/public/images/)



<br />

### Criando um usuário na rota POST /login e recebendo um JWT válido para ser usado nas requisições seguintes:                
![Imagem do sucesso na criação de um usuário e do token JWT no sistema](/public/images/)




<br />

### Aqui temos a construção da requisição básica a uma rota restrita através do Postman, em que é passado o JWT no Header:                   
![Imagem da construção de uma requisição para rota restrita com um jwt](/public/images/)





<br />

### Agora, temos a resposta do servidor a uma tentativa de acesso a uma rota restrita sem o token JWT necessário:                
![Imagem da a resposta do servidor a uma tentativa de acesso a uma rota restrita sem o token JWT necessário](/public/images/)





<br />

### Já abaixo, ocorre a resposta do servidor com o acesso à rota restrita quando da correta validação do token JWT:                
![Imagem da resposta do servidor com o acesso à rota restrita quando da correta validação do token JWT](/public/images/)







<br />

### Finalmente, o teste da aplicação usando a aplicação de Frontend em Vanilla JS providenciado pelo professor Smilga. Observa-se o token presente no LocalStorage da aplicação frontend:                
![Imagem do teste da aplicação usando a aplicação de Frontend em Vanilla JS providenciado pelo professor Smilga](/public/images/)




<br />








<br />
<br />

[^1] John Smilga - Freecodecamp.org.






