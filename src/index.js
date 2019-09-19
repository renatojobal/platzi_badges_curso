import React from "react";
import ReactDOM from "react-dom";


import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge'


const container = document.getElementById("app");

// ReactDOM.render(__que__ (elemento) No recibe componentes, __donde__)
ReactDOM.render(<Badge/>, container);
