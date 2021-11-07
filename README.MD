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

### A:              
![Imagem o objetivo final do projeto](/public/images/)



<br />

### C:                
![Imagem do sucesso na criação de um usuário e do token JWT no sistema](/public/images/)




<br />

### A:                   
![Imagem da construção de uma requisição para rota restrita com um jwt](/public/images/)





<br />

### A:                
![Imagem da a resposta do servidor a uma tentativa de acesso a uma rota restrita sem o token JWT necessário](/public/images/)





<br />

### J:                
![Imagem da resposta do servidor com o acesso à rota restrita quando da correta validação do token JWT](/public/images/)







<br />

### F:                
![Imagem do teste da aplicação usando a aplicação de Frontend em Vanilla JS providenciado pelo professor Smilga](/public/images/)




<br />








<br />
<br />

[^1] John Smilga - Freecodecamp.org.






