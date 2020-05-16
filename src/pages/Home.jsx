import React from "react"
//components
import Navbar from "../components/Navbar"
import Card from "../components/card";
//css
import "./pagesCSS/Home.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
//
class Home extends React.Component {
    state = {
        data: {
            results: []
        }
    }
    componentDidMount() {
        this.fetchCharacters()
    };

    fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()
        // console.log(data.results.map((element)=>{
        //     console.log(element.id);            
        // }));
        
        //-------------------------------------------------------------------------
        // const arreglos = await data.results.map(element => {
        //     console.log(element.name);
        // });
        //-------------------------------------------------------------------------
        this.setState({
            data: data
        })

    }



    render() {
        return (
            <React.Fragment>
                <Navbar />

                <section className="imgContainer">

                </section>
                <section className="columnasContainer" >

                    <div className="container" >
                        <div className="row">
                            {this.state.data.results.map(character => (
                                <Card key={character.id} imgSrc={character.image} title={character.name} imgAlt={character.name}/>
                            ))}
                        </div>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}
export default Home