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

https://github.com/settings/applications/2713280

https://ninelabs.blog/login-no-next-js-14-com-next-auth/

https://www.figma.com/design/az9FgE7g8y0gBawmc0lUwa/BookWise--%E2%80%A2-Desafio-React-(Copy)?node-id=1-17&node-type=canvas&t=qYkhBBlTABdQQrfl-0
