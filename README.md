
<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a> </p> 

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456 
[circleci-url]: https://circleci.com/gh/nestjs/nest
# User Auth System Backend


A backend system of creating user and login using JWT authentication, NestJS, TypeScript, Docker and TypeORM.


## Run Locally

Clone the project

```bash
  git clone https://github.com/victormrtns/user-auth-system-backend.git
```

Go to the project directory

```bash
  cd user-auth-system-backend
```

Install dependencies

```bash
  npm install
```
Run Docker Container Postgres Database
```bash
  docker-compose up --build
```

Start the server

```bash
  npm run start:dev
```


## Acknowledgements

 - [How to implement Passport Strategy in Nest](https://docs.nestjs.com/recipes/passport)
 - [Repository Pattern](https://docs.nestjs.com/techniques/database#repository-pattern)
 - [TypeORM and Connecting to database](https://docs.nestjs.com/techniques/database#typeorm-transactions)
 - [Using Guards](https://docs.nestjs.com/guards)


## 🛠 Skills
TypeScript, Nest, PostgreSQL, Docker, TypeOrm and JWT.


## License

Nest is [MIT licensed](LICENSE).
