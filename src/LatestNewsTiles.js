import { Component } from 'react';


class LatestNewsTiles extends Component {
    render() { 
        return (
            <div className="tile-container">
                <img src={this.props.image} alt={this.props.alt}/>
                <h2>{this.props.title}</h2>
                <h5><em>{this.props.abstract}</em></h5>
                    <p>{this.props.published}</p>
                    <div className="read-div">
                    <a href={this.props.read} className="read">READ MORE</a>
                    </div>
            </div>
        )
    }
}

export default LatestNewsTiles;