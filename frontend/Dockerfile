FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]