# platzi_badges_curso

Este repositorio fue creado con la finalidad de seguir el curso de React.js de platzi. Impartido por Richard Kaufman.

## Que he aprendido hasta hoy?

### Componentes

Loc componentes son pequenas piezas de lego que se unen para formar cosas mas grandes com un transformer.

### Los elementos

Los elemento se diferencian de los componentes ya que no tienen las capcidades que les de react component, solo son etiquetas html simples.

### Estado de un componente

El estado e un componente podemos entenderlo como el lugar en donde se guardan todas las variabes relacionadas a ese componente.

### Propiedades

Las propiedades en un componente son atributos que hereda de otro componente padre. En el componenet padre estos atributos pertenecen a su estado.

### Levantar el estado

Se levanta el estado de un componente cuando sus atributos son declarados en el estado del componente padre, y si es necesario se pasan al componete hijo (al que antiguamente pertenecian) a traves de las props. (propiedades)

### Index.js
El index.js debe tener al menos estas lineas de codigo:

~~~
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css"; // Importamos bootstrap
import "./global.css"; // Importamos el css de estilos globales
import BadgeNew from "./pages/BadgeNew"; // Importamos la primera pagina

const container = document.getElementById("app"); // Creamos un conteneor para renderizarse en la etiqueta del index.html con id="app"

// ReactDOM.render(__que__ (elemento) No recibe componentes, __donde__)

ReactDOM.render(
  <BadgeNew
  />,
  container
);

~~~

