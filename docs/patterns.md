# NOTES: APIs

## Documentação

- [x] Utilizar arquitetura **RCSM** (Router/Controlller/Service/Model);

  - **Router:** it's used to create and manage the API's routes;
  - **Controlller:** it's used to receive and response the requests sended to the API;
  - **Service:** it's used to manage business rules and all kinds of internal or external operations;
  - **Model:** it's used to represents our data on the database and provide access to them;

- [x] Utilizar o conceito de **DAO** (Data Access Object) para isolar a camada de banco de dados:

  - **API** (Router/Controller) -> **DAO** (Service) -> **ORM** (Model/Sequelize) -> **Database** (MySql/Postgres);

- [x] Utilizar um sistema **ORM** (Object-relational mapping):

  - [Sequelize](https://sequelize.org/master/)

- [x] Utilizar metódos semânticos para criação de rotas:

  - **Create:** POST
  - **Read:** GET
  - **Update:** PUT
  - **Delete:** DELETE

- [x] Utilizar códigos de estatus HTTP semânticos para responder requisições:

  - **200:** Ok
  - **201:** Created
  - **204:** No Content
  - **400:** Bad Request
  - **404:** Not Found
  - **500:** Internal Server Error

- [x] Utilizar erros personalizadas para responder requisições:

  - Para criação de novos erros, herdar a classe `Error` do Javascript;
  - Criar um `HttpError` básico e herdar para os demais Http Errors;
  - Responder as requisições com erros utilizando mensagens informativas. Ex.:
    ```js
      {
        "message": "Id 9999 not found in the database.",
        "httpStatusCode": 404,
        "httpStatusMessage": "Not Found",
        "date": "2021-06-24T16:13:02.581Z"
      }
    ```

- [x] Utilizar middleware para validar requisições por ID (`paramID()`, `loadById()`):

  - Fazer a consulta no banco de dados pelo `id` na middleware;
  - Anexar o resultado da consulta na requisição: `requisição.fornecedor = fornecedor`
  - Responder `404 Not Found` diretamente ao usuário caso o registro não exista;

- [ ] Utilizar cabeçalhos para responder requisições da API:

  - [ ] Criar uma rota para o método `HEAD`, retornando apenas informações de cabeçalho para rotas `/:id`;
  - [HTTP Headers Index](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Index);
  - **ETag:** it's an identifier for a specific version of a resource;
  - **Last-Modified:** contains the date and time at which the origin server believes the resource was last modified;
  - **Content-Type:** is used to indicate the original MIME type of the resource;
  - **Content-Length:** indicates the size of the message body, in bytes, sent to the recipient;
  - **Date:** contains the date and time at which the message was originated;
  - **Connection:** controls whether or not the network connection stays open after the current transaction finishes;
  - **keep-alive:** allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.
  - **Locations:** indicates the URL to redirect a page to. It only provides a meaning when served with a 3xx (redirection) or 201 (created) status response.;

- [ ] Utilizar controle de **CORS**:

  - [ ] Cada rota completa deve conter seu próprio controle de CORS;

  - **Access-Control-Allow-Origin:** is a response header that indicates whether the response can be shared with requesting code from the given origin.

  - **Origin:** is a request header that indicates the origin of the cross-site access request or preflight request. This browser side header will be answered by the complementary server side header _Access-Control-Allow-Origin_.

  ***

  - **Access-Control-Allow-Headers:** is a response header used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.

  - **Access-Control-Request-Headers:** is a request header used by browsers when issuing a preflight request, to let the server know which HTTP headers the client might send when the actual request is made. This browser side header will be answered by the complementary server side header _Access-Control-Allow-Headers_.

  ***

  - **Access-Control-Allow-Methods:** is a response header used in response to a preflight request which includes the Access-Control-Request-Methods to indicate which HTTP methods can be used during the actual request.

  - **Access-Control-Request-Method:** is a request header used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made. This header is necessary as the preflight request is always an OPTIONS and doesn't use the same method as the actual request. This browser side header will be answered by the complementary server side header _Access-Control-Allow-Methods_.

  ***

  - **Access-Control-Max-Age:** is a response header that indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached.

  - **Access-Control-Allow-Credentials:** is a response header that tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is include.

  - **Access-Control-Expose-Headers:** is as response header that allows a server to indicate which response headers should be made available to scripts running in the browser, in response to a cross-origin request.

- [ ] Utilizar rotas de versionamento da API utilizando o padrão [SEMVER](https://semver.org/):

  - **MAJOR:** version when you make incompatible API changes,
  - **MINOR:** version when you add functionality in a backwards compatible manner, and
  - **PATCH:** version when you make backwards compatible bug fixes.

## IDEIAS

- Descrever uma forma prática para criar um versionamento de apis utilizando rotas.
- Adicionar status da resposta em requisições bem sucedidas;
- Read article about REST and RESTfull APIs;
- Read article about CORS;

## LINKS

https://imasters.com.br/devsecops/design-patterns-com-javascript-typescript
https://roadmap.sh/guides/design-patterns-for-humans
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers
https://www.alura.com.br/artigos/construtores-em-javascript
https://semver.org/

Sequelize Paranoid: Soft Delete
paranoid: true,
Restore()
Migration addColumn
defaultScope / scopes
.scope('scopeName').findAll()
Validators: attribute
Escopos de associação

## Tokens

### Creating User

We have to make an endpoint to create users and stores their encrypted passwords on the database. To encrypt passwords we use **hash functions**. The most commons hash functions are **MD5** and **SHA-256**. To improve the security of this process we use **salt** and **cost** with our hash functions.

- **Hash functions:** a cryptographic hash function (CHF) is a mathematical algorithm that maps data of an arbitrary size (often called the "message") to a bit array of a fixed size (the "hash value", "hash", or "message digest"). It is a one-way function, that is, a function for which is practically infeasible to invert or reverse the computation.
  - **MD5:** is a cryptographically broken but still widely used hash function producing a 128-bit hash value;
  - **SHA-2:** is a set of cryptographic one-way compression hash functions designed by the United States National Security Agency (NSA). The SHA-2 family consists of six hash functions with digests (hash values) that are _224_, _256_, _384_ or _512_ bits: _SHA-224_, _SHA-256_, _SHA-384_, _SHA-512_, _SHA-512/224_, _SHA-512/256_;
  - **Salt:** in cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase. Historically, only a cryptographic hash function of the password was stored on a system, but over time, additional safeguards were developed to protect against duplicate or common passwords being identifiable (as their hashes are identical). Salting is one such protection. (`SHA-256(password, salt)`);
  - **Cost:** is used to control the speed of hash functions based on the current compunting power, improving the security against brutal force attacks;
    https://cursos.alura.com.br/course/node-jwt-autenticacao-tokens/task/74237
    https://cursos.alura.com.br/course/node-jwt-autenticacao-tokens/task/78620
  - **bcrypt:** is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999.[1] Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

#### Encrypting user's password

1. Install `bcrypt` package: `npm install bcrypt --save`

2. With bcrypt you can encryp the user's password before save:

```js
async function encryptPassword(password) {
	const cost = 12;
	return await bcrypt.hash(password, cost);
}
```

#### Logging in

To allow a user to perform operations on our API, we have to create an endpoint for login by username and password that check if the user exists and if the password is correct. If everything's right we return a **JSON Web Toke** for validating all user's operations.

- **JSON Web Token:** (JWT, pronounced /dʒɒt/, same as the word "jot") is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.
  https://cursos.alura.com.br/course/node-jwt-autenticacao-tokens/task/74613
  - **Header:** identifies which algorithm is used to generate the signature. `HS256` indicates that this token is signed using HMAC-SHA256. Typical cryptographic algorithms used are HMAC with SHA-256 (HS256) and RSA signature with SHA-256 (RS256). JWA (JSON Web Algorithms) RFC 7518 introduces many more for both authentication and encryption.
  - **Payload:** contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token. This example has the standard Issued At Time claim (iat) and a custom claim (loggedInAs).

```json
//header
{
  "alg": "HS256",
  "typ": "JWT"
}
//payload
{
  "userId": 3569,
  "loggedInAs": "admin",
  "iat": 1422779638
}
//
```

```js
//signature
HMAC_SHA256(
	secret,
	base64urlEncoding(header) + '.' + base64urlEncoding(payload)
);

//token
const token =
	base64urlEncoding(header) +
	'.' +
	base64urlEncoding(payload) +
	'.' +
	base64urlEncoding(signature);
```
