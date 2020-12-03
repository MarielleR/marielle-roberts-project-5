import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor () {
        super();
        this.state = {
            userSearch: ''
        }
    }
    handleSearch = (e) => {
        this.setState({
            userSearch: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let userSearch = this.state.userSearch;
        const userSearchResults = this.props.searchResults.filter(dataItem => {
            if (dataItem.title.includes(userSearch)) {
                return dataItem
            }
        })
        this.props.searchResultsFunction(userSearchResults);
    }
    render() { 
        return (
            <div className="header-container">
                <h1>The Tech Insider<i class="fas fa-mask"></i></h1>
                <div className="second-row">
                    <button onClick={() => window.location.reload(false)} className="reload-button" title="Click for the latest news"><i className="fas fa-sync-alt reload"></i></button>
                    <form action="" className="search-bar" onSubmit={this.handleSubmit}>
                        <input id="search" className="search-articles" type="text" placeholder="Search in here!" onChange={this.handleSearch} value={this.state.userSearch} />
                        <label htmlFor="search" className="sr-only"></label>
                        <button className="search-btn" value="submit" type="submit"><i class="fas fa-search" ></i></button>
                    </form>
                </div>
                
                <div className="third-row">
                    <div className="social-media">
                        <h3>Follow us for latest news on the go!</h3>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram-square"></i>
                    </div>

                    <div className="credits">
                        <h4>Created by Marielle Roberts at <span>Juno College</span></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;