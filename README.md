# nest-nestia-drizzle-next

This is the monorepo template for my technical stack.

- Frontend: Next.JS, material ui;
- Backend: Nest.JS, nestia, drizzle orm;
- Database: PostgreSQL;
- Containerization: Docker.

## Getting started

To launch this app, I usually use Docker Compose, but it can also be launched locally with Node version >= 18 and Yarn version 4 or higher.

To get started, create a new repository using this template and copy it to your machine.

```
git clone *your new repository url*
```

Next install the dependencies and you're ready to go!

```
yarn install
```

Next we should configure the project. The project can be configured with `.env.local` file in frontend and backend directories in packages directory. If the file does not exist you can create it. There are all configs, that are used in this project:

- Frontend .env.local file example:

```
# The URL that the interface project will access to backend server;
API_URL=https://example.com

# The secret word for next-auth package.
AUTH_SECRET=change_me
```

You can read about AUTH_SECRET in [there](https://authjs.dev/getting-started/deployment).

- Backend .env.local file example:

```
PORT=8000

DB_HOST=localhost

DB_PORT=5432

DB_NAME=umbridge

DB_SCHEMA=umbridge

DB_USER=postgres

DB_PASSWROD=postgres

RUN_MIGRATIONS=false

NODE_ENV=development
```

After all you can run your app by the command below:

```
yarn dev
```

If you find a mistake you can create an issue or make a PR yourself.
