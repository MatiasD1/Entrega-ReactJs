// Documento Principal 

//1) Importar las librerias React y ReactDOM

// Esta libreria define qué es un componente y cómo los componentes funcionan juntos
import React from "react";//Creo una referencia a un módulo

// La libreria que sabe cómo hacer que un componente aparezca en la pantalla del usuario
import ReactDOM from "react-dom/client";// *** cuando no pongo ./ lo estoy yendo a buscar a la carpeta node modules

//Importo el componente App
import App from "./App";// *** ./ indica que el archivo se encuentra en el mismo directorio

// 2) Obtener una referencia al div con id root
const el = document.getElementById("root");
/*'el' de element*/ 

//3) Le decimos a react que tome control del elemento 
const root = ReactDOM.createRoot(el);
//Creo una raiz dentro del div para insertar componentes a futuro

//4) Creamos un componente (elemento que compone la interfaz del usuario o funcion de js que retorna jsx)
/*function App(){
    return <h1>Hola desde React!</h1>
}*/

//5) Mostrar el componente en la pantalla del usuario
root.render(<App/>);
// Renderizo el componente
