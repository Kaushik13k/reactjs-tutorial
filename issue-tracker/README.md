DATABASE_URL="postgresql://myusername:mysecretpassword@localhost:5432/issue-creator"

npm i prisma
prisma init
npx prisma format
npx prisma migrate dev
