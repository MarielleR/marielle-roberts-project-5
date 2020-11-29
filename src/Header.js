import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

class Header extends Component {
    render() { 
        
        return (
            <div>
                <h1>The Tech Insider</h1>
                <button onClick={() => window.location.reload(false)}><FontAwesomeIcon icon="fa-Sync-Alt" />🔄 LATEST NEWS</button>
           </div>
        )
    }
}
export default Header;