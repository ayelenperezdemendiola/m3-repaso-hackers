import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <header className="app--header">
                <h1 className="app--title">Legion of Hell</h1>
                <p>{this.props.secretDay}</p>
            </header>
        )
    }
}
Header.propTypes={
    secretDay: PropTypes.string.isRequired
}
export default Header; 