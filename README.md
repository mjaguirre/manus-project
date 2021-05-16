# Prueba Frontend

## Estilos

- Los estilos de esta aplicación fueron desarrollados mediante el uso de ant-design. Todos corresponden a un theme general ubicado el la carpeta styles, salvo alguna excepciones donde se agregaron estilos propios de un componente específico en un archivo separado a dicho componente

## Uso

- Esta aplicación utiliza next.js.
- Para ejecutarla de manera local, instalar las dependencias con yarn install y luego ejecutar yarn dev. La aplicación se ejecutará en el puerto 3000
- Además, esta aplicación se encuentra en producción el heroku. el url es https://manus-app.herokuapp.com/

## Metodología

- Para el desarrollo se optó por el uso de Atomic Design para definir componentes reciclables.
- Se utilizó redux para el almacenamiento dentro de la app, aunque se podía haber optado por no utilizar dicha herramienta debido a la simplicidad de la solucion requerida.

## Dependencias

- Las dependencias de esta prueba estan listadas en el archivo package.json. Estas se encuentran separadas entre las dependencias generales y aquellas que solo son necesarias para un ambiente de desarrollo.

## API

- Esta prueba esta desarrollada usando la api de rick & morty 'https://rickandmortyapi.com/api/'
- Si bien es mejor práctica dejar el url de la api en una variable de entorno, esta puesta en el código para que el corrector o correctora no tenga que crear un archivo .env en caso de que quiera ejecutarla de manera local
