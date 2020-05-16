import React from 'react';
import ReactDOM from 'react-dom';
//COMPONENTES
import App from './components/App';
import "./global.css"
// componentDidMount(){
//   axios.get("https://api.com")
// }

//DOM div

const DOMcontainer= document.getElementById("app")

ReactDOM.render(<App/>, DOMcontainer)   
