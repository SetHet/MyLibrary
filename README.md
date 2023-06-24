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
docker run --rm -it --name mystore-frontend -v "$(pwd)/:/app/" mystore-frontend-angular bash
```

#### Docker Compose
Commands:
```sh
# up services
docker-compose up

# up services in detach mode
docker-compose up -d 

# down services and remove
docker-compose down

# exec bash
docker-compose exec app bash
```
