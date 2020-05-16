import React from "react"
import { Link } from "react-router-dom";
//css 
import "./componentsCSS/Navbar.css"
//componente
class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <section className="NavIzq"><Link to="/">Almost</Link></section>
                <section className="NavDer"></section>
            </nav>
        )
    }
}

export default Navbar