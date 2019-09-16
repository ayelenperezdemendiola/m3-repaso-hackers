import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="person--data__container">
                <h2 className="data--name">{item.name}</h2>
                <p className="data--email">{item.email}</p>
                <ul className="data--passwords">
                    {item.passwords.map((password, index) => {
                        return <li className="password" key={`p${index}`}>{password}</li>
                    })}
                </ul>
                <p className="iban">{item.bank.iban}</p>
                <p className="pin">{item.bank.pin}</p>
            </div>

        )
    }
}

DataCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default DataCard; 