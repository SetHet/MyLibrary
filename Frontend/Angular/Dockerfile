FROM node:20.3.1
WORKDIR /app
COPY ["package.json", "package-lock.json", "/app/"]
RUN npm install
RUN npm -g @angular/cli
EXPOSE 3001
CMD ["npx", "nodemon", "index.js"]