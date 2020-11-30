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
        // console.log(userSearchResults);
        this.props.searchResultsFunction(userSearchResults);
    }
    render() { 
        return (
            <div>
                <h1>The Tech Insider</h1>
                <button onClick={() => window.location.reload(false)}><i className="fas fa-sync-alt"></i></button>

                <form action="" className="search-bar" onSubmit={this.handleSubmit}>

                    <input id="search" className="search-articles" type="text" placeholder="Search in here!" onChange={this.handleSearch} value={this.state.userSearch}/>

                    <label htmlFor="search" className="sr-only"></label>

                    <button className="search-btn" value="submit" type="submit"><i class="fas fa-search" ></i></button> 
                </form>
           </div>
        )
    }
}
export default Header;