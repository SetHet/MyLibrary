FROM node:20.3.1
WORKDIR /app
RUN npm install -g @angular/cli
## Para produccion
#COPY ["package.json", "package-lock.json", "/app/"]
#COPY ["src", "angular.json", "/app/"]
#RUN npm install --production
EXPOSE 4200
CMD ["ng", "serve"]