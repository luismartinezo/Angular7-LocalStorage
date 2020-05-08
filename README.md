# Angular LocalStorage

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.
En este proyecto guardamos datos locales en el navegador de donde podemos luego utilizar mostrando,
editando y eliminando en caliente.

## Instalacion y Configuracion

- Clonar o descargar proyecto, para clonar ejecutamos el comando `git clone https://github.com/luismartinezo/Angular-LocalStorage.git`
- Acceder al directorio del proyecto y ejecutar el comando `npm install` para instalar dependencias.

## Servidor de Desarrollo

Corremos en consola `ng serve --port 8000 -o` para un servidor de desarrollo en el puerto 8000 y lo abre automaticamente por el -o. Se abre la ruta `http://localhost:8000/`.

## Configurar Bootstrap

- Corremos el comando `npm i bootstrap` para instalar el framework bootstrap.
- Luego vamos al archivo angular.json y agregamos en "styles": []
  `node_modules/bootstrap/dist/css/bootstrap.min.css`
  `node_modules/bootstrap/dist/js/bootstrap.min.js`
- Paramos el server con `ctrl+c` y ejecutamos nuevamente para compilar los cambios.

## Produccion

Corremos el comando `ng build` para construir el proyecto. Se crean archivos que se guardan en `dist/` directorio. Use the `--prod` flag for a production build.
