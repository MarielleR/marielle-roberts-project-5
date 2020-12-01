import { Component } from 'react';


class LatestNewsTiles extends Component {
   render() { 
       return (
           <div className="tile-container">
               <img src={this.props.image} alt={this.props.alt}/>
               <h2>{this.props.title}</h2>
                <p>{this.props.published}</p>
                <a href={this.props.read}>READ MORE</a>
           </div>
       )
   }
}
export default LatestNewsTiles;