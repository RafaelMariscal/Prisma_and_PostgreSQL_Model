## Techs Used

<p>
React
 | NextJs
 | Semantic UI
 | NodeJs
 | Prisma
 | Docker
 | PostgreSQL
</p>



## Getting Started

First, clone this repository and install all dependencies:

```bash
$ git clone https://github.com/RafaelMariscal/Prisma_and_PostgreSQL_Model
$ cd Prisma_and_PostgreSQL_Model
$ yarn
```

A ``.env`` file needs to be updated with the following environment variables schema:

``DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"``

Like you can see, the DATABASE_URL needs to be filled with user, password, host uri, port and database name. A .env model is setted into this project, if you want to run this project just like it is, run the following terminal commands:

```bash
$ docker compose up -d
$ npx prisma generate
$ npx prisma migrate dev --preview-feature
```

After all set, run the development server:

```bash
$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see main page.

Use the inputs to create a register to the table. To delete data, use the delete button.

The main reason for this project is to initiate the studies with <strong>Prisma</strong>, <strong>Docker</strong> and <strong>PostgreSQL</strong>. So this is a model for a simple "CRUD" using this tecs. The Frontend was built using <strong>Semantic UI React</strong> only for productivity matter.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/nextjs) - learn about Prima + Next.js framework.
- [Docker Documentation](https://docs.docker.com/get-started/) - learn about Docker compose projects.
- [Prisma + PostgreSQL](https://nextjs.org/docs) - learn about Prima + PostgreSQL projects.
- [PostgreSQL Documentation](https://www.postgresql.org/docs) - learn about PostgreSQL.
- [Semantic UI Documentation](https://semantic-ui.com/introduction/getting-started.html) - learn about Semantic UI.
