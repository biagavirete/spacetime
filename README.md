# Spacetime 

NextJS full-stack project using Typescript, Prisma, Fastify and Github for authentication. It is an application to share memories, that are displayed in a feed.

<p align="center"><img src="https://github.com/biagavirete/spacetime/blob/master/assets/spacetime-homepage.png" width="50%"></p>
<p align="center"><img src="https://github.com/biagavirete/spacetime/blob/master/assets/spacetime-feed.png" width="50%"></p>
<p align="center"><img src="https://github.com/biagavirete/spacetime/blob/master/assets/spacetime-add-memory.png" width="50%"></p>

## Getting started

**Installing**
> Cloning the repository

```bash
$ git clone https://github.com/biagavirete/spacetime.git
$ cd spacetime
```

**Running server**
> Install dependencies

```bash
$ cd server
$ npm install
```

> Add env variables

```bash
$ cp .env.example .env
```

```bash
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

> Execute Prisma to create tables

```bash
$ npx prisma migrate dev
```

> Run server

```bash
$  cd server
$  npm run dev
```

**Starting application**

> Install dependencies

```bash
$ cd web
$ npm install
```

> Add env variable

```bash
cp .env.example .env
```

```bash
NEXT_PUBLIC_GITHUB_CLIENT_ID=
```

> Run application

```bash
$  npm run dev
```

 ➡️ Access [http://localhost:3000](http://localhost:3000)
 
## To-do

- [ ] Create memory details page

## Built with

* Typescript
* Next
* Prisma
* Axios
* TailwindCSS
