import React from 'react';
import PropTypes from 'prop-types';

//stateless functional component - jezeli dany komponent nie uskutecznia zadnych zmian
const Header = (props) => {
    return (
        <header className="top">
            <h1>Streetwear</h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>

    )
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
