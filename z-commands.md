pnpm add prisma --save-dev

* Gera prisma/schama.prisma

npx prisma init

* Para criar o banco de dados com sqlite

1. Configurar o db:

    ```bash
        DATABASE_URL="file:./db/<db_name>.db"
    ```

2. Rodar o comando para criar o banco de dados

    ```bash
        npx prisma migrate dev --name init
    ```

3. Gerar o cliente prisma:

    ```bash
        npx prisma generate
    ```
