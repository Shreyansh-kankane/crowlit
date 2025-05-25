FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
# Install dependencies
RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 80

CMD ["npm", "start"]
