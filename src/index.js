import React from "react";
import ReactDOM from "react-dom";

// const element = <h1>Hello, Platzi Badges from React!</h1>; // JSX

// const element = React.createElement(elemento, Atributo o props, Hijos);
//const element = React.createElement('a', { href: 'https://platzi.com'}, 'Ir a Platzi') // Con React, createElement

const name = "Richard";

//const element = React.createElement('h1', {}, `Hola soy ${name}`);

// AHora con JSX

const sum = () => 3 + 3;

// const jsx = <h1>Hola soy, {__expresiones__}</h1>
// const jsx = <h1>Hola soy, {0}</h1>

const jsx = (
  <div>
    <h1>Hola soy Richard</h1>
    <p>Soy ingeniero Frontend</p>
  </div>
);

const element = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        {},
        'Hola soy Richard'
    ),
    React.createElement(
        'p',
        {},
        'Soy ingeniero De la web'
    )
);

const container = document.getElementById("app");

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(jsx, container);
