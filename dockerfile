FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
RUN pnpm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
