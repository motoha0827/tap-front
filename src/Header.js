import React from 'react';
import SignIn from './SignIn';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="Tap">
                    <Link to="/" style={{ textDecoration: 'none' ,color: 'black'}} >Tap!</Link>
                </div>
                {/* <h1>Tap!</h1> */}
                <div className="signin-header">
                    <SignIn />
                </div>
            </div>
        );
    }
}

export default Header;