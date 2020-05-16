import React from "react"

import "./componentsCSS/card.css";

class Card extends React.Component {
    render() {
        return (

            <div className="col-6 col-md-3">
                <div className=" my-3 customCardContainer">
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                    <div className="footerCard">
                        Name:{this.props.title}
                    </div>
                </div>
            </div>
            // div className="card customCardContainer " style={{ width: "18rem" }}>
            // <img className="card-img-top" src={this.props.imgSrc} alt={this.props.imgAlt} />
            // <div className="card-body">
            //     <p className="card-text">
            //         Name: {this.props.title}
            //     </p>
            // </div>

            // </div>
        )
    }
}
export default Card