FROM node:20.3.1
WORKDIR /app
RUN npm -g @angular/cli
## Para produccion
#COPY ["package.json", "package-lock.json", "/app/"]
#COPY ["src", "angular.json", "/app/"]
#RUN npm install --production
EXPOSE 3001
CMD ["npx", "nodemon", "index.js"]