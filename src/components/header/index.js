import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/">
                <div>Form</div>
            </Link>
            <Link to="/chart">
                <div>Chart</div>
            </Link>
        </header>
    )
};

export default Header;