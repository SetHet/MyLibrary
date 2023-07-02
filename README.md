# MyLibrary
 Web application to save and view documents, books, etc.

## Modules
* Fontend
    * Angular
    * ASP.NET (Future)
* Backend
    * NodeJS
    * DotNet (Future)
* Data Base
    * MongoDB

## Technologies
* Docker
* TypeScript
* JavaScript
* HTML
* CSS / SCSS
* MongoDB
* C# (Future)
* DotNet (Future)
* ASP.NET (Future)


Backends
=========

NodeJS
------

### Build
From `Backend/NodeJS/` execute the commands.
#### Dockerfile
Commands:
```sh
# build
docker build -t mystore-backend-nodejs .

# run 
docker run --rm -it --name mystore-backend -v "$(pwd)/:/app/" mystore-backend-nodejs

# run & bash
docker run --rm -it --name mystore-backend -v "$(pwd)/:/app/" mystore-backend-nodejs bash
```

#### Docker Compose
Commands:
```sh
# build services
docker-compose build

# up services
docker-compose up

# up services in detach mode
docker-compose up -d 

# down services and remove
docker-compose down

# exec bash
docker-compose exec app bash
```

Angular
------

### Build
From `Frontend/Angular/` execute the commands.
#### Dockerfile
Commands:
```sh
# build
docker build -t mystore-frontend-angular .

# run 
docker run --rm -it --name mystore-frontend -v "$(pwd)/:/app/" mystore-frontend-angular

# run & bash
docker run --rm -it --name mystore-frontend -v "$(pwd)/:/app/" mystore-frontend-angular bash
```

#### Docker Compose
Commands:
```sh
# build services
docker-compose build

# up services
docker-compose up

# up services in detach mode
docker-compose up -d 

# down services and remove
docker-compose down

# exec bash
docker-compose exec app bash
```

#### Development in Docker Container
```sh
# init server dev
ng serve

# init server dev, fix dev in web explorer
ng serve --host=0.0.0.0
```