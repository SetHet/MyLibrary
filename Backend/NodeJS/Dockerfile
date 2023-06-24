FROM node:20.3.1
WORKDIR /app
COPY ["package.json", "package-lock.json", "/app/"]
RUN npm install
EXPOSE 3000
CMD ["npx", "nodemon", "index.js"]